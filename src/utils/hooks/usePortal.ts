import { ReactNode, ReactPortal } from 'react';
import { createPortal } from 'react-dom';

export function usePortal(
  children: ReactNode = null
): HTMLElement | ReactPortal {
  let outlet = document.getElementById('iris-portals');

  if (!outlet) {
    outlet = document.createElement('div');
    outlet.id = 'iris-portals';
    document.body.appendChild(outlet);
  }

  if (children) {
    const portal = createPortal(children, outlet);

    return portal;
  } else {
    return outlet;
  }
}
