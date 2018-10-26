import React, { SFC, HTMLProps } from 'react';
import Notification from '../Notification/Notification';
import InfoIcon from '../icons/circle-info.svg';

const NotificationNeutral: SFC<
    { hasIcon?: boolean } & HTMLProps<HTMLDivElement>
> = ({ children, hasIcon = true, ...filteredProps }) => (
    <Notification
        icon={hasIcon ? <InfoIcon /> : null}
        variant="neutral"
        {...filteredProps}
    >
        {children}
    </Notification>
);

export default NotificationNeutral;
