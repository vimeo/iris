import React, { ReactNode } from 'react';
import styled, { withTheme } from 'styled-components';

import { White, RavenImperial } from '../legacy';
import { Header } from '../typography';

interface Props {
  props?: string[];
  subTitle?: string;
  title: string;
  width?: string;
  flex?: boolean;
  theme?: any;
  children: ReactNode;
}

export const Story = withTheme(
  ({
    children,
    title,
    width = '700px',
    flex = false,
    theme,
  }: Props) => {
    if (!theme) console.error('No theme detected!');
    else theme.name = theme.base;
    theme = theme || { name: 'light ' };

    return (
      <Wrapper>
        <Header size="plusUltra" theme={theme.name}>
          {title}
        </Header>

        <Source width={width} flex={flex}>
          {children}
        </Source>
      </Wrapper>
    );
  },
);

const Wrapper = styled.div`
  padding: 2rem;
  min-height: 100vh;
  background: ${props =>
    props.theme.name === 'light' ? White : RavenImperial};
`;

const Source = styled.div<{ width: string; flex: boolean }>`
  padding: 2rem;
  border: ${props =>
    props.theme.name === 'light'
      ? '1px solid rgba(0, 0, 0, 0.1)'
      : '1px solid rgba(255, 255, 255, 0.2)'};
  border-radius: 0.25rem;
  max-width: ${props => props.width};
  margin: 3rem 0;
  display: ${props => (props.flex ? 'flex' : 'block')};
  flex-wrap: ${props => (props.flex ? 'wrap' : 'nowrap')};
`;
