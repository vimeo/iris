import styled, { css } from 'styled-components';
import { rem, size } from 'polished';
import { ButtonInlineInputTextStyleProps as Props } from './ButtonInlineInputTextTypes';
import { COLORS } from '../globals/js/constants/COLORS';
import { TRANSITIONS } from '../globals/js/constants/TRANSITIONS';
import { ButtonColors } from '../Button/ButtonColors';

const sizes = (size, format) => {
    const values =
        format === 'subtle'
            ? { md: 38, lg: 46, xl: 46 }
            : { md: 40, lg: 48, xl: 48 };
    return values[size];
};

const formats = {
    strong: css`
        border-color: ${COLORS.VimeoBlue};
        background: ${COLORS.VimeoBlue};
        svg * {
            fill: ${COLORS.White};
        }

        &:hover {
            border-color: ${COLORS.AstroGranite};
            background: ${COLORS.AstroGranite};
        }
    `,
    neutral: css`
        border-color: ${ButtonColors.AlternativeBackground};
        background: ${ButtonColors.AlternativeBackground};

        svg * {
            fill: ${COLORS.White};
        }

        &:hover {
            border-color: ${COLORS.AstroGranite};
            background: ${COLORS.AstroGranite};
        }
    `,
    subtle: css`
        //position: relative;
        top: ${rem(1)};
        right: ${rem(1)};

        border-color: transparent;
        background: ${COLORS.White};

        svg * {
            fill: ${COLORS.RegentGray};
        }

        &:hover {
            background: ${COLORS.Plaster};
        }
    `,
};

const sizeStyles = ({ size: sizeStyle, format }) => css`
    ${size(rem(sizes(sizeStyle, format)))};

    svg {
        ${size(rem(sizes(sizeStyle, format) / 2))};
    }
`;

export const ButtonStyled = styled.button<Props>`
    position: relative;
    width: auto;
    margin: 0;
    border-width: ${rem(1)} ${rem(1)} ${rem(1)} 0;
    border-style: solid;
    border-radius: 0 ${rem(3)} ${rem(3)} 0;
    transition: all ${TRANSITIONS.base};
    text-align: center;
    vertical-align: middle;
    appearance: none;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    ${sizeStyles};
    ${props => formats[props.format]};

    &:active svg {
        transform: scale(0.92);
    }
`;

export const Wrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
`;
