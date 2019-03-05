import React, { ReactNode, useState } from 'react';
import { HeaderPlusUltra, Header4, Header6 } from '../../src/Type';
import styled, { withTheme } from 'styled-components';
import {
  IronHeart,
  SovereignShadow,
  White,
  RavenImperial,
} from '../../src/Color/Color';

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
    props,
    subTitle,
    title,
    width = '700px',
    flex = false,
    theme,
  }: Props) => {
    const [height, setHeight] = useState(0);

    return (
      <Wrapper>
        <HeaderPlusUltra
          format={theme.name === 'dark' ? 'white' : 'dark'}
        >
          {title}
        </HeaderPlusUltra>

        {subTitle && <SubTitle>{subTitle}</SubTitle>}

        <MonoHeader>
          {'<'}
          {title.split(' ').join('')}
          {props && ' ' + props.join('={} ').concat('={}')}
          {' />'}
        </MonoHeader>

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

const MonoHeader = styled(() => <Header4 element="span" />)`
  font-family: 'Source Code Pro', monospace;
  background: ${SovereignShadow};
  color: ${White};
  padding: 1rem;
  border-radius: 0.25rem;
`;

const SubTitle = styled(() => <Header6 element="span" />)`
  border: 1px solid ${IronHeart};
  color: ${IronHeart}
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  display: inline-flex;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  margin: -1rem 0 2rem;
`;
