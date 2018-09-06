import React from 'react';
// @ts-ignore
import styled, { StyledComponentClass, css } from 'styled-components';
import { rem } from 'polished';

import COLORS from '../globals/js/constants/COLORS';
import VimeoStyleSettings from '../globals/js/style-settings/VimeoStyleSettings';

const categoryCardStyleSettings = {
    ICON_SIZE: rem(48),
    BORDER_RADIUS: rem(5),
    TRANSITION: '300ms ease',
};

const commonSize = css`
    position: absolute;
    width: 100%;
    height: 100%;
`;

const bgOverlay = css`
    ${commonSize};
    top: 0;
    left: 0;
    padding-bottom: 100%;
    border-radius: ${categoryCardStyleSettings.BORDER_RADIUS};
    transition: transform ${categoryCardStyleSettings.TRANSITION},
        opacity ${categoryCardStyleSettings.TRANSITION};
`;

export const CategoryCardStyled = styled<
    React.HTMLProps<HTMLDivElement>,
    'div'
>('div')`
    margin-bottom: 1rem;
    width: 100%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.15);

    background-color: ${COLORS.SoutherlySky};
    border-radius: ${categoryCardStyleSettings.BORDER_RADIUS};
    padding-bottom: 100%;
    position: relative;
    overflow: hidden;

    &:hover {
        cursor: pointer;
        box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.25);
    }
`;

export const BackgroundStyled = styled('div')`
    ${bgOverlay};
    background-size: cover;
    background-position: center;

    ${CategoryCardStyled}:hover & {
        transform: scale(1.1);
    }
`;

export const OverlayStyled = styled('div')`
    ${bgOverlay};
    opacity: 0.7;
    background-image: linear-gradient(
        -180deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 1) 100%
    );

    ${CategoryCardStyled}:hover & {
        opacity: 1;
    }
`;

export const CardContentWrapStyled = styled('div')`
    ${commonSize};
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const CardContentStyled = styled('div')`
    text-align: center;
    padding: ${rem(24)};
`;

export const IconWrapperStyled = styled('div')`
    margin-bottom: ${rem(8)};
    svg {
        height: ${categoryCardStyleSettings.ICON_SIZE};
        width: ${categoryCardStyleSettings.ICON_SIZE};
        * {
            fill: ${VimeoStyleSettings.colors.typeColors.textColorLight};
        }
    }
`;
