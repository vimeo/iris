export function usePortal() {
  let outlet = document.getElementById('iris-portals');

  if (!outlet) {
    outlet = document.createElement('div');
    outlet.id = 'iris-portals';
    document.body.appendChild(outlet);
  }

  return outlet;
}
