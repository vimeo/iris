import React, { SFC } from 'react';
import { VerticalMenuItemContentProps as Props } from './VerticalMenuItemContentTypes';
import {
  MenuItemContentStyled,
  LabelIconStyled,
  LabelStyled,
  LinkActionWrapper,
  ActionButtonStyled,
} from './VerticalMenuItemContentStyled';

import { Tip } from '../../components/portals/Tip/Tip';

export const VerticalMenuItemContent: SFC<Props> = ({
  hasSubMenu,
  label,
  labelIconTheme,
  showTooltipOnHover,
  truncateLabel,
  ...props
}) =>
  !showTooltipOnHover ? (
    <span>
      <MenuItemContent
        label={label}
        labelIconTheme={labelIconTheme}
        truncateLabel={truncateLabel}
        hasSubMenu={hasSubMenu}
        {...props}
      />
    </span>
  ) : (
    <Tip
      content={label}
      // makeWrapperBlock
      // pointerEvents={true}
    >
      <MenuItemContent
        label={label}
        labelIconTheme={labelIconTheme}
        truncateLabel={truncateLabel}
        hasSubMenu={hasSubMenu}
        {...props}
      />
    </Tip>
  );

const MenuItemContent: SFC<Props> = ({
  actionButton,
  hasSubMenu,
  id,
  isActive,
  label,
  labelIcon,
  labelIconActive,
  labelIconTheme,
  linkActionIcon,
  truncateLabel,
}) => (
  <MenuItemContentStyled
    element="span"
    id={id}
    hasSubMenu={hasSubMenu}
    hasRightSideContent={!!linkActionIcon || !!actionButton}
  >
    {labelIcon && (
      <LabelIconStyled labelIconTheme={labelIconTheme}>
        {isActive && labelIconActive ? labelIconActive : labelIcon}
      </LabelIconStyled>
    )}

    <LabelStyled hasIcon={!!labelIcon} isTruncated={truncateLabel}>
      {label}
    </LabelStyled>

    {linkActionIcon && (
      <LinkActionWrapper>{linkActionIcon}</LinkActionWrapper>
    )}
    {actionButton && (
      <ActionButtonStyled>{actionButton}</ActionButtonStyled>
    )}
  </MenuItemContentStyled>
);
