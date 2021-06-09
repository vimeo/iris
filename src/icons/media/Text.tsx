import React, { forwardRef, Ref, SVGAttributes } from 'react';

import { IrisIcon } from '../icons.types';

export const Text: IrisIcon = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" ref={ref} {...props}>
      <path d="M12.3242 4.67566H5.32422C4.77193 4.67566 4.32422 5.12337 4.32422 5.67566C4.32422 6.22794 4.77193 6.67566 5.32422 6.67566H11.3242V19.6757C11.3242 20.2279 11.7719 20.6757 12.3242 20.6757C12.8765 20.6757 13.3242 20.2279 13.3242 19.6757V6.67566H19.3242C19.8765 6.67566 20.3242 6.22794 20.3242 5.67566C20.3242 5.12337 19.8765 4.67566 19.3242 4.67566H12.3242Z" />
    </svg>
  )
);

Text.tags = ['editor', 'media', 'text'];
