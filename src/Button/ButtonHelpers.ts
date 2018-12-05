import { css } from 'styled-components';
import { rem } from 'polished';

import VimeoStyleSettings from '../globals/js/style-settings/VimeoStyleSettings';
import mediaQuery from '../globals/js/style-helpers/mediaQuery';

import { ButtonColors } from './ButtonColors';
import { ButtonStyleSettings } from './ButtonStyleSettings';

const ButtonCoreCSS = css`
    display: inline-flex;
    position: relative;
    outline: 0;

    width: 100%;
    margin: 0;

    font-family: ${VimeoStyleSettings.type.fontFamily.regular};
    font-weight: 700;

    border-width: ${rem(1)};
    border-style: solid;

    transition: all 0.1s ease-in-out;
    text-align: center;
    vertical-align: middle;
    letter-spacing: 0.1px;
    align-items: center;
    justify-content: center;
    font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizelegibility;
`;

const getAutoWidthCSS = props => {
    const autoWidthCSS = css`
        width: auto;
        ${props.autoMargins
            ? `
                margin-right: ${rem(8)};

                &:last-of-type {
                    margin-right: 0;
                }
        `
            : ''};
    `;

    if (props.autoWidth === 'fluid') return;

    if (props.autoWidth === 'xs') {
        return autoWidthCSS;
    }

    return mediaQuery[props.autoWidth]`
        ${autoWidthCSS}
    `;
};

const getDefaultCSSByFormat = props => {
    const thisButtonFormat =
        ButtonStyleSettings.Formats[props.format] &&
        ButtonStyleSettings.Formats[props.format].default;

    if (thisButtonFormat) {
        return `
            background-color: ${thisButtonFormat.backgroundColor};
            border-color: ${thisButtonFormat.borderColor};
            color: ${thisButtonFormat.color};
        `;
    }

    return '';
};

const getDisabledCSSByFormat = props => {
    const isPrimary = props.format === 'primary';

    return `
        background-color: ${
            isPrimary
                ? ButtonColors.PrimaryDisabledBackground
                : ButtonColors.DisabledBackground
        };
        border-color: ${
            isPrimary
                ? ButtonColors.PrimaryDisabledBackground
                : ButtonColors.DisabledBackground
        };
        color: ${
            isPrimary
                ? ButtonColors.PrimaryDisabledText
                : ButtonColors.DisabledText
        };
    `;
};

const getHoverCSSByFormat = props => {
    const thisButtonFormat =
        ButtonStyleSettings.Formats[props.format] &&
        ButtonStyleSettings.Formats[props.format].hover;

    if (thisButtonFormat) {
        return `
            background-color: ${thisButtonFormat.backgroundColor};
            border-color: ${thisButtonFormat.borderColor};
            color: ${thisButtonFormat.color};
        `;
    }

    return '';
};

const getActiveCSSByFormat = props => {
    const thisButtonFormat =
        ButtonStyleSettings.Formats[props.format] &&
        ButtonStyleSettings.Formats[props.format].active;
    if (thisButtonFormat) {
        return `
            background-color: ${thisButtonFormat.backgroundColor};
            border-color: ${thisButtonFormat.backgroundColor};
        `;
    }

    return '';
};

const getSizeCSS = props => {
    const thisButtonSize = ButtonStyleSettings.Sizes[props.size];

    return `
        min-width: ${thisButtonSize.minWidth};
        min-height: ${thisButtonSize.minHeight};
        padding: ${thisButtonSize.padding};

        font-size: ${thisButtonSize.fontSize};
        line-height: ${thisButtonSize.lineHeight};
    `;
};

const getVerticalAutoMarginCSS = props =>
    props.isInline || !props.autoMargins ? '' : `margin-bottom: ${rem(8)};`;

export {
    ButtonCoreCSS,
    getActiveCSSByFormat,
    getAutoWidthCSS,
    getDefaultCSSByFormat,
    getDisabledCSSByFormat,
    getHoverCSSByFormat,
    getSizeCSS,
    getVerticalAutoMarginCSS,
};
