import styled, { css } from 'styled-components';
import { rgba, rem, tint, shade, em } from 'polished';

import { borderRadii } from './Button.config';
import { FeaturedIcon } from './FeaturedIcon';

import { a11yColor } from '../../themes';
import { white, black } from '../../color';
import { core } from '../../tokens';

const buttonCore = css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  text-decoration: none;
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;
  font-family: inherit;
  font-smoothing: antialiased;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizelegibility;

  > span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const ButtonChildren = styled.span<any>`
  ${(p) =>
    (p.size === 'xxl' || p.size === 'xl') &&
    css`
      transform: translateY(-1px);
    `}
`;

export const ButtonStyled = styled.button<any>`
  ${buttonCore};
  ${buttonIcon};
  ${buttonSizes};
  ${buttonFluid};
  ${buttonPadding};
  ${buttonShape};
  ${buttonElevation};
  ${buttonMotion};
  ${buttonLoading};
  ${buttonVariants};
  ${buttonDisabled};
  ${buttonTextShift};

  ${buttonUpsell};
`;

const sizePads = {
  xxs: 0.125,
  xs: 0.3125,
  sm: 0.625,
  md: 0.75,
  lg: 1,
  xl: 1.25,
  xxl: 1.5,
};

function buttonIcon({ size, iconOnly, iconPosition }) {
  const pad = sizePads[size];

  const iconMargin = {
    left: `auto ${(pad + 0.75) / 2}rem auto 0`,
    right: `auto 0 auto ${(pad + 0.75) / 2}rem`,
    featured: `auto 0.75rem`,
  };

  return iconOnly
    ? css`
        svg {
          width: ${pad / 1.25 + 0.75}rem;
          height: ${pad / 1.25 + 0.75}rem;
          display: inline-flex;
          overflow: visible;

          > * {
            fill: currentColor;
          }
        }
      `
    : css`
        position: relative;

        svg {
          width: ${pad / 1.25 + 0.75}rem;
          min-width: ${pad / 1.25 + 0.75}rem;
          height: 100%;
          min-height: 100%;
          display: inline-flex;
          margin: ${iconMargin[iconPosition]};
          position: ${iconPosition === 'action' && 'absolute'};
          right: ${iconPosition === 'action' && '0.5rem'};
          overflow: visible;

          > * {
            fill: currentColor;
          }
        }
      `;
}

function buttonLoading({ $loading }) {
  return (
    $loading &&
    css`
      cursor: wait !important;

      svg,
      ${FeaturedIcon}, ${ButtonChildren} {
        opacity: 0;
      }
    `
  );
}

function buttonMotion({ theme }) {
  return {
    transition: theme.a11y.motion
      ? 'none'
      : 'all 170ms ease-in-out, font-size 50ms ease-in-out, width 0ms linear, padding 130ms ease-in-out',
  };
}

function buttonPadding({ icon, iconOnly, iconPosition, size }) {
  return (
    !iconOnly &&
    iconButtonPadding(icon, iconPosition, sizePads[size], size)
  );
}

function iconButtonPadding(icon, iconPosition, pad, size) {
  const minHeight = rem(3);
  const minWidth = `${pad * 4 + 2}rem`;

  // Some button sizes are "off" the padding formula based on design decions
  const sizeAdjustments = {
    xxs: { left: 0, right: 0 },
    xs: { left: 0.065, right: 0.19125 },
    sm: { left: -0.125, right: -0.125 },
    md: { left: 0, right: 0 },
    lg: { left: 0, right: 0 },
    xl: { left: 0, right: 0 },
    xxl: { left: 0, right: 0 },
  };

  switch (icon && iconPosition) {
    case 'left':
      return {
        padding:
          '0 ' +
          (pad + sizeAdjustments[size].right) +
          'rem 0 ' +
          (pad + sizeAdjustments[size].left) +
          'rem',
        minHeight,
        minWidth,
      };
    case 'right':
      return {
        padding:
          '0 ' +
          (pad + sizeAdjustments[size].right) +
          'rem 0 ' +
          (pad + sizeAdjustments[size].left) +
          'rem',
        minHeight,
        minWidth,
      };
    case 'featured':
      return {
        padding: `0 ${pad}rem 0 ${pad + 2.5}rem`,
        minHeight,
        minWidth: `${pad * 12}rem`,
      };
    case 'action':
      return { padding: '0 2.5rem 0 0.5rem', minHeight, minWidth };
    default:
      return { padding: `0 ${pad}rem`, minHeight, minWidth };
  }
}

function buttonElevation({ floating = null }) {
  return (
    floating &&
    css`
      box-shadow: 0 ${rem(3)} ${rem(6)} 0 ${rgba(black, 0.125)};

      &:active {
        transform: translateY(0) scale(0.98);
      }

      &:hover:not(:active) {
        transform: translateY(-1px) scale(1.01);
        box-shadow: 0 ${rem(5)} ${rem(7)} 0 ${rgba(black, 0.175)};
      }
    `
  );
}

// 1. Deprecate pill Buttons (discuss with Design)
// 2. Consolidate buttonShape and buttonSize
function buttonShape({ size, pill, circular }) {
  // DEPRECATED: Remove in Iris 9.0
  if (circular) pill = true;

  const borderRadius = pill ? '2rem' : rem(borderRadii[size]);

  return { borderRadius };
}

function deriveButtonColor(customColor, format, theme) {
  let color: string;
  let hoverColor: string;
  let activeColor: string;

  if (customColor) {
    if (typeof customColor === 'string') {
      color = customColor;
      hoverColor = tint(0.15, color);
      activeColor = shade(0.15, color);
    } else if (customColor.color) {
      color = customColor.color;
      hoverColor = customColor.hover
        ? customColor.hover
        : tint(0.15, color);
      activeColor = customColor.active
        ? customColor.active
        : shade(0.15, color);
    }
  } else {
    color = theme.formats[format];
    hoverColor = tint(0.15, color);
    activeColor = shade(0.15, color);
  }

  return { color, hoverColor, activeColor };
}

// const buttonVariants = memoize(buttonVariantsFn);
// function buttonVariantsFn({ format, variant, theme }) {
function buttonVariants({
  color: customColor,
  format,
  theme,
  variant,
}) {
  // Temporary until CSSVar design tokens are released and Button
  // style logic is rewritten.
  if (format === 'upsell') return;

  const { color, hoverColor, activeColor } = deriveButtonColor(
    customColor,
    format,
    theme
  );

  // const { saturation } = parseToHsl(color);
  // const saturateAmount = saturation > 0.33 ? 0.2 : 0;

  const borderWidth = '1px';
  const borderColor = color;

  const contrastText = a11yColor(color);
  const contrastTextHover = a11yColor(hoverColor);
  const contrastTextActive = a11yColor(activeColor);

  switch (variant) {
    case 'outline':
      return css`
        border: ${borderWidth} solid ${borderColor};
        background: transparent;
        color: ${color};

        &:hover {
          color: ${theme.name === 'light'
            ? shade(0.1, color)
            : tint(0.5, color)};
          background: ${theme.name === 'light'
            ? rgba(activeColor, 0.2)
            : rgba(tint(0.3, activeColor), 0.3)};
        }
      `;
    case 'dashed':
      return css`
        border: ${borderWidth} dashed ${borderColor};
        background: transparent;
        color: ${color};

        &:hover {
          color: ${shade(0.2, color)};
          background: ${rgba(activeColor, 0.2)};
        }
      `;
    case 'minimal':
      return css`
        border: ${borderWidth} solid transparent;
        background: transparent;
        color: ${color};

        &:hover {
          color: ${contrastTextHover};
          background: ${color};
        }

        &:active {
          color: ${contrastTextActive};
        }
      `;
    case 'hyperminimal':
      return css`
        border: ${borderWidth} solid transparent;
        background: transparent;
        color: ${color};

        &:hover {
          border: ${borderWidth} solid transparent;
          /* color: hoverColorDark */
          color: ${hoverColor};
        }
      `;
    case 'minimalTransparent':
      return css`
        border: ${borderWidth} solid transparent;
        background: transparent;
        color: ${color};

        &:hover {
          border: ${borderWidth} solid transparent;
          background: ${rgba(color, 0.1)};
          /* color: hoverColorDark */
          color: ${hoverColor};
        }
      `;
    case 'transparent':
      return css`
        background: ${rgba(color, 0.6)};
        color: ${white};

        &:active {
          background: ${rgba(shade(0.2, activeColor), 0.75)};
          transform: scale(0.98);
        }

        &:hover:not(:active) {
          background: ${rgba(color, 0.675)};
          /* if: grow */
          /* transform: scale(1.01); */
          /* box-shadow: 0 0 0 0 rgba(black, 0.1); */
        }
      `;
    default:
      return css`
        border: ${borderWidth} solid ${borderColor};
        background: ${color};
        color: ${contrastText};

        &:active {
          background: ${activeColor};
          transform: scale(0.98);
          color: ${contrastTextActive};
        }

        &:hover:not(:active) {
          background: ${hoverColor};
          border: ${borderWidth} solid ${hoverColor};
          color: ${contrastTextHover};
          /* if: grow */
          /* transform: scale(1.01); */
          /* box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1),
        0 8px 8px -6px rgba(0, 0, 0, 0.25); */
        }
      `;
  }
}

