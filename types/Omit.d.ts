import Diff from './Diff';
// Omit a set of keys joined by pipes from a type or interface.
declare type Omit<T, K extends keyof T> = Pick<T, Diff<keyof T, K>>;
export default Omit;