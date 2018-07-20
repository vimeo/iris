import React from 'react';


export interface NotificationSharedProps extends
    React.HTMLProps<HTMLDivElement> {
        headerText?: string
        dismissButtonClassName?: string,
        onDismiss?: () => void
}

export interface NotificationBaseProps extends
    NotificationSharedProps {
        icon?: React.ReactNode,
        variant: "neutral" | "success" | "warning";
};

export interface NotificationProps extends
    NotificationSharedProps {
        hasIcon?: boolean
};
