import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { router, Stack, usePathname, type Href } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { ErrorBoundary } from "@/components/ErrorBoundary";
import { AppProvider, useApp, useThemePreference } from "@/context/AppContext";

SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

/**
 * Once persisted state has loaded, send first-run users (who haven't onboarded)
 * to the onboarding screen. Runs inside AppProvider so it can read `hydrated`.
 */
function OnboardingGate() {
  const { hydrated, onboarded } = useApp();
  const pathname = usePathname();

  useEffect(() => {
    if (!hydrated) return;
    const inOnboardingFlow = pathname === "/onboarding" || pathname === "/placement";
    if (!onboarded && !inOnboardingFlow) {
      router.replace("/onboarding" as Href);
    }
  }, [hydrated, onboarded, pathname]);

  return null;
}

function RootLayoutNav() {
  const theme = useThemePreference();
  return (
    <>
      <StatusBar style={theme === "dark" ? "light" : "dark"} />
      <OnboardingGate />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="onboarding" options={{ headerShown: false, gestureEnabled: false }} />
        <Stack.Screen name="placement" options={{ headerShown: false, presentation: "card" }} />
        <Stack.Screen name="story/[id]" options={{ headerShown: false, presentation: "card" }} />
        <Stack.Screen name="lesson/[id]" options={{ headerShown: false, presentation: "card" }} />
        <Stack.Screen name="review" options={{ headerShown: false, presentation: "card" }} />
        <Stack.Screen name="flashcards" options={{ headerShown: false, presentation: "card" }} />
        <Stack.Screen name="writing" options={{ headerShown: false, presentation: "card" }} />
        <Stack.Screen name="typing" options={{ headerShown: false, presentation: "card" }} />
        <Stack.Screen name="quiz" options={{ headerShown: false, presentation: "card" }} />
        <Stack.Screen name="grammar" options={{ headerShown: false, presentation: "card" }} />
      </Stack>
    </>
  );
}

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) return null;

  return (
    <SafeAreaProvider>
      <ErrorBoundary>
        <QueryClientProvider client={queryClient}>
          <AppProvider>
            <GestureHandlerRootView style={{ flex: 1 }}>
              <KeyboardProvider>
                <RootLayoutNav />
              </KeyboardProvider>
            </GestureHandlerRootView>
          </AppProvider>
        </QueryClientProvider>
      </ErrorBoundary>
    </SafeAreaProvider>
  );
}
