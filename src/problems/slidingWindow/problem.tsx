import type { ProblemDefinition } from "../../data/types";
import type { SlidingWindowStep } from "./types";
import { generateSlidingWindowSteps } from "./algorithm";
import { motion } from "framer-motion";

const data = ["a", "b", "c", "a", "b", "c", "b", "b"];

export const slidingWindowProblem: ProblemDefinition<string[], SlidingWindowStep> = {
  title: "Sliding Window",
  description:
    "Find the longest substring without repeating characters.",

  initialInput: data,

  generateSteps: generateSlidingWindowSteps,

  renderStep: (step, input) => {
    const array = input as string[];

    return (
      <div style={{ display: "flex", gap: 10 }}>
        {array.map((item, i) => (
          <div
            key={i}
            style={{
              width: 40,
              height: 40,
              border: "1px solid black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative"
            }}
          >
            {item}

            {i === step.left && (
              <motion.div layoutId="left-pointer" style={{ position: "absolute", bottom: -20 }}>
                L
              </motion.div>
            )}

            {i === step.right && (
              <motion.div layoutId="right-pointer" style={{ position: "absolute", top: -20 }}>
                R
              </motion.div>
            )}
          </div>
        ))}
      </div>
    );
  }
};