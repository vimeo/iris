import React from 'react';


export interface NotificationBaseProps {
    hasIcon?: boolean;
    headerText?: string;
    dismissButtonClassName?: string;
    onDismiss?: () => void;
    icon?: React.ReactNode;
    variant: "neutral" | "success" | "warning";
};

export interface NotificationProps {
    hasIcon?: boolean;
    headerText?: string;
    dismissButtonClassName?: string;
    onDismiss?: () => void;
};
