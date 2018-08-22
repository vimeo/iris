import React, { SFC, HTMLProps } from 'react';
import Notification from '../Notification/Notification';
import { NotificationProps } from '../Notification/NotificationProps';
// @ts-ignore
import WarningIcon from '../icons/circle-warning.svg';


const NotificationWarning: SFC <
    NotificationProps &
    HTMLProps<HTMLDivElement>
> = ({
    children,
    hasIcon = true,
    ...filteredProps
}) =>
    <Notification
        icon={hasIcon ? <WarningIcon /> : null}
        variant="warning"
        {...filteredProps}>
        {children}
    </Notification>;

export default NotificationWarning;