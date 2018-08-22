import React, { SFC, HTMLProps } from 'react';
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

const Notification: SFC <
    NotificationBaseProps &
    HTMLProps<HTMLDivElement>
> = ({
    children,
    dismissButtonClassName,
    headerText,
    icon,
    onDismiss,
    variant,
    ref: _,
    ...filteredProps
}) => (
    <NotificationStyled
        icon={icon}
        headerText={headerText}
        variant={variant}
        {...filteredProps}
    >
        {iconElement(icon)}
        {headerTextElement(headerText)}

        {children}

        {dismissElement(dismissButtonClassName, onDismiss)}
    </NotificationStyled>
);

export default Notification;
