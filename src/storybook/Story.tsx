import React, { ReactNode, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import { white, grayscale } from '../color';
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

// export const Story = withTheme(
export function Story({
  children,
  title,
  width = '700px',
  flex = false,
}: Props) {
  const theme = useContext(ThemeContext);
  if (!theme) console.error('No theme detected!');

  return (
    <Wrapper>
      <Header size="plusUltra">{title}</Header>

      <Source width={width} flex={flex}>
        {children}
      </Source>
    </Wrapper>
  );
}
// );

const Wrapper = styled.div`
  padding: 2rem;
  /* min-height: 100vh; */
  background: ${props =>
    props.theme.name === 'light' ? white : grayscale(850)};
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
