import React from 'react';
import Notification from '../Notification/Notification';
import { NotificationProps } from '../Notification/NotificationProps';
// @ts-ignore
import SuccessIcon from '../icons/checkmark.svg';


const NotificationSuccess: React.SFC<NotificationProps> = ({
    children,
    hasIcon = true,
    ...filteredProps
}) =>
    <Notification
        icon={hasIcon ? <SuccessIcon /> : null}
        variant="success"
        {...filteredProps}>
        {children}
    </Notification>;

export default NotificationSuccess;
