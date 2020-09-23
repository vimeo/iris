export function throttle(fn, dur) {
  let halt;
  const reset = () => (halt = setTimeout(() => (halt = false), dur));
  return (...args) => !halt && reset() && fn(...args);
}
