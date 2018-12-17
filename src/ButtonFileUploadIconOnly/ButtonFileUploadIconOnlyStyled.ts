import styled, { css } from 'styled-components';
import { rem } from 'polished';
import { COLORS } from '../Legacy/COLORS';

const buttonSizes = {
    md: 40,
    sm: 32,
};
const IconSize = 20;

export const SpanStyled = styled.span`
    display: inline-flex;

    align-items: center;
    flex: 1;

    svg {
        width: ${rem(IconSize)};
        height: ${rem(IconSize)};

        flex: 1;
    }

    svg * {
        fill: currentColor;
    }
`;

const formats = ({ format = 'dark' }) =>
    ({
        dark: css`
            color: ${COLORS.AstroGranite};

            &:hover {
                background-color: rgba(162, 175, 184, 0.16);
            }
        `,
        light: css`
            color: ${COLORS.AstroGranite};
            background-color: ${COLORS.White};

            &:hover {
                color: ${COLORS.VimeoBlue};
            }
        `,
        alternative: css`
            color: ${COLORS.RegentGray};

            &:hover {
                background-color: rgba(162, 175, 184, 0.16);
            }
        `,
    }[format]);

export const LabelStyled = styled.label<{
    size: 'sm' | 'md';
    autoSpacingHorizontal?: boolean;
    inputElementProps: any;
    format?: 'dark' | 'alternative' | 'light';
}>`
    display: inline-flex;
    position: relative;
    margin: 0;
    padding: 0;
    width: ${props => rem(buttonSizes[props.size])};
    height: ${props => rem(buttonSizes[props.size])};

    border: 0;
    border-radius: ${rem(3)};
    background: transparent;

    transition: 100ms ease-in-out;
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

    ${formats};

    ${props =>
        props.autoSpacingHorizontal &&
        css`
            margin-left: ${rem(2)};

            &:first-of-type {
                margin-left: 0;
            }
        `};

    ${props =>
        props.inputElementProps.disabled &&
        css`
            color: ${COLORS.Porcelain};

            &:hover {
                color: ${COLORS.Porcelain};
                background: inherit;
                cursor: not-allowed;
            }
        `};
`;
