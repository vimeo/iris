import Diff from './Diff';
// Overwrite a keyed type from an interface
declare type Overwrite<T, U> = { [P in Diff<keyof T, keyof U>]: T[P] } & U;
export default Overwrite;