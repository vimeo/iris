import React, { SFC } from 'react';
import { ParagraphLg } from '../Type';
import { TooltipOverlay } from '../TooltipOverlay/TooltipOverlay';
import { CounterIconProps } from './CounterIconTypes';
import {
  IconWrapperStyled,
  CounterIconContentStyled,
  CounterIconStyled,
} from './CounterIconStyled';

export const CounterIcon: SFC<CounterIconProps> = ({
  children,
  href,
  icon,
  counterTitle,
  onClick,
  tooltipProps,
  ...filteredProps
}) => {
  const CounterIconContent = (
    <CounterIconContentStyled {...filteredProps}>
      <IconWrapperStyled>{icon}</IconWrapperStyled>
      <ParagraphLg element="span">{children}</ParagraphLg>
    </CounterIconContentStyled>
  );

  const maybeLinkContent = href ? (
    <a href={href} onClick={onClick}>
      {CounterIconContent}
    </a>
  ) : (
    CounterIconContent
  );

  return (
    <CounterIconStyled>
      <TooltipOverlay
        href={href}
        tooltipText={counterTitle}
        onClick={!href && onClick}
        triggerOnClick={false}
        {...tooltipProps}
      >
        {maybeLinkContent}
      </TooltipOverlay>
    </CounterIconStyled>
  );
};