// function fluidity(sizes: number | number[]) {
//   const min = rem(Math.min(...sizes));
//   const max = rem(Math.max(...sizes));

//   return css`
//     ${mediaQuery({ min, max })} {
//       width: 100%;
//     }
//   `;
// }

const mediaQuery = ({ min = 0, max, type = 'only screen' }) =>
  !max || min === max
    ? `@media ${type} and (min-width: ${em(min)})`
    : `@media ${type} and (min-width: ${em(
        min
      )}) and (max-width: ${em(max)})`;

type MediaQuerySize = { min?: number; max?: number };

const fluidWidth = ({ min = 0, max }: MediaQuerySize) => css`
  ${mediaQuery({ min, max })} {
    width: 100%;
  }
`;

const fluidity = (fluid: true | MediaQuerySize) =>
  fluid === true ? fluidWidth({}) : fluidWidth(fluid);

function buttonFluid({ fluid }) {
  return fluid && fluidity(fluid);
}

function buttonSizes({ size }) {
  switch (size) {
    case 'xxl':
      return {
        fontSize: rem(20),
        lineHeight: rem(72 - 2),
        height: rem(72),
        minWidth: rem(72),
      };
    case 'xl':
      return {
        fontSize: rem(18),
        lineHeight: rem(56 - 2),
        height: rem(56),
        minWidth: rem(56),
      };
    case 'lg':
      return {
        fontSize: rem(16),
        lineHeight: rem(48 - 2),
        height: rem(48),
        minWidth: rem(48),
      };

    case 'md':
      return {
        fontSize: rem(14),
        lineHeight: rem(40 - 2),
        height: rem(40),
        minWidth: rem(40),
      };

    case 'sm':
      return {
        fontSize: rem(14),
        lineHeight: rem(32 - 2),
        height: rem(32),
        minWidth: rem(32),
      };

    case 'xs':
      return {
        fontSize: rem(12),
        lineHeight: rem(24 - 2),
        height: rem(24),
        minWidth: rem(24),
      };
    case 'xxs':
      return {
        fontSize: rem(10),
        lineHeight: rem(20 - 2),
        height: rem(20),
        minWidth: rem(20),
      };
  }
}

function buttonDisabled({ disabled }) {
  return css`
    &:disabled {
      ${disabledCSS}
    }
    ${disabled && disabledCSS}
  `;
}

const disabledCSS = css`
  opacity: 0.5;
  pointer-events: none;
  user-select: none;
`;

function buttonTextShift({ variant, textShift, iconPosition }) {
  if (!variant.includes('minimal')) return;

  const side = iconPosition === 'right' ? 'left' : 'right';
  const paddingSide = 'padding-' + side;

  return (
    textShift &&
    css`
      &:not(:hover):not(:focus):not(:focus-within) {
        ${paddingSide}: 0;
      }
    `
  );
}

// Temporary until CSSVar design tokens are released and Button
// style logic is rewritten.
function buttonUpsell({ format, theme }) {
  if (format !== 'upsell') return;

  const color = core.color.upsell.sm;
  const colorHover =
    theme.name === 'dark'
      ? 'linear-gradient(to right,#00cc6b,#00cca7,#00b0e7)'
      : 'linear-gradient(to right,#00de59,#00d39e,#00aaf3)';
  const colorActive =
    theme.name === 'dark'
      ? 'linear-gradient(to right,#009c52,#00a385,#008cb8)'
      : 'linear-gradient(to right,#00af46,#00a47a,#0089c4)';

  return css`
    border: 1px solid transparent;
    background: ${color} padding-box, ${color} border-box;
    color: #fff;

    &:active {
      background: ${color} padding-box, ${colorActive} border-box;
      transform: scale(0.98);
      color: #fff;
    }

    &:hover:not(:active) {
      background: ${colorHover} padding-box, ${colorHover} border-box;
      border: 1px solid transparent;
      color: #fff;
    }
  `;
}
