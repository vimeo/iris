import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const NoteAndPencil = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" ref={ref} {...props}>
      <path
        d="M2 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5h-2V3H4v16h4v2H4a2 2 0 0 1-2-2V3Zm4 3h8v2H6V6Zm6 4H6v2h6v-2Zm-6 4h3v2H6v-2Zm15.182-3.953.15.14a3.16 3.16 0 0 1-.15 4.29l-6.97 7.2a1 1 0 0 1-.57.29l-3.46.51a1 1 0 0 1-1.16-1.19l.49-3.58a1 1 0 0 1 .29-.58l7-7.22a2.93 2.93 0 0 1 4.24 0l.14.14Zm-8.15 9.92 6.77-7a1.06 1.06 0 0 0-.04-1.48l-.15-.15a1 1 0 0 0-1.41 0l-6.76 7-.26 1.87 1.85-.24Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  )
);
