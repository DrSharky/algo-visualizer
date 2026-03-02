import StepController from "./StepController";
import type { ProblemDefinition } from "../data/types";
import { useAlgorithmSteps } from "../hooks/useAlgorithmSteps";
import type { BaseStep } from "../data/types";

type Props<TInput, TStep extends BaseStep> = {
    problem: ProblemDefinition<TInput, TStep>;
};

export default function ProblemVisualizer<TInput, TStep extends BaseStep>({
  problem
}: Props<TInput, TStep>) {
  const { steps, index, step, next, prev } =
    useAlgorithmSteps(problem.generateSteps, problem.initialInput);

  return (
    <div>
      <h1>{problem.title}</h1>
      <p>{problem.description}</p>

      {/* Render Algorithm Visualization */}
      <div style={{ marginBottom: 20 }}>
        {problem.renderStep(step, problem.initialInput)}
      </div>

      {/* Optional Explanation */}
      {step?.note && (
        <div style={{ marginBottom: 20 }}>
          <strong>Explanation:</strong> {step.note}
        </div>
      )}

      <StepController
        stepIndex={index}
        totalSteps={steps.length}
        onNext={next}
        onPrev={prev}
      />
    </div>
  );
}