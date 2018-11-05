import React, { ReactNode } from 'react';

export interface Props {
    actionButton?: ReactNode;
    className?: string;
    isActive?: boolean;
    isOpen?: boolean;
    label: string;
    labelIcon?: ReactNode;
    labelIconTheme?: 'default' | 'subtle';
    labelId: string;
    nestedButtonLabel?: string;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    onOpen?: () => void;
    onClose?: () => void;
    render?: any;
    subMenuItems: JSX.Element[];
    href?: string;
    to?: string;
}

export interface State {
    subMenuOpen: boolean;
}
