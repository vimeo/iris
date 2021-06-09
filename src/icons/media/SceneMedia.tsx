import React, { forwardRef, Ref, SVGAttributes } from 'react';

import { IrisIcon } from '../icons.types';

export const SceneMedia: IrisIcon = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" ref={ref} {...props}>
      <path d="M19.4593 1.94595C20.534 1.94595 21.4053 2.81718 21.4053 3.8919V19.4595C21.4053 20.5342 20.534 21.4054 19.4593 21.4054H3.89175C2.81703 21.4054 1.9458 20.5342 1.9458 19.4595V3.8919C1.9458 2.81718 2.81703 1.94595 3.89175 1.94595H19.4593ZM19.4593 3.8919H3.89175V19.4595H19.4593V3.8919Z" />
      <path d="M8.75685 8.9055C8.75463 8.34019 9.12151 8.10713 9.58764 8.39188L14.108 11.1533C14.5691 11.4349 14.5759 11.8901 14.112 12.1768L9.61339 14.9581C9.15455 15.2417 8.78082 15.0196 8.77858 14.4481L8.75685 8.9055Z" />
      <rect
        x="4.86475"
        y="5.83783"
        width="1.94595"
        height="1.94595"
      />
      <rect
        x="16.5405"
        y="5.83783"
        width="1.94595"
        height="1.94595"
      />
      <rect
        x="4.86475"
        y="10.7027"
        width="1.94595"
        height="1.94595"
      />
      <rect
        x="16.5405"
        y="10.7027"
        width="1.94595"
        height="1.94595"
      />
      <rect
        x="4.86475"
        y="15.5676"
        width="1.94595"
        height="1.94595"
      />
      <rect
        x="16.5405"
        y="15.5676"
        width="1.94595"
        height="1.94595"
      />
    </svg>
  )
);

SceneMedia.tags = [
  'clip',
  'content',
  'editor',
  'film',
  'media',
  'scene',
  'source',
];
