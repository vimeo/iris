export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
export type Override<T, U> = Omit<T, keyof U> & U;
