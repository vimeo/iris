import { ReactNode } from 'react';

export interface VerticalMenuItemProps {
  className?: string;
  children: ReactNode;
  hasRightSideContent?: boolean;
  href?: string;
  isActive?: boolean;
  to?: string;
  nestedInteractionContent?: ReactNode;
  nestedInteractionMenuSize?: 'sm' | 'md' | 'lg';
  label?: ReactNode;
  menuPanelTooltip?: string;
  onClick?: () => void;
  onNestedItemClick?: () => void;
  showNestedByDefault?: boolean;
  nestedButtonClass?: string;
  nestedButtonLabel?: string;
  truncateLabel?: boolean;
  id?: string;
}

export interface VerticalMenuItemState {
  nestedMenuOpen: boolean;
  showNestedInteraction: boolean;
  subMenuOpen: boolean;
  linkIsHovered?: boolean;
}
