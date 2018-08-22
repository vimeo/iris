import React, { SFC, HTMLProps } from 'react';
import styled, { css } from 'styled-components';
import { rem } from 'polished';
import COLORS from '../globals/js/constants/COLORS';
import CardSettings from './CardSettings';

export interface CardProps {
    /**
     * Set to `true` to when using an empty loading state for the card
     */
    isLoading?: boolean;
    /**
     * Selection checkbox state should be controlled with this prop. Box is checked if set to `true`
     */
    isSelected?: boolean;
    /**
     * Most cards should have a hover state, but if none is desired, set to true.
     */
    noHoverState?: boolean;
};

const boxShadow = {
    inactive: `0 0 ${rem(10)} 0 rgba(0,0,0,0.15)`,
    isSelected: `0 0 0 ${rem(3)} ${COLORS.VimeoBlue}`,

}

const getBoxShadow = props => {
    if(props.isLoading) return 'none';
    return  props.isSelected ?  boxShadow.isSelected : boxShadow.inactive;
};

const CardStyled = styled<CardProps, 'div'>('div')`
    position: relative;
    background: ${props => props.isLoading ? COLORS.Paste : COLORS.White};
    border: ${rem(1)} solid ${props => props.isSelected ? COLORS.VimeoBlueDarkened : COLORS.Plaster};
    border-radius: ${rem(CardSettings.borderRadius)};
    width: 100%;

    &:after {
        display: block;
        position: absolute;
        content: '';
        width: 100%;
        padding-bottom: calc(100% + ${rem(2)});
        border-radius: ${rem(CardSettings.borderRadius)};
        box-shadow: ${getBoxShadow};
        opacity: ${props => props.isSelected ? '1' : '.85'};
        transition: opacity ${CardSettings.hoverTransition}, transform ${CardSettings.hoverTransition};
        z-index: -1;
    }

    ${props => !props.isLoading && !props.isSelected ? css`
        &:hover:after {
            background: rgba(0,0,0,0.1);
            opacity: 1;
            transform: scale(1.01);
        }
    ` : ''}
`;

// ==================== Card

const Card: SFC <
    CardProps &
    HTMLProps<HTMLDivElement>
> = ({
    ref:_,
    ...props
}) => (
    <CardStyled
        {...props}
    />
);

export default Card;
