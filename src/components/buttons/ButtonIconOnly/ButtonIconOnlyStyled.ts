import styled, { css } from 'styled-components';
import { rgba, rem } from 'polished';
import {
  RegentGray,
  SoutherlySky,
  White,
  Black,
  AshenWinter,
  AstroGranite,
  SunsetOrange,
  Plaster,
  Porcelain,
  IronHeart,
  VimeoBlue,
  VimeoBlueDarkened,
} from '../../../color';

const ICON_SIZE = 20;

const ButtonSizes = {
  md: 40,
  sm: 32,
};

const getSizeCSS = props => {
  const ButtonSizeInRem = rem(
    ButtonSizes[props.size] || ButtonSizes.md,
  );

  return css`
    width: ${ButtonSizeInRem};
    height: ${ButtonSizeInRem};
  `;
};

const buildColors = ({
  color = null,
  bg = null,
  hoverColor = null,
  hoverBg = null,
}) => css`
  ${color && `color: ${color}`}
  ${bg && `bg: ${bg}`}

  &:hover {
    ${hoverColor && `hoverColor: ${hoverColor}`}
    ${hoverBg && `hoverBg: ${hoverBg}`}
  }
`;

export const BUTTON_FORMATS = {
  alternative: buildColors({
    color: RegentGray,
    hoverColor: SoutherlySky,
  }),

  transparent: buildColors({
    color: White,
    bg: rgba(Black, 0.25),
    hoverBg: rgba(Black, 0.5),
  }),

  lightTransparent: buildColors({
    color: White,
    hoverBg: AshenWinter,
  }),

  lightWarning: buildColors({
    color: AstroGranite,
    bg: White,
    hoverColor: SunsetOrange,
  }),

  warning: buildColors({
    color: SunsetOrange,
    hoverColor: White,
    hoverBg: SunsetOrange,
  }),

  midDark: css`
    color: ${RegentGray};

    &:hover {
      color: ${AstroGranite};
      background-color: ${Plaster};
    }
  `,
  secondary: css`
    color: ${AstroGranite};
    background-color: ${Plaster};

    &:hover {
      background-color: ${Porcelain};
    }
  `,
  secondaryDark: css`
    color: ${White};
    background-color: ${AshenWinter};

    &:hover {
      background-color: ${IronHeart};
    }
  `,
  primary: css`
    color: ${White};
    background-color: ${VimeoBlue};

    &:hover {
      background-color: ${VimeoBlueDarkened};
    }
  `,
  dark: css`
    color: ${AstroGranite};

    &:hover {
      background-color: ${Plaster};
    }
  `,
};

export const DEFAULT_BUTTON_FORMAT = 'dark';

const getFormatCSS = ({ format = DEFAULT_BUTTON_FORMAT }) =>
  BUTTON_FORMATS[format];

const ButtonIconOnlySharedCSS = css`
  display: inline-flex;
  position: relative;
  width: auto;
  margin: 0;
  padding: 0;
  outline: 0;
  border: 0;
  border-radius: ${rem(3)};
  background: transparent;
  transition: all 300ms ease;
  text-align: center;
  vertical-align: middle;
  appearance: none;
  align-items: center;
  justify-content: center;
  -webkit-font-smoothing: antialiased;

  &:hover {
    cursor: pointer;
  }

  &:active {
    outline: 0;
    transform: scale(0.92);
  }

  &:disabled {
    color: ${Porcelain} !important;

    &:hover {
      color: ${Porcelain} !important;
      background: inherit !important;
      pointer-events: none;
      cursor: not-allowed;
    }
  }
`;

export type ButtonIconOnlyFormats = keyof typeof BUTTON_FORMATS;

export const ButtonStyled = styled.button`
    ${ButtonIconOnlySharedCSS}
    ${getFormatCSS}
    ${getSizeCSS}
`;

export const SpanStyled = styled.span`
    ${ButtonIconOnlySharedCSS}
    ${getFormatCSS}
    ${getSizeCSS}
`;

export const IconWrapperStyled = styled.span`
  display: inline-flex;
  align-items: center;
  flex: 1;

  svg {
    width: ${rem(ICON_SIZE)};
    height: ${rem(ICON_SIZE)};
    flex: 1;
  }

  svg * {
    fill: currentColor;
  }
`;
