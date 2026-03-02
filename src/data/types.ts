export type BaseStep = {
    note?: string
};

export type ProblemDefinition<TInput, TStep extends BaseStep> = {
    title: string;
    description: string;
    initialInput: TInput;
    generateSteps: (input: TInput) => TStep[];
    renderStep: (step: TStep, input: TInput) => React.ReactNode;
};