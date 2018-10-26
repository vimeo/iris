import React, { SFC, HTMLProps } from 'react';
import Notification from '../Notification/Notification';
import WarningIcon from '../icons/circle-warning.svg';

const NotificationWarning: SFC<
    { hasIcon?: boolean } & HTMLProps<HTMLDivElement>
> = ({ children, hasIcon = true, ...filteredProps }) => (
    <Notification
        icon={hasIcon ? <WarningIcon /> : null}
        variant="warning"
        {...filteredProps}
    >
        {children}
    </Notification>
);

export default NotificationWarning;
