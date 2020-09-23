import React, {
  cloneElement,
  useRef,
  useLayoutEffect,
  useState,
} from 'react';

import { geometry, animate } from '../DOM';

export function useFlip(children) {
  const flipped = children.map((item, key) => (
    <FlipItem key={key}>{item}</FlipItem>
  ));

  const [items, setItems] = useState(flipped);

  const newItems = items.map((item, key) =>
    cloneElement(item, { ...item.props, force: key })
  );

  return [newItems, setItems];
}

function FlipItem({ children, ...props }) {
  const [last, setLast] = useState(null);
  const ref = useRef(null);

  useLayoutEffect(() => {
    const now = geometry(ref.current);

    if (now?.left !== last?.left && now?.top !== last?.top) {
      const deltaX = last?.left - now?.left;
      const deltaY = last?.top - now?.top;

      const from = {
        transform: `translate(${deltaX}px, ${deltaY}px)`,
        transition: 'transform 0s',
      };

      const to = {
        transform: '',
        transition: 'transform 500ms',
      };

      animate(ref, from, to);
      setLast(now);
    }
  }, [last, setLast]);

  return cloneElement(children, { ref, ...props });
}
