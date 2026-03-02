type Props = {
    stepIndex: number;
    totalSteps: number;
    onNext: () => void;
    onPrev: () => void;
};

export default function StepController({
    stepIndex,
    totalSteps,
    onNext,
    onPrev
}: Props) {
    return (
        <div>
            <button onClick={ onPrev } disabled={ stepIndex === 0 }>
                Prev
            </button>

            <span>
                { stepIndex + 1} / { totalSteps }
            </span>

            <button onClick={ onNext } disabled={ stepIndex === totalSteps - 1 }>
                Next
            </button>
        </div>
    );
}