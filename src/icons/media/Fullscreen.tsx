import React, { forwardRef, Ref, SVGAttributes } from 'react';

import { IrisIcon } from '../icons.types';

export const Fullscreen: IrisIcon = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 64 64" ref={ref} {...props}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M42.6667 13.3333L46.8956 13.3333L38.1144 22.1145C37.073 23.1559 37.073 24.8443 38.1144 25.8857C39.1558 26.9271 40.8443 26.9271 41.8857 25.8857L50.6667 17.1047V21.3333C50.6667 22.8061 51.8606 24 53.3333 24C54.8061 24 56 22.8061 56 21.3333V10.6667C56 9.95942 55.7191 9.28115 55.219 8.78105C54.7189 8.28095 54.0406 8 53.3333 8L42.6667 8C41.1939 8 40 9.19391 40 10.6667C40 12.1394 41.1939 13.3333 42.6667 13.3333ZM13.3333 21.3334V17.1045L22.1145 25.8857C23.1559 26.9271 24.8443 26.9271 25.8857 25.8857C26.9271 24.8443 26.9271 23.1558 25.8857 22.1144L17.1046 13.3334L21.3333 13.3334C22.8061 13.3334 24 12.1395 24 10.6667C24 9.19395 22.8061 8.00004 21.3333 8.00004L10.6667 8.00004C9.95942 8.00004 9.28115 8.28099 8.78105 8.78109C8.28095 9.28119 8 9.95946 8 10.6667L8 21.3334C8 22.8061 9.19391 24 10.6667 24C12.1394 24 13.3333 22.8061 13.3333 21.3334ZM21.3334 50.6667H17.1045L25.8857 41.8856C26.9271 40.8442 26.9271 39.1558 25.8857 38.1144C24.8443 37.073 23.1558 37.073 22.1144 38.1144L13.3334 46.8954L13.3334 42.6667C13.3334 41.194 12.1395 40.0001 10.6667 40.0001C9.19395 40.0001 8.00004 41.194 8.00004 42.6667L8.00004 53.3334C8.00004 54.0407 8.28099 54.7189 8.78109 55.219C9.28119 55.7191 9.95946 56.0001 10.6667 56.0001L21.3334 56.0001C22.8061 56.0001 24 54.8062 24 53.3334C24 51.8607 22.8061 50.6667 21.3334 50.6667ZM50.6667 46.8955V42.6667C50.6667 41.1939 51.8606 40 53.3333 40C54.8061 40 56 41.1939 56 42.6667V53.3334C56 54.0406 55.719 54.7189 55.219 55.219C54.7189 55.7191 54.0406 56 53.3333 56H42.6667C41.1939 56 40 54.8061 40 53.3334C40 51.8606 41.1939 50.6667 42.6667 50.6667H46.8954L38.1143 41.8857C37.0729 40.8443 37.0729 39.1558 38.1143 38.1144C39.1557 37.073 40.8441 37.073 41.8855 38.1144L50.6667 46.8955Z"
      />
    </svg>
  )
);

Fullscreen.tags = [
  'enter',
  'fill',
  'full',
  'fullscreen',
  'big',
  'on',
  'overlay',
  'start',
  'video',
];
