export function scale(grade) {
  const raw = 6 + (grade / 400) * (grade / 47) * 1.618034;
  const rounded = Math.round(raw * 100) / 100;
  const floored = Math.max(rounded, 10);
  return floored;
}
