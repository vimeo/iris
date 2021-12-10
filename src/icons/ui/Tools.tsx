import React, { forwardRef, Ref, SVGAttributes } from 'react';

import { IrisIcon } from '../icons.types';

export const Tools: IrisIcon = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.4437 2.16899C14.721 1.98337 15.0727 1.94831 15.3812 2.0755C18.4649 3.3469 20.5 6.54152 20.5 10C20.5 12.9164 19.2227 15.1116 17.0007 16.5614V21.047H15.0007V16C15.0007 15.6402 15.194 15.3081 15.5069 15.1304C17.4445 14.0301 18.5 12.3774 18.5 10C18.5 7.88146 17.5204 5.93347 16 4.73579V10C16 10.5523 15.5523 11 15 11H9C8.44772 11 8 10.5523 8 10C8 9.00266 8.00819 8.01995 8.01585 7.10115C8.02307 6.23455 8.02982 5.42481 8.02877 4.71327C6.49195 5.90896 5.5 7.86812 5.5 10C5.5 12.3772 6.55603 14.03 8.49382 15.1304C8.8067 15.3081 9 15.6402 9 16V21.047H7V16.5614C4.77808 15.1117 3.5 12.9166 3.5 10C3.5 6.54152 5.53508 3.3469 8.61883 2.0755C8.92033 1.95119 9.2635 1.98171 9.53833 2.15727C9.81316 2.33283 9.98512 2.63137 9.99908 2.95718C10.042 3.95857 10.0293 5.50195 10.0153 7.20401C10.0105 7.78911 10.0055 8.39297 10.0026 9H14V3C14 2.66631 14.1664 2.35461 14.4437 2.16899Z"
      />
    </svg>
  )
);

Tools.tags = [
  'control',
  'create',
  'edit',
  'editor',
  'source',
  'tool',
  'tools',
  'wrench',
];
