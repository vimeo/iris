import styled, { css } from 'styled-components';
import { rem } from 'polished';
import { WrapperStyledProps } from './MenuPanelListTypes';
import { COLORS } from '../Legacy/';

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
