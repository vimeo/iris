export function clamp(
  number: number,
  { min = 0, max = 1000 } = { min: 0, max: 1000 }
) {
  return Math.min(Math.max(number, min), max);
}
