import { SSR } from './SSR';

type Attributes = {
  -readonly [Atttribute in keyof HTMLElement]?: HTMLElement[Atttribute];
};

type Tag = keyof HTMLElementTagNameMap;

export function createElement(tag: Tag, attributes: Attributes) {
  if (SSR) return null;

  const element = document.createElement(tag);

  // assign HTMLElement-like object of attributes and
  // their values to newly created Element
  Object.entries(attributes).map(
    ([attr, value]) => (element[attr] = value)
  );

  return element;
}
