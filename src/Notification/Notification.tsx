import React, { SFC, HTMLProps } from 'react';
import ButtonDialogClose from '../ButtonDialogClose/ButtonDialogClose';

import { Header5 } from '../Type';
import { NotificationProps } from './NotificationProps';
import { NotificationStyled } from './NotificationStyled';

const Notification: SFC<NotificationProps & HTMLProps<HTMLDivElement>> = ({
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
        hasIcon={icon ? true : false}
        headerText={headerText}
        variant={variant}
        {...filteredProps}
    >
        {icon && <span className="icon">{icon}</span>}
        {headerText && <Header5>{headerText}</Header5>}

        {children}

        {onDismiss && (
            <div className="dismissButtonWrapper">
                <ButtonDialogClose
                    className={dismissButtonClassName}
                    onClick={onDismiss}
                    buttonTitle="Dismiss this notification"
                    format="lightTransparent"
                />
            </div>
        )}
    </NotificationStyled>
);

export default Notification;
