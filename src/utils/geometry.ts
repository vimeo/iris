export function geometry(ref) {
  return ref && ref.current && ref.current.getBoundingClientRect();
}
