import styled from 'styled-components';
import { rem } from 'polished';

import { Attach } from './usePortal.types';

export interface Props {
  anchorToWindow: boolean;
  attach: Attach;
  childRect: ClientRect;
  margin: number;
  rect: ClientRect;
}

export const AnchorStyled = styled.div<Props>`
  position: ${(p) => (p.anchorToWindow ? 'fixed' : 'absolute')};
  margin: ${(p) => rem(p.margin)};
  overflow: visible;
  z-index: 5000;
  ${remPos};
`;

function remPos({ attach: [a, b], margin, rect, childRect }: Props) {
  if (!rect || !childRect) return;

  const top =
    rect.top +
    rect.height * (a[0] / 100) -
    (childRect.height + margin * 2) * (b[0] / 100);

  const left =
    rect.left +
    rect.width * (a[1] / 100) -
    (childRect.width + margin * 2) * (b[1] / 100);

  return {
    top: rem(top <= 0 ? rect.bottom : top),
    left: rem(left <= 0 ? rect.right : left),
  };
}
