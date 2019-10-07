import React, { SFC, MouseEventHandler } from 'react';

import { Button } from '../../components/buttons/Button/Button';

interface Props {
  handleTabChange: MouseEventHandler;
  isSelected: boolean;
  label: string;
  onClick?: MouseEventHandler;
  tabId: string;
}

export const TabNavigationHorizontalItem: SFC<Props> = ({
  handleTabChange,
  isSelected,
  onClick,
  tabId,
  label,
  ...props
}) => (
  <li style={{ flex: '1 0 0' }}>
    <a
      {...props}
      id={`tab-${tabId}`}
      aria-selected={isSelected ? 'true' : 'false'}
      href={`#${tabId}`}
      onClick={(e: React.MouseEvent) => {
        e.preventDefault();
        handleTabChange(e);
        if ('function' === typeof onClick) {
          onClick(e);
        }
      }}
    >
      <Button
        autoWidth="fluid"
        format="secondaryTextOnly"
        isButtonElement={false}
        size="md"
      >
        {label}
      </Button>
    </a>
  </li>
);
