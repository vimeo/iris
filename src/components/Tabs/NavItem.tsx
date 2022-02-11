import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { rem, rgba } from 'polished';

import { Button } from '../../components/Button/Button';
import { themes } from '../../themes';
import { black } from '../../color';

export function NavItem({
  format,
  index,
  label,
  selected,
  variant,
  ...props
}) {
  const id = 'tab' + index;

  props = {
    ariaSelected: selected,
    children: label,
    element: 'a',
    href: '#' + id,
    id,
    onClick: (event) => event.preventDefault(),
    size: 'md',
    target: '_self',
    ...props,
  };

  return variant === 'inlay' ? (
    <InlayButton selected={selected} {...props} />
  ) : (
    <Button format={format} variant="minimalTransparent" {...props} />
  );
}

function InlayButton({ selected, ...props }) {
  const theme = useContext(ThemeContext);

  return (
    <InlayButtonStyled
      format="basic"
      selected={selected}
      theme={selected ? invertTheme(theme) : theme}
      variant={selected ? 'solid' : 'minimalTransparent'}
      {...props}
    />
  );
}

const InlayButtonStyled = styled(Button)<{ selected: boolean }>`
  width: calc(100% - 0.667rem);
  margin: 0 0.334rem;
  box-shadow: ${(p) =>
    p.selected
      ? `0 ${rem(3)} ${rem(6)} 0 ${rgba(black, 0.125)}`
      : 'none'};
`;

const invertTheme = ({ name }) => {
  if (name === 'dark') return themes.light;
  if (name === 'light') return themes.dark;
};
