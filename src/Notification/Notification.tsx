import React from 'react';
import ButtonDialogClose from '../ButtonDialogClose/ButtonDialogClose';

import { Header5 } from '../Type';
import { NotificationBaseProps } from './NotificationProps';
import { NotificationStyled } from './NotificationStyled';

/* Note: This component is the base component for themed notifications, do not use it by itself */

const iconElement = (icon) =>
    icon &&
    <span className="icon">{icon}</span>;

const headerTextElement = (headerText) =>
    headerText &&
    <Header5>{headerText}</Header5>;

const dismissElement = 
    (dismissButtonClassName, onDismiss) => 
        onDismiss &&
        <div className="dismissButtonWrapper">
            <ButtonDialogClose
                className={dismissButtonClassName}
                onClick={onDismiss}
                buttonTitle="Dismiss this notification"
                format="lightTransparent"
            />
        </div>;

const Notification: React.SFC<NotificationBaseProps> = ({
    children,
    dismissButtonClassName,
    headerText,
    icon,
    onDismiss,
    variant,
}) => 
    <NotificationStyled
        icon={icon}
        headerText={headerText}
        variant={variant}
    >
        {iconElement(icon)}
        {headerTextElement(headerText)}

        {children}

        {dismissElement(dismissButtonClassName, onDismiss)}
    </NotificationStyled>;

export default Notification;
