import styled, { css } from 'styled-components';
import { rem } from 'polished';
import { InputRadioOverlayStyledProps } from './InputRadioTypes';
import { COLORS } from '../Legacy/COLORS';

const wrapperSize = 2;
const inputSize = 20;

export const InputRadioWrapperStyled = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    flex-wrap: wrap;
    min-height: ${rem(wrapperSize)};
    margin-bottom: 0.5rem;
    padding-left: 2rem;
    min-height: 1.25rem;
`;

export const InputRadioStyled = styled.input`
    display: inline-flex;
    position: absolute;
    z-index: 3;
    top: ${rem(inputSize / 2)};
    left: ${rem(inputSize / 2)};
    width: ${rem(1)};
    height: ${rem(1)};
    margin: 0;
    appearance: none;
    align-items: center;
    justify-content: center;
    outline: 0;
`;

// prettier-ignore
const radioHover = css`
    ${InputRadioWrapperStyled}:hover ${InputRadioStyled}:not([disabled]) + &
`;

// prettier-ignore
const radioChecked = css`
    ${InputRadioStyled}:checked + &
`;

const themeSpecificStyles = ({ theme = 'default' }) =>
    ({
        default: css`
            border-color: ${COLORS.RegentGray};
            background: ${COLORS.White};

            ${radioHover} {
                border-color: ${COLORS.AstroGranite};
            }
        `,
        dark: css`
            border-color: ${COLORS.RegentGray};
            background: transparent;

            ${radioHover} {
                border-color: ${COLORS.White};
            }

            ${radioChecked} {
                background: ${COLORS.White};
            }
        `,
    }[theme]);

export const InputRadioOverlayStyled = styled<
    InputRadioOverlayStyledProps,
    'div'
>('div')`
    display: block;
    position: absolute;
    z-index: 3;
    top: 0;
    left: 0;
    width: ${rem(inputSize)};
    height: ${rem(inputSize)};
    border-width: ${rem(1)};
    border-style: solid;
    border-radius: ${rem(inputSize / 2)};

    ${themeSpecificStyles};

    &:after {
        content: '';
        position: absolute;
        transition: all 200ms ease-out;
        transform: scale(0);
        top: ${rem(4)};
        left: ${rem(4)};
        width: 0.625rem;
        height: 0.625rem;
        border-radius: 0.3125rem;
        background: ${COLORS.VimeoBlue};
    }

    ${radioChecked}:after {
        transform: scale(1);
        test: ${radioChecked};
    }
`;
