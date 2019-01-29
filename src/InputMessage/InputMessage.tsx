import React, { SFC, ReactNode } from 'react';
import { ParagraphSm } from '../Type';
import styled from 'styled-components';
import * as COLORS from '../Color/Color';

interface Props {
  children: ReactNode;
  format: 'helper' | 'negative';
  theme?: 'default' | 'light' | 'dark';
}

export const InputMessage: SFC<Props> = ({
  format = 'helper',
  children,
  theme = 'default',
  ...props
}) => (
  <ParagraphStyled
    {...props}
    element="span"
    role={format === 'negative' ? 'alert' : 'note'}
  >
    {children}
  </ParagraphStyled>
);

const ParagraphStyled = styled(ParagraphSm)`
  overflow: hidden;
  ${props => props.format === 'dark' && `color: ${COLORS.Porcelain}`};
  ${props =>
    props.theme === 'negative' && `color: ${COLORS.SunsetOrange}`};
`;
