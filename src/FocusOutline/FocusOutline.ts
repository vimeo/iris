import { css } from 'styled-components';
import { rgba, rem } from 'polished';
import { COLORS } from '../Legacy/COLORS';

const transitionSpeed = '150ms';

export interface FocusOutlineProps {
    theme?: 'dark' | 'default';
}

export const FocusOutline = ({ theme = null }: FocusOutlineProps) => css`
    z-index: 1;
    top: ${rem(-4)};
    left: ${rem(-4)};
    position: absolute;
    width: calc(100% + ${rem(8)});
    height: calc(100% + ${rem(8)});
    pointer-events: none;
    transform: scale(0.94);
    border-radius: ${rem(6)};
    border: ${rem(1)} solid ${borderColor(theme, 0)};

    transition: border ${transitionSpeed}, transform ${transitionSpeed};
`;

export const FocusOutlineFocused = ({ theme = null }: FocusOutlineProps) => css`
    transform: scale(1);
    border: ${rem(2)} solid ${borderColor(theme, 0.5)};
`;

const borderColor = (theme, opacity) =>
    theme === 'dark'
        ? rgba(COLORS.VimeoBlueLightened, opacity * 1.334)
        : rgba(COLORS.VimeoBlue, opacity);
