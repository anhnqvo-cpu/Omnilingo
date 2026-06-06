import React from "react";

import { StrokeWriter } from "@/components/StrokeWriter";
import type { WritingStep as WritingStepData } from "@/data/curriculum/types";

import { StepShell } from "./StepShell";

interface Props {
  data: WritingStepData;
  onNext: () => void;
}

export function WritingStep({ data, onNext }: Props) {
  return (
    <StepShell
      eyebrow="Writing"
      title={`Write ${data.char}`}
      subtitle="Watch the stroke order, trace it, then write from memory."
    >
      <StrokeWriter char={data.char} onComplete={onNext} />
    </StepShell>
  );
}
