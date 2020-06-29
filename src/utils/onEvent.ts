import { EventHandler } from 'react';

export function onEvent(
  callback: () => void = null,
  handler: EventHandler<any> = null,
) {
  return e => {
    callback && callback();
    handler && handler(e);
  };
}
