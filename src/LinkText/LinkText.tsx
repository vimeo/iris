import React from 'react';
import styled, { css } from 'styled-components';
import { rem } from 'polished';
import VimeoStyleSettings from '../globals/js/style-settings/VimeoStyleSettings';
import COLORS from '../globals/js/constants/COLORS';

export interface LinkTextProps {
    /**
     * The text of the link
     */
    children: React.ReactChildren;
    /**
     * The element that should be rendered. Defaults to "a".
     */
    element?: 'a' | 'span';
    /**
     * Choose the link format (coloring), defaults to "primary".
     */
    format?: 'primary'|  'primaryDark' | 'warning' | 'light';
    /**
     * Choose the link decoration if it shoudld be non-standard.
     */
    decoration?: 'loud' | 'inherit' | 'silent';
};

const linkBorderCss = css`
    display: block;

    position: absolute;
    bottom: ${rem(-2)};
    left: 0;

    width: 100%;
    height: 1em;
    margin-top: ${rem(10)};

    border-bottom: ${rem(1)} solid currentColor;

    content: '';
`;

const getLinkDecorationCss = (decoration) => {
    let decorationCSS;
    switch (decoration) {
        case 'loud':
            decorationCSS = css`
                font-weight: ${VimeoStyleSettings.type.weights.bold};
            `;
            break;
        case 'inherit':
            decorationCSS = css`
                font-weight: inherit;
                color: inherit;

                &::after {
                    content: none;
                }
            `;
            break;
        case 'silent':
            decorationCSS = css`
                &::after {
                    content: none;
                }

                &:hover::before {
                    ${linkBorderCss}
                }
            `;
            break;

        default:
            decorationCSS = '';
    }

    return decorationCSS;

};

const formats = {
    light: {
        defaultColor: COLORS.White,
        hoverColor: COLORS.VimeoBlueLightened,
    },
    primary: {
        defaultColor: VimeoStyleSettings.colors.typeColors.linkColorLight,
        hoverColor: VimeoStyleSettings.colors.typeColors.linkColorLightToDarkHover,
    },
    primaryDark: {
        defaultColor: VimeoStyleSettings.colors.typeColors.linkColorLight,
        hoverColor: VimeoStyleSettings.colors.typeColors.linkColorLightToLightHover,
    },
    warning: {
        defaultColor: VimeoStyleSettings.colors.uiColors.alertColor,
        hoverColor: VimeoStyleSettings.colors.uiColors.alertColorHover,
    },
};


const LinkText = ({
    children,
    element = 'a',
    format = 'primary',
    ...filteredProps
}: LinkTextProps) => {

    const LinkTextStyled = styled<LinkTextProps, any>(element)`
        display: inline;
        position: relative;

        padding: 0;

        color: ${props => props.format && formats[props.format] ? formats[props.format].defaultColor : ''};

        font-size: inherit;
        line-height: inherit;

        border: 0;
        background-color: transparent;

        transition: all 0.1s ease-in-out;
        text-decoration: none;

        appearance: none;

        &::-moz-focus-inner {
            margin: 0;
            padding: 0;

            border: 0;
        }
        &:hover,
        &:focus {
            color: ${props => props.format && formats[props.format] ? formats[props.format].hoverColor : ''};
            cursor: pointer;
        }
        &:active {
            cursor: wait;
        }

        &::after {
            ${linkBorderCss}
        }

        ${props => getLinkDecorationCss(props.decoration)};
    `;

    return (
            <LinkTextStyled
                format={format}
                {...filteredProps}

            >
                    {children}
            </LinkTextStyled>
    );
};

export default LinkText;
