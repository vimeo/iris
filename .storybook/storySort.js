const categoryOrder = [
  'iris',
  'tokens',
  'color',
  'components',
  'typography',
  'icons',
  'illustration',
  '*',
  'utilties',
  'labs',
];

const getOrder = (header) =>
  categoryOrder.findIndex((h) => h === header);

const defaultSort = (a, b) =>
  a[1].id.localeCompare(b[1].id, undefined, { numeric: true });

const stripCategory = (story) =>
  story[1].kind.substr(0, story[1].kind.indexOf('/')).toLowerCase();

export function storySort(cur, next) {
  const a = stripCategory(cur);
  const b = stripCategory(next);

  if (a !== b) return getOrder(a) - getOrder(b);

  // order stories /props, then /examples, then remaining
  if (cur[1]?.id.includes('index')) return 1;
  if (next[1]?.id.includes('index')) return -1;

  if (cur[1]?.id.includes('examples')) return 1;
  if (next[1]?.id.includes('examples')) return -1;

  return defaultSort(cur, next);
}
