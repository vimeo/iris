import { useState } from 'react';

import { generateUID } from '../utils';

interface Query<Item> {
  goto: (page: number) => void;
  items: Item[];
  page: number;
  pageSize?: number;
  total?: number;
  paging: {
    next: string;
    first: string;
    last: string;
    prev: string;
  };
}

export function useFakeQuery({
  page: initialPage = 1,
  total,
  pageSize,
}): Query<any> {
  const [page, pageSet] = useState(initialPage);
  const paging = { next: null, first: null, last: null, prev: null };

  const pages = total / pageSize;

  const length = pages >= page ? pageSize : total % pageSize;
  const items = Array.from({ length }, (_, i) => ({
    id: generateUID(),
    content: `Item ${i + 1} / Page ${page}`,
  }));

  function goto(page) {
    const valid = page > 0 && page <= Math.ceil(pages);

    if (valid) pageSet(page);
    else console.warn('invalid page! [', page, ']');
  }

  return { items, page, paging, goto };
}
