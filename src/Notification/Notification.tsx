import React, { SFC, HTMLProps } from 'react';
import { ButtonDialogClose } from '../ButtonDialogClose/ButtonDialogClose';

import { Header5 } from '../Type';
import { NotificationProps } from './NotificationProps';
import { NotificationStyled } from './NotificationStyled';

export const Notification: SFC<
    NotificationProps & HTMLProps<HTMLDivElement>
> = ({
    children,
    dismissButtonClassName,
    headerText,
    icon,
    onDismiss,
    variant,
    ref: _,
    ...props
}) => (
    <NotificationStyled
        hasIcon={icon ? true : false}
        headerText={headerText}
        variant={variant}
        {...props}
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
