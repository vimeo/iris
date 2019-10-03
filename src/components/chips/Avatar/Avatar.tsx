import React from 'react';
import styled from 'styled-components';
import { size } from 'polished';

import { AvatarFocusOutline as FocusOutline } from './AvatarFocus';
import { FocusOutlineFocused } from '../../FocusOutline/FocusOutline';

import { IrisComponent, splitStyleProps } from '../../../utils';

type sizes = 'auto' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface Props {
  src: string;
  srcSet?: string;
  size?: sizes;
  href?: string;
}

export const Avatar: IrisComponent<Props> = ({
  className,
  size = 'auto',
  href,
  style,
  ...props
}) => {
  if (href) {
    const [layoutStyles, styles] = splitStyleProps(className, style);
    return (
      <Anchor href={href} {...layoutStyles}>
        <AvatarStyled size={size} {...props} {...styles} />
        <FocusOutline />
      </Anchor>
    );
  }
  return (
    <AvatarStyled
      size={size}
      className={className}
      style={style}
      {...props}
    />
  );
};

const avatarSizes = {
  auto: '100%',
  xs: '1rem',
  sm: '2rem',
  md: '2.5rem',
  lg: '4rem',
  xl: '9.375rem',
};

const AvatarStyled = styled.img<{
  size: sizes;
}>`
  ${props => size(avatarSizes[props.size])}
  border-radius: 100%;
`;

export const Anchor = styled.a`
  text-decoration: none;
  position: relative;
  outline: none;
  display: inline-block;

  &:focus > ${FocusOutline} {
    ${FocusOutlineFocused};
  }
`;
