import React, { SFC } from 'react';
import styled, { css } from 'styled-components';
import { rem } from 'polished';
import VimeoStyleSettings from '../globals/js/style-settings/VimeoStyleSettings';
import COLORS from '../globals/js/constants/COLORS';

export interface LinkTextProps {
    /**
     * The element that should be rendered. Defaults to "a".
     */
    element?: 'a' | 'span';
    /**
     * Choose the link format (coloring), defaults to "primary".
     */
    format?: 'primary' | 'primaryDark' | 'warning' | 'light';
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

const getDefaultColor = props => props.format && formats[props.format] ? formats[props.format].defaultColor : '';

const getHoverColor = props => props.format && formats[props.format] ? formats[props.format].hoverColor : '';

const AnchorStyled = styled.a`
    text-decoration: none;
    color: inherit;
    &:hover {
        text-decoration: none;
    }
`;

const LinkTextStyled = styled<LinkTextProps, 'span'>('span')`
    display: inline;
    position: relative;
    
    padding: 0;

    color: ${getDefaultColor};

    font-size: inherit;
    line-height: inherit;

    border: 0;
    background-color: transparent;

    transition: all 0.1s ease-in-out;
    
    appearance: none;

    &::-moz-focus-inner {
        margin: 0;
        padding: 0;

        border: 0;
    }
    &:hover,
    &:focus {
        color: ${getHoverColor};
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


const LinkText: SFC <
    LinkTextProps &
    React.HTMLProps<HTMLAnchorElement>
> = ({
    children,
    decoration,
    element = 'a',
    format = 'primary',
    href,
    ref: _,
    ...filteredProps
}) => {

    const maybeAnchorTag = element === 'a' ? (
        <AnchorStyled
            href={href}
            {...filteredProps}
        >
            <LinkTextStyled
                decoration={decoration}
                format={format}

            >
                {children}
            </LinkTextStyled>
        </AnchorStyled>
    ) : (
            <LinkTextStyled
                decoration={decoration}
                format={format}
                {...filteredProps}

            >
                {children}
            </LinkTextStyled>
        );

    return maybeAnchorTag

};

export default LinkText;
