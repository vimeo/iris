import styled from 'styled-components';
import { rem } from 'polished';
import { CarouselDotProps, CarouselWrapperProps } from './CarouselDotNavTypes';
import * as COLORS from '../Color/Color';
import { visuallyHiddenCSS } from '../Utils/VisuallyHidden';

export const WrapperStyled = styled<CarouselWrapperProps, 'div'>('div')`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 0.25rem;

    ${props => (props.showIndexedNav ? '' : visuallyHiddenCSS)};
`;

const getHoverColor = (props: CarouselDotProps) => {
    if (props.theme === 'dark') {
        return props.isSelected ? COLORS.VimeoBlueLightened : COLORS.IronHeart;
    } else {
        return props.isSelected
            ? COLORS.VimeoBlueDarkened
            : COLORS.AstroGranite;
    }
};

export const DotStyled = styled<CarouselDotProps, 'button'>('button')`
    padding: 0;
    height: 0.5rem;
    width: 0.5rem;
    background-color: ${props =>
        props.isSelected ? COLORS.VimeoBlue : COLORS.SoutherlySky};
    border: 0;
    border-radius: 50%;

    &:hover {
        background-color: ${getHoverColor};
        cursor: pointer;
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 ${rem(1)} ${COLORS.White},
            0 0 0 ${rem(3)} ${COLORS.VimeoBlue};
    }

    &:not(:first-child) {
        margin-left: 0.5rem;
    }
`;

export const VisuallyHiddenContent = styled.span`
    ${visuallyHiddenCSS};
`;
