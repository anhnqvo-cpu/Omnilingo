import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useCallback, useContext, useEffect, useState } from "react";

import type { LanguageCode } from "@/data/curriculum/types";

export interface SRSCard {
  dueDate: number;
  interval: number;
  easeFactor: number;
  reps: number;
}

interface AppState {
  /** Currently-selected language for lessons. Each language has its own curriculum. */
  languageCode: LanguageCode;
  streak: number;
  lastStudyDate: string;
  xp: number;
  level: number;
  completedStories: string[];
  completedLessons: string[];
  srsData: Record<string, SRSCard>;
  todayGoals: { vocab: boolean; reading: boolean; writing: boolean; quiz: boolean };
  /** Whether the learner has completed first-run onboarding (incl. optional placement). */
  onboarded: boolean;
  /** Human-readable level the learner placed into, if they took the placement test. */
  placementLevel?: string;
}

interface AppContextValue extends AppState {
  /** True once persisted state has loaded from storage. Used to gate the onboarding redirect. */
  hydrated: boolean;
  setLanguage: (lang: LanguageCode) => void;
  addXP: (amount: number) => void;
  markStoryComplete: (id: string) => void;
  markLessonComplete: (id: string) => void;
  updateSRS: (cardId: string, rating: 1 | 2 | 3 | 4) => void;
  markGoal: (goal: keyof AppState["todayGoals"]) => void;
  getDueCards: () => string[];
  /** Finish onboarding as a pure beginner (no placement). */
  completeOnboarding: () => void;
  /** Apply a placement result: mark the given lessons complete and record the level. */
  applyPlacement: (lessonIds: string[], levelLabel: string) => void;
}

const STORAGE_KEY = "omnilingo_state";

const defaultState: AppState = {
  languageCode: "ja",
  streak: 0,
  lastStudyDate: "",
  xp: 0,
  level: 1,
  completedStories: [],
  completedLessons: [],
  srsData: {},
  todayGoals: { vocab: false, reading: false, writing: false, quiz: false },
  onboarded: false,
  placementLevel: undefined,
};

const AppContext = createContext<AppContextValue | null>(null);

function calcLevel(xp: number): number {
  return Math.floor(xp / 500) + 1;
}

function computeNextInterval(
  rating: 1 | 2 | 3 | 4,
  interval: number,
  easeFactor: number
): { interval: number; easeFactor: number } {
  if (rating === 1) return { interval: 1, easeFactor: Math.max(1.3, easeFactor - 0.2) };
  if (rating === 2) return { interval: Math.max(1, Math.ceil(interval * 1.2)), easeFactor: Math.max(1.3, easeFactor - 0.15) };
  if (rating === 3) return { interval: Math.max(1, Math.ceil(interval * easeFactor)), easeFactor };
  return { interval: Math.max(1, Math.ceil(interval * easeFactor * 1.3)), easeFactor: Math.min(2.8, easeFactor + 0.1) };
}

function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AppState>(defaultState);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then((raw) => {
      if (!raw) {
        setHydrated(true);
        return;
      }
      try {
        const saved = JSON.parse(raw) as AppState;
        const today = todayStr();
        const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
        let streak = saved.streak ?? 0;
        if (saved.lastStudyDate === today) {
          // Already studied today, keep streak
        } else if (saved.lastStudyDate === yesterday) {
          // Studied yesterday, streak continues
        } else if (saved.lastStudyDate && saved.lastStudyDate < yesterday) {
          streak = 0;
        }
        const todayGoals =
          saved.lastStudyDate === today
            ? (saved.todayGoals ?? defaultState.todayGoals)
            : { vocab: false, reading: false, writing: false, quiz: false };
        setState({ ...defaultState, ...saved, streak, todayGoals });
      } catch {
        // ignore
      } finally {
        setHydrated(true);
      }
    });
  }, []);

  const save = useCallback((newState: AppState) => {
    setState(newState);
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
  }, []);

  const addXP = useCallback(
    (amount: number) => {
      setState((prev) => {
        const xp = prev.xp + amount;
        const level = calcLevel(xp);
        const today = todayStr();
        const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
        let streak = prev.streak;
        if (prev.lastStudyDate !== today) {
          streak = prev.lastStudyDate === yesterday ? prev.streak + 1 : 1;
        }
        const next = { ...prev, xp, level, streak, lastStudyDate: today };
        AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        return next;
      });
    },
    []
  );

  const markStoryComplete = useCallback(
    (id: string) => {
      setState((prev) => {
        if (prev.completedStories.includes(id)) return prev;
        const next = { ...prev, completedStories: [...prev.completedStories, id] };
        AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        return next;
      });
    },
    []
  );

  const markLessonComplete = useCallback(
    (id: string) => {
      setState((prev) => {
        if (prev.completedLessons.includes(id)) return prev;
        const next = { ...prev, completedLessons: [...prev.completedLessons, id] };
        AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        return next;
      });
    },
    []
  );

  const updateSRS = useCallback(
    (cardId: string, rating: 1 | 2 | 3 | 4) => {
      setState((prev) => {
        const existing = prev.srsData[cardId] ?? { interval: 1, easeFactor: 2.5, reps: 0, dueDate: Date.now() };
        const { interval, easeFactor } = computeNextInterval(rating, existing.interval, existing.easeFactor);
        const dueDate = Date.now() + interval * 86400000;
        const next = {
          ...prev,
          srsData: {
            ...prev.srsData,
            [cardId]: { dueDate, interval, easeFactor, reps: existing.reps + 1 },
          },
        };
        AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        return next;
      });
    },
    []
  );

  const setLanguage = useCallback((lang: LanguageCode) => {
    setState((prev) => {
      const next = { ...prev, languageCode: lang };
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const markGoal = useCallback(
    (goal: keyof AppState["todayGoals"]) => {
      setState((prev) => {
        const todayGoals = { ...prev.todayGoals, [goal]: true };
        const next = { ...prev, todayGoals };
        AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        return next;
      });
    },
    []
  );

  const getDueCards = useCallback((): string[] => {
    const now = Date.now();
    return Object.entries(state.srsData)
      .filter(([, card]) => card.dueDate <= now)
      .map(([id]) => id);
  }, [state.srsData]);

  const completeOnboarding = useCallback(() => {
    setState((prev) => {
      const next = { ...prev, onboarded: true };
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const applyPlacement = useCallback((lessonIds: string[], levelLabel: string) => {
    setState((prev) => {
      const merged = Array.from(new Set([...prev.completedLessons, ...lessonIds]));
      const next = { ...prev, completedLessons: merged, onboarded: true, placementLevel: levelLabel };
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        hydrated,
        setLanguage,
        addXP,
        markStoryComplete,
        markLessonComplete,
        updateSRS,
        markGoal,
        getDueCards,
        completeOnboarding,
        applyPlacement,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
