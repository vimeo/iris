import React, { SFC, HTMLProps } from 'react';
import Notification from '../Notification/Notification';
import SuccessIcon from '../icons/checkmark.svg';

const NotificationSuccess: SFC<
    { hasIcon?: boolean } & HTMLProps<HTMLDivElement>
> = ({ children, hasIcon = true, ...filteredProps }) => (
    <Notification
        icon={hasIcon ? <SuccessIcon /> : null}
        variant="success"
        {...filteredProps}
    >
        {children}
    </Notification>
);

export default NotificationSuccess;
