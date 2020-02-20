import React from 'react';
import styled from 'styled-components';

import { Text } from '../Text/Text';

import { withIris, IrisProps } from '../../utils';

export const BigStat = withIris<
  HTMLParagraphElement | HTMLSpanElement,
  Props
>(BigStatComponent);

type Props = IrisProps<
  {
    /**
     * [default = 'p']
     */
    element?: 'p' | 'span';
  },
  HTMLParagraphElement | HTMLSpanElement
>;

function BigStatComponent({ element = 'p', ...props }: Props) {
  return <Styled element={element} format="soft" {...props} />;
}

const Styled = styled(Text)`
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 2rem;
  letter-spacing: 0.01rem;
  margin-bottom: 1.5rem;
`;
