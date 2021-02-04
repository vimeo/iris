import { useImperativeHandle, useRef, Ref } from 'react';

export function useForwardRef<InitialValue = null>(
  forwardRef: Ref<InitialValue>,
  initialValue: InitialValue = null
) {
  const ref = useRef(initialValue);
  useImperativeHandle(forwardRef, () => ref.current);

  return ref;
}
