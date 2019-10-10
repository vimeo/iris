import React, { SFC } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { rem } from 'polished';

import { CircleWarning, Checkmark } from '../../../icons';
import { COLORS } from '../../../legacy';

interface Props {
  format?: 'negative' | 'positive' | 'neutral';
}

export const InputLabelStateIcon: SFC<Props> = ({
  format,
  ...props
}) => <IconStyled format={format} {...props} />;

const inputIconFadeIn = keyframes`
  0% { opacity: 0 }
  100% { opacity: 1 }
`;

const iconAnimation = css`
  animation: ${inputIconFadeIn} 600ms ease-out forwards;
`;

const iconColor = ({ format }) =>
  ({
    negative: `* { fill: ${COLORS.SunsetOrange} }`,
    positive: `* { fill: ${COLORS.Pistachio} }`,
  }[format]);

const IconStyled = styled(({ format, ...props }: Props) =>
  format === 'positive' ? (
    <Checkmark {...props} />
  ) : (
    <CircleWarning {...props} />
  ),
)`
  width: 1.125rem;
  height: 1.125rem;
  margin-bottom: ${rem(-3)};
  margin-left: 0.5rem;
  ${iconAnimation};
  ${iconColor};
`;
