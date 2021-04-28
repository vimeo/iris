const delays = [];

const logBase = (n = 1, base = 10) => Math.log(n) / Math.log(base);
const calcDelay = (i: number) => logBase(i, 1.1) * 10;

for (let i = 1; i < 30; i++) delays[i] = Math.round(calcDelay(i));
export const delay = ({ delay }) => delays[delay];
