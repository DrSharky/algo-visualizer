import type { BaseStep } from "../../data/types"

export type HashMapStep = BaseStep & {
    index: number;
    value: number;
    complement: number;
    map: Record<number, number>;
    foundPair?: [number, number];
}

export type HashMapInput = {
    nums: number[];
    target: number;
}