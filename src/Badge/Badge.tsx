import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { badgeColorsCSS, badgeSizeCSS } from './BadgeStyleSettings';
import { IrisComponent } from '../Utils/IrisComponent';
import { fontFamily } from '../Typography/Typography';

interface Props {
  format?: BadgeFormats;
  href?: string;
  label?: string;
  size?: 'sm' | 'lg';
}

export const Badge: IrisComponent<Props> = ({
  href,
  format = 'default',
  size = 'sm',
  ...props
}) => (
  <BadgeStyled
    as={href ? 'a' : 'span'}
    format={format}
    size={size}
    {...props}
  />
);

type BadgeFormats =
  | 'alum'
  | 'beta'
  | 'business'
  | 'curation'
  | 'default'
  | 'explicit'
  | 'featured'
  | 'hd'
  | 'info'
  | 'live'
  | 'live-archive'
  | 'new'
  | 'partner'
  | 'plus'
  | 'producer'
  | 'pro'
  | 'spatial'
  | 'sponsor'
  | 'staff'
  | 'support'
  | 'unrated'
  | 'upgrade'
  | 'vod';

const BadgeStyled = styled.span<{
  format: BadgeFormats;
  href?: string;
  size: 'sm' | 'lg';
}>`
  display: inline-block;
  padding: ${rem(3)} ${rem(4)};
  font-family: ${fontFamily};
  font-size: ${rem(9)};
  font-weight: 700;
  line-height: 1.2;
  border-radius: ${rem(2)};
  text-shadow: none;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  letter-spacing: 0.02rem;
  text-transform: uppercase;

  ${badgeSizeCSS};
  ${badgeColorsCSS};

  &::-moz-focus-inner {
    padding: 0;
    border: 0;
  }
`;
