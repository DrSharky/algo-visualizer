import { useMemo, useState } from "react"
import type { BaseStep } from "../data/types";

export function useAlgorithmSteps<TInput, TStep extends BaseStep>(
    generateSteps: (input: TInput) => TStep[],
    input: TInput
) {
    const steps = useMemo(() => generateSteps(input), [generateSteps, input]);
    const [index, setIndex] = useState(0);

    const next = () =>
        setIndex((i) => Math.min(i + 1, steps.length - 1));

    const prev = () =>
        setIndex((i) => Math.max(i - 1, 0));

    return {
        steps,
        index,
        step: steps[index],
        next,
        prev
    };
}