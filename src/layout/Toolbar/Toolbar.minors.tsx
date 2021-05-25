import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

import { Button, Tip } from '../../components';

export function Item({
  attach = 'right',
  children = null,
  icon,
  label,
  onClick,
  ...props
}: any) {
  return (
    <Tip attach={attach} content={label}>
      <ItemStyled
        aria-label={label}
        format="basic"
        icon={icon}
        onClick={onClick}
        size="md"
        variant="minimalTransparent"
        {...props}
      />
    </Tip>
  );
}

const ItemStyled = styled(Button)`
  height: 3rem;
  text-align: left;
  padding: 0.25rem 0.25rem 0.25rem 0.75rem;
  justify-content: start;

  > svg {
    padding: 0 !important;
    width: 1.25rem;
    min-width: 1.25rem;
    max-width: 1.25rem;
    height: 1.25rem;
    min-height: 1.25rem;
    max-height: 1.25rem;
  }
`;

export const Break = styled.div<any>`
  width: calc(100% - 0.5rem);
  border-top: 2px solid ${(p) => rgba(p.theme.content.color, 0.5)};
  margin: 1rem auto;
  transition: 120ms ease-in-out;
`;
