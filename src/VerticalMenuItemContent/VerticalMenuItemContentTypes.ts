import { ReactNode } from 'react';

export interface VerticalMenuItemContentProps {
    actionButton?: ReactNode;
    className?: string;
    hasSubMenu?: boolean;
    label: ReactNode;
    labelIcon?: ReactNode;
    labelIconActive?: ReactNode;
    labelIconTheme?: 'default' | 'subtle';
    linkActionIcon?: ReactNode;
    id?: string;
    isActive?: boolean;
    onClick?: () => void;
    truncateLabel?: boolean;
    showTooltipOnHover?: boolean;
}
