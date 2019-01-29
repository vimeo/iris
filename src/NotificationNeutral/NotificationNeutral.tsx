import React, { SFC, HTMLProps } from 'react';
import { Notification } from '../Notification/Notification';
import { CircleInfo } from '../Icons';

export const NotificationNeutral: SFC<
  { hasIcon?: boolean } & HTMLProps<HTMLDivElement>
> = ({ children, hasIcon = true, ...props }) => (
  <Notification
    icon={hasIcon ? <CircleInfo /> : null}
    variant="neutral"
    {...props}
  >
    {children}
  </Notification>
);
