import { createPortal } from 'react-dom';

export function usePortal(children = null) {
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
