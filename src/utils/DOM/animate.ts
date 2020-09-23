export function domStyle(ref, style) {
  if (!ref.current) return;
  for (const key in style) ref.current.style[key] = style[key];
}

export function animate(ref, from, to) {
  const willChange = Object.keys(to).join(' ');

  requestAnimationFrame(() => {
    domStyle(ref, { ...from, ...set, willChange });

    requestAnimationFrame(() => {
      domStyle(ref, { ...to, ...unset });
    });
  });
}

const set = {
  backfaceVisibility: 'hidden',
  transformStyle: 'preserve-3d',
};

const unset = {
  backfaceVisibility: 'unset',
  willChange: 'unset',
  transformStyle: 'unset',
};
