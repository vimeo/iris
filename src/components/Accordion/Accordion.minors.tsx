import React, { useState } from 'react';

import {
  Content,
  ChevronUp,
  CircleWarningIcon,
  Header,
  StyledChevronDown,
  Subcopy,
  Title,
  TitleContainer,
  TriggerContainer,
  Wrapper,
} from './Accordion.style';
import { MinorComponent } from '../../utils';
import { AccordionItemProps } from './Accordion.types';

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
        <Header>
          {hasError && <CircleWarningIcon />}
          {!hasError && icon && icon}
          <TitleContainer>
            <Title>{title}</Title>
            {subcopy && <Subcopy>{subcopy}</Subcopy>}
          </TitleContainer>
        </Header>
        {isActive ? (
          <ChevronUp width="24" />
        ) : (
          <StyledChevronDown width="24" />
        )}
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
