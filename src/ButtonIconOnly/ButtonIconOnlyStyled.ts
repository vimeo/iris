import styled, { css } from 'styled-components';
import { rgba, rem } from 'polished';
import { COLORS } from '../globals/js/constants/COLORS';
import { ButtonIconOnlyStyledProps } from './ButtonIconOnlyTypes';

const ICON_SIZE = 20;

const ButtonSizes = {
    md: 40,
    sm: 32,
};

const maybeAutoSpacingHorizontal = props =>
    props.autoSpacingHorizontal
        ? css`
              margin-left: ${rem(2)};
              &:first-of-type {
                  margin-left: 0;
              }
          `
        : '';

const getSizeCSS = props => {
    const ButtonSizeInRem = rem(ButtonSizes[props.size] || ButtonSizes.md);

    return css`
        width: ${ButtonSizeInRem};
        height: ${ButtonSizeInRem};
    `;
};

export const BUTTON_FORMATS = {
    alternative: css`
        color: ${COLORS.RegentGray};

        &:hover {
            color: ${COLORS.SoutherlySky};
        }
    `,
    transparent: css`
        color: ${COLORS.White};
        background-color: ${rgba(COLORS.Black, 0.25)};

        &:hover {
            background-color: ${rgba(COLORS.Black, 0.5)};
        }
    `,
    lightTransparent: css`
        color: ${COLORS.White};

        &:hover {
            background-color: ${COLORS.AshenWinter};
        }
    `,
    lightWarning: css`
        color: ${COLORS.AstroGranite};
        background-color: ${COLORS.White};

        &:hover {
            color: ${COLORS.SunsetOrange};
        }
    `,
    warning: css`
        color: ${COLORS.SunsetOrange};

        &:hover {
            color: ${COLORS.White};
            background-color: ${COLORS.SunsetOrange};
        }
    `,
    midDark: css`
        color: ${COLORS.RegentGray};

        &:hover {
            color: ${COLORS.AstroGranite};
            background-color: ${COLORS.Plaster};
        }
    `,
    secondary: css`
        color: ${COLORS.AstroGranite};
        background-color: ${COLORS.Plaster};

        &:hover {
            background-color: ${COLORS.Porcelain};
        }
    `,
    secondaryDark: css`
        color: ${COLORS.White};
        background-color: ${COLORS.AshenWinter};

        &:hover {
            background-color: ${COLORS.IronHeart};
        }
    `,
    primary: css`
        color: ${COLORS.White};
        background-color: ${COLORS.VimeoBlue};

        &:hover {
            background-color: ${COLORS.VimeoBlueDarkened};
        }
    `,
    dark: css`
        color: ${COLORS.AstroGranite};

        &:hover {
            background-color: ${COLORS.Plaster};
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
        color: ${COLORS.Porcelain} !important;

        &:hover {
            color: ${COLORS.Porcelain} !important;
            background: inherit !important;
            pointer-events: none;
            cursor: not-allowed;
        }
    }
`;

export const ButtonStyled = styled<ButtonIconOnlyStyledProps, 'button'>(
    'button',
)`
    ${ButtonIconOnlySharedCSS}
    ${getFormatCSS}
    ${getSizeCSS}
    ${maybeAutoSpacingHorizontal}
`;

export const SpanStyled = styled<ButtonIconOnlyStyledProps, 'span'>('span')`
    ${ButtonIconOnlySharedCSS}
    ${getFormatCSS}
    ${getSizeCSS}
    ${maybeAutoSpacingHorizontal}
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
