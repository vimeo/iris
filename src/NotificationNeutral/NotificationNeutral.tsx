import React, { SFC, HTMLProps } from 'react';
import Notification from '../Notification/Notification';
import { NotificationProps } from '../Notification/NotificationProps';
// @ts-ignore
import InfoIcon from '../icons/circle-info.svg';


const NotificationNeutral: SFC <
    NotificationProps &
    HTMLProps<HTMLDivElement>
> = ({
    children,
    hasIcon = true,
    ...filteredProps
}) => (
    <Notification
        icon={hasIcon ? <InfoIcon /> : null}
        variant="neutral"
        {...filteredProps}>
        {children}
    </Notification>
);

export default NotificationNeutral;
