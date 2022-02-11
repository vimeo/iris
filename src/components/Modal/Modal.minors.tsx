import React, {
  useContext,
  createContext,
  MouseEventHandler,
} from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

import { Header as H2 } from '../../typography';
import { IrisProps, MinorComponent } from '../../utils';
import { Button } from '../../components/Button/Button';

export interface Minors {
  Header: MinorComponent;
  Footer: MinorComponent;
  PrimaryAction: MinorComponent;
  SecondaryAction: MinorComponent;
}

export const Controls = createContext<{
  close?: MouseEventHandler;
}>(null);

export function Header({ children, ...props }: IrisProps) {
  return (
    <H2 size="2" {...props}>
      {children}
    </H2>
  );
}

type ActionButtonProps = IrisProps<{
  format?: 'primary' | 'secondary';
  variant?: 'outline';
  onClick?: MouseEventHandler;
}>;

const ActionButton = ({
  children,
  format,
  // variant,
  onClick,
  ...props
}: ActionButtonProps) => {
  const { close } = useContext(Controls);

  return (
    <ActionButtonStyled
      {...props}
      format={format}
      // variant={variant}
      onClick={(event) => {
        close && close(event);
        onClick && onClick(event);
      }}
    >
      {children}
    </ActionButtonStyled>
  );
};

const ActionButtonStyled = styled(Button)`
  width: 100%;

  &:first-of-type {
    margin-right: 1rem;
  }
`;

export const Footer = styled.div<IrisProps>`
  border-top: 1px ${({ theme }) => rgba(theme.content.color, 0.2)}
    solid;
  display: flex;
  padding-top: 1.5rem;
`;

export const PrimaryAction = (props) => (
  <ActionButton format="primary" {...props} />
);

export const SecondaryAction = (props) => (
  <ActionButton format="secondary" {...props} />
);
