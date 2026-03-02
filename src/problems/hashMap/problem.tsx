import type { ProblemDefinition } from "../../data/types";
import type { HashMapStep, HashMapInput } from "./types";
import { generateHashMapSteps } from "./algorithm";

const nums = [2, 7, 11, 15];
const target = 9;

export const hashMapProblem: ProblemDefinition<HashMapInput, HashMapStep> = {
    title: "Two Sum (Hashmap)",
    description: "Find two numbers that add up to the target.",
    initialInput: { nums, target },
    generateSteps: ({ nums, target }) => generateHashMapSteps(nums, target),
    renderStep: (step, input) => {
        const { nums } = input;

        return (
            <div style={{ display: "flex", gap: 40 }}>
                {/* Array */}
                <div>
                <h3>Array</h3>
                <div style={{ display: "flex", gap: 10 }}>
                    {nums.map((n, i) => (
                    <div
                        key={i}
                        style={{
                        width: 40,
                        height: 40,
                        border: "1px solid black",
                        background:
                            step.foundPair?.includes(i) ? "lightgreen" :
                            i === step.index ? "#cc5200" : "#5c5c5c",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                        }}
                    >
                        {n}
                    </div>
                    ))}
                </div>
                </div>

                {/* Hashmap */}
                <div>
                <h3>Hashmap</h3>
                {Object.entries(step.map).map(([key, val]) => (
                    <div key={key}>
                    {key} → {val}
                    </div>
                ))}
                </div>
            </div>
        )
    }
}