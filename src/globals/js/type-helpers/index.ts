export type Overwrite<T, U> = { [P in Diff<keyof T, keyof U>]: T[P] } & U;

// Remove the difference of two types or interfaces
export type Diff<T extends string, U extends string> = ({ [P in T]: P } &
    { [P in U]: never } & { [x: string]: never })[T];

// Omit a set of keys joined by pipes from a type or interface.
export type Omit<T, K extends keyof T> = Pick<T, Diff<keyof T, K>>;
