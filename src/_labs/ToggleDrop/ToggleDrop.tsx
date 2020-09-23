import React, { SFC, ReactNode, ReactElement } from 'react';
import styled from 'styled-components';

import { ToggleButton } from './ToggleButton';

import { PopOver, Checkbox } from '../../components';
import { Header, Paragraph as P } from '../../typography';

import { black, white, grayscale } from '../../color';
import { themes } from '../../themes';

export type ToggleChild = ReactElement<{
  color: string;
  status: string;
  onClick: (e?: Event) => void;
}>;

interface Props {
  children: ToggleChild[];
  title: string;
  description: string;
  theme?: 'dark' | 'light';
  name: string;
  color: string;
  footer?: string;
}

export const ToggleDrop: SFC<Props> = ({
  title,
  theme = 'dark',
  description,
  children,
  name,
  color,
  footer,
}) => (
  <PopOver
    attach="left"
    content={
      <MenuContentStyled footer={footer} theme={theme}>
        <Header size="6" theme={themes.dark}>
          {title}
        </Header>
        <Paragraph theme={themes.dark}>{description}</Paragraph>

        {children}

        {footer && (
          <Footer theme={theme}>
            <Checkbox
              theme={themes.dark}
              label={footer}
              name={footer.replace(' ', '')}
              id={footer.replace(' ', '')}
            />
          </Footer>
        )}
      </MenuContentStyled>
    }
  >
    <ToggleButton status={name} color={color}>
      {name}
    </ToggleButton>
  </PopOver>
);

const Paragraph = styled(P)`
  margin-bottom: 1.5rem;
`;

const MenuContentStyled = styled.div<{
  footer: ReactNode;
  theme: 'dark' | 'light';
}>`
  padding: ${(props) => (props.footer ? `1rem 1rem 0` : '1rem')};
  ${(props) =>
    props.theme === 'dark' && `background: ${grayscale(850)}`}
`;

const Footer = styled.div<{ theme: 'dark' | 'light' }>`
  margin: 1.5rem -1rem 0;
  width: calc(100% + 2rem);
  padding: 1rem 2rem 0;
  border-top: 1px solid
    ${(props) =>
      props.theme === 'light' ? slate(200) : grayscale(650)};
  color: ${(props) => (props.theme === 'light' ? black : white)};
`;
