import React from 'react';
import styled from 'styled-components';

import { Text } from '../Text';

import { withIris, IrisProps } from '../../utils';
import { fontFamily } from '../typography';

export const BigStat = withIris<
  HTMLParagraphElement | HTMLSpanElement,
  Props
>(BigStatComponent);

type Props = IrisProps<
  {
    element?: 'p' | 'span';
  },
  HTMLParagraphElement | HTMLSpanElement
>;

function BigStatComponent({ element = 'p', ...props }: Props) {
  return <Styled as={element} format="soft" {...props} />;
}

const Styled = styled(Text)<{ format: 'soft' }>`
  font: 300 1.5rem / 2rem ${fontFamily};
  letter-spacing: 0.01rem;
  margin-bottom: 1.5rem;
`;
