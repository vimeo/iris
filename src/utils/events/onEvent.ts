import { EventHandler } from 'react';

export function onEvent(
  callback: (e) => void = null,
  handler: EventHandler<any> = null
) {
  return (e) => {
    callback && callback(e);
    handler && handler(e);
  };
}
