import type { BaseStep } from "../../data/types";

export type SlidingWindowStep = BaseStep & {
  left: number;
  right: number;
  currentSet: Set<string>;
};