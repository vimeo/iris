import styled, { css } from 'styled-components';

import { GoogleGColor, SocialChipFacebook } from '../../../icons';
import { white } from '../../../color';
import { themes } from '../../../themes';

export const Icon = styled.div<{ size: number; brand: string }>`
  position: absolute;
  top: 1px;
  left: 1px;
  background: ${white};
  margin: 0;
  padding: 0;
  height: ${p => p.size - 4}px;
  width: ${p => p.size - 4}px;
  border-radius: 0.125rem;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin: 0;
    transform: scale(0.75);
    ${p => p.theme.iconStyles};
  }
`;

export const brandThemes = {
  google: {
    ...themes.light,
    name: 'Google',
    icon: (GoogleGColor as any).render(),
    formats: {
      ...themes.light.formats,
      primary: '#4285f4',
    },
    focus: '#4285f4',
  },
  facebook: {
    ...themes.light,
    name: 'Facebook',
    icon: (SocialChipFacebook as any).render(),
    formats: {
      ...themes.light.formats,
      primary: '#4267b2',
    },
    focus: '#4267b2',
    iconStyles: css`
      transform: scale(0.9) translate(-15%, -3%);
      rect {
        display: none;
      }
      path {
        fill: ${p => p.theme.formats.primary};
      }
    `,
  },
};
