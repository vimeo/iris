import React, { SFC, HTMLProps } from 'react';
import { Notification } from '../Notification/Notification';
import { Checkmark } from '../Icons';

export const NotificationSuccess: SFC<
  { hasIcon?: boolean } & HTMLProps<HTMLDivElement>
> = ({ children, hasIcon = true, ...props }) => (
  <Notification
    icon={hasIcon ? <Checkmark /> : null}
    variant="success"
    {...props}
  >
    {children}
  </Notification>
);
