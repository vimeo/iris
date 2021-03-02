import { ReactEventHandler } from 'react';

export type Close = ReactEventHandler;
export type ClosePromise = {
  reject?: ReactEventHandler; // reject, aka. onDismiss
  accept?: ReactEventHandler; // resolve, aka. onClose
  complete?: ReactEventHandler; // finally
};

export type onClose = Close | ClosePromise;

export function useClose(onClose: onClose) {
  if (!onClose) return {};
  const { accept, complete, reject } = onClose as ClosePromise;

  return {
    accept,
    complete: typeof onClose === 'function' ? onClose : complete,
    reject,
  };
}
