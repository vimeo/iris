// @ts-ignore
import React from 'react';
// @ts-ignore
import styled, { StyledComponentClass } from 'styled-components';
import { rem } from 'polished';
// @ts-ignore
import SelectedIcon from '../icons/checkmark.svg';
import COLORS from '../globals/js/constants/COLORS';
import { MenuPanelListItemThemes } from './MenuPanelListItemTypes';

const LinkIconSize = rem(18);

export const ListItemStyled = styled('li')`
    width: 100%;

    & a:focus {
        outline: none;
    }
`;

export const LabelStyled = styled.span`
    padding: ${rem(4)};
    display: inline-block;
    border-radius: ${rem(2)};
    a:focus & {
        box-shadow: 0 0 0 ${rem(2)} ${COLORS.VimeoBlue};
    }
`;

export const SelectedIconElementStyled = styled(SelectedIcon)`
    position: absolute;
    top: ${rem(11)};
    left: 0.25rem;

    width: 1rem;
    height: 1rem;

    * {
        fill: ${COLORS.VimeoBlue};
    }
`;

export const LinkIconWrapperStyled = styled<MenuPanelListItemThemes, 'span'>(
    'span',
)`
    display: inline-block;

    position: relative;
    top: ${rem(4)};

    width: ${LinkIconSize};
    height: ${LinkIconSize};
    margin-right: ${rem(8)};

    * {
        fill: ${props =>
            props.theme === 'dark' ? COLORS.SoutherlySky : COLORS.AstroGranite};
    }
`;

export const LinkStyled = styled<MenuPanelListItemThemes, 'span'>('span')`
    display: inline-block;
    position: relative;

    width: 100%;
    padding: ${rem(6) + ' ' + rem(20)};

    color: ${props =>
        props.theme === 'dark' ? COLORS.White : COLORS.AstroGranite};

    cursor: pointer;
    text-decoration: none;

    &:hover {
        background-color: ${props =>
            props.theme === 'dark' ? COLORS.AshenWinter : COLORS.Paste};

        & * {
            color: ${props =>
                props.theme === 'dark' ? COLORS.White : COLORS.AstroGranite};
        }

        & svg * {
            fill: ${props =>
                props.theme === 'dark' ? COLORS.White : COLORS.AstroGranite};
        }
    }
`;
