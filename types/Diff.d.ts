// Remove the difference of two types or interfaces
declare type Diff<T extends string, U extends string> = ({ [P in T]: P } &
    { [P in U]: never } & { [x: string]: never })[T];

export default Diff;