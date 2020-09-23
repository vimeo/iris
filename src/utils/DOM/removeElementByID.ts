export function removeElementByID(id: string) {
  const element = document.getElementById(id);
  if (element) element.outerHTML = '';
}
