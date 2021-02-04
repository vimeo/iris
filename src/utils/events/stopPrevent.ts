import { SyntheticEvent } from 'react';

export function stopPrevent<Event extends SyntheticEvent<any>>(
  callback: (event: Event) => void
) {
  return (event: Event) => {
    event.preventDefault();
    event.stopPropagation();
    callback(event);
  };
}
