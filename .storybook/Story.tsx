import React, { SFC } from 'react';
import { Button } from '../src/';
import { HeaderPlusUltra, Header4, Header6 } from '../src/Type';
import styled from 'styled-components';
import {
  IronHeart,
  SovereignShadow,
  White,
} from '../src/Color/Color';

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

interface Props {
  props?: string[];
  subTitle?: string;
  title: string;
  width?: string;
  flex?: boolean;
}

export const Story: SFC<Props> = ({
  children,
  props,
  subTitle,
  title,
  width = '700px',
  flex = false,
}) => (
  <>
    <HeaderPlusUltra>{title}</HeaderPlusUltra>
    {subTitle && <SubTitle>{subTitle}</SubTitle>}
    <MonoHeader>
      {'<'}
      {title.split(' ').join('')}
      {props && ' ' + props.join('={} ').concat('={}')}
      {' />'}
    </MonoHeader>

    <div
      style={{
        padding: '2rem',
        border: '1px solid rgba(0, 0, 0, 0.1)',
        borderRadius: '0.25rem',
        maxWidth: width,
        margin: '3rem 0',
        display: flex ? 'flex' : 'block',
        flexWrap: flex ? 'wrap' : 'nowrap',
      }}
    >
      {children}
    </div>
  </>
);
