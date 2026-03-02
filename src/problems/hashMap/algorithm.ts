import type { HashMapStep } from "./types";

export function generateHashMapSteps(
    nums: number[],
    target: number
):  HashMapStep[] {
    const steps: HashMapStep[] = [];
    const map: Record<number, number> = {};

    for (let i = 0; i < nums.length; i++) {
        const value = nums[i];
        const complement = target - value;

        // Step: checking map
        steps.push({
            index: i,
            value,
            complement,
            map: { ...map },
            note: `Looking for ${ complement } in hashmap`
        });

        if (map[complement] !== undefined) {
            steps.push({
                index: i,
                value,
                complement,
                map: { ...map },
                foundPair: [map[complement], i],
                note: `Found pair! ${ complement } + ${ value } = ${ target }`
            });

            return steps;
        }

        map[value] = i;

        // Step: inserting into map
        steps.push({
            index: i,
            value,
            complement,
            map: { ...map },
            note: `Insert ${ value } into hashmap`
        });
    }
    return steps;
}