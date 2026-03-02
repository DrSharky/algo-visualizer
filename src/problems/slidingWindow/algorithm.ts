import type { SlidingWindowStep } from "./types";

export function generateSlidingWindowSteps(
    input: string[],
):  SlidingWindowStep[] {
    const steps: SlidingWindowStep[] = [];

    let left = 0;
    let set = new Set<string>();
    let maxSize = 0;

    for (let right = 0; right < input.length; right++) {
        while (set.has(input[right])) {
            set.delete(input[left]);
            left++;
        }

        set.add(input[right]);
        maxSize = Math.max(maxSize, set.size);

        steps.push({
            left,
            right,
            currentSet: new Set(set),
            note: `Window: ${[...set].join(",")} | max length: ${maxSize}`
        });
    }
    return steps;
}