//@ts-ignore required to prevent "Cannot be Named"
import React from 'react';
import styled, {
    css,
    //@ts-ignore suppresses "Cannot be named"
    StyledComponentClass,
} from 'styled-components';
import { rem } from 'polished';
import { WrapperStyledProps } from './MenuPanelListTypes';
import COLORS from '../globals/js/constants/COLORS';

const maybeHasDividerBorder = props =>
    props.hasDivider &&
    css`
        border-top: ${rem(1)} solid
            ${props =>
                props.theme === 'dark' ? COLORS.IronHeart : COLORS.Porcelain};
    `;

export const WrapperStyled = styled<WrapperStyledProps, 'div'>('div')`
    padding: ${rem(8)} 0;

    ${maybeHasDividerBorder};
`;

export const HeaderWrapperStyled = styled.div`
    margin-top: ${rem(8)};
    margin-right: ${rem(24)};
    margin-left: ${rem(24)};
`;

export const MenuListStyled = styled.ul`
    margin: 0;
    list-style-type: none;
`;
