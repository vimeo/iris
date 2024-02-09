import React, { useState } from 'react';

import {
  Content,
  ChevronUp,
  CircleWarningIcon,
  HeaderContainer,
  StyledChevronDown,
  Subcopy,
  Title,
  TitleContainer,
  TriggerContainer,
  Wrapper,
} from './Accordion.style';
import { MinorComponent } from '../../utils';
import { AccordionItemProps } from './Accordion.types';
import { Focus } from '../../utils';

export interface Minors {
  Item: MinorComponent<any>;
}

export function Item({
  children,
  title,
  format,
  index,
  allowMultiple,
  defaultActive,
  setActiveIndex,
  itemActive,
  subcopy = '',
  icon,
  errorIcon,
  iconToTriggerOpen,
  iconToTriggerClose,
  hasError = false,
  disabled = false,
}: AccordionItemProps) {
  const [active, setActive] = useState<boolean>(defaultActive);
  const isActive = allowMultiple
    ? active && !disabled
    : itemActive && !disabled;

  return (
    <Wrapper
      active={isActive}
      disabled={disabled}
      format={format}
      key={index}
    >
      <TriggerContainer
        onClick={() => {
          if (allowMultiple) {
            setActive(!active);
          } else {
            setActiveIndex({ index });
          }
        }}
        tabIndex={0}
        format={format}
        active={isActive}
        aria-expanded={isActive}
        aria-controls={`accordion-${index}-content`}
        id={`accordion-${index}-trigger`}
      >
        <HeaderContainer>
          {hasError && errorIcon && errorIcon}
          {hasError && !errorIcon && <CircleWarningIcon />}
          {!hasError && icon && icon}
          <TitleContainer>
            <Title size="4">{title}</Title>
            {subcopy && (
              <Subcopy size="6" variant="thin">
                {subcopy}
              </Subcopy>
            )}
          </TitleContainer>
        </HeaderContainer>
        {isActive ? (
          iconToTriggerClose ? (
            iconToTriggerClose
          ) : (
            <ChevronUp width="24" />
          )
        ) : iconToTriggerOpen ? (
          iconToTriggerOpen
        ) : (
          <StyledChevronDown width="24" />
        )}
        <Focus parent={TriggerContainer} />
      </TriggerContainer>
      {isActive && (
        <Content
          active={isActive}
          aria-labelledby={`accordion-${index}-trigger`}
          id={`accordion-${index}-content`}
          role="region"
        >
          {children}
        </Content>
      )}
    </Wrapper>
  );
}
