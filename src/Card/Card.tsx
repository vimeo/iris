import React from 'react';
import styled from 'styled-components';
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
    inactive: `0 0 ${rem(10)} 0 rgba(0,0,0,0.05)`,
    isSelected: `0 0 0 ${rem(3)} ${COLORS.VimeoBlue}`,

}

const getBoxShadow = props => {
    if(props.isLoading) return 'none';
    return  props.isSelected ?  boxShadow.isSelected : boxShadow.inactive;
};

const CardStyled = styled<CardProps, 'div'>('div')`
    position: relative;
    background: ${props => props.isLoading ? COLORS.Plaster : COLORS.White};
    border: ${rem(1)} solid ${props => props.isSelected ? COLORS.VimeoBlueDarkened : COLORS.Plaster};
    border-radius: ${rem(CardSettings.borderRadius)};
    box-shadow: ${getBoxShadow};
    width: 100%;
    transition: box-shadow ${CardSettings.hoverTransition};
    &:hover {
        ${props => !props.noHoverState && !props.isLoading && !props.isSelected ? `box-shadow: 0 ${rem(4)} ${rem(8)} 0 rgba(0,0,0,0.15);` : ''}
    }
`;

// ==================== Card

const Card: React.SFC<CardProps> = (props) => (
    <CardStyled
        {...props}
    />
);

export default Card;
