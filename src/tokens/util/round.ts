export function round(number: number, decimals = 2) {
  if (decimals === 0) return Math.round(number);

  const base = 10 ** decimals;
  return Math.round(number * base) / base;
}
