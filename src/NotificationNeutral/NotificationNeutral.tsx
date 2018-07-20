import React from 'react';
import Notification from '../Notification/Notification';
import { NotificationProps } from '../Notification/NotificationProps';
// @ts-ignore
import InfoIcon from '../icons/circle-info.svg';


const NotificationNeutral: React.SFC<NotificationProps> = ({
    children,
    hasIcon = true,
    ...filteredProps
}) =>
    <Notification
        icon={hasIcon ? <InfoIcon /> : null}
        variant="neutral"
        {...filteredProps}>
        {children}
    </Notification>;

export default NotificationNeutral;
