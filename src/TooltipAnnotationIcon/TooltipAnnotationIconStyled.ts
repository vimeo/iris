import styled, { css } from 'styled-components';
import { rem } from 'polished';
import COLORS from '../globals/js/constants/COLORS';

export const TooltipAnnotationIconStyled = styled.div`
    display: inline-block;
    position: relative;
    color: ${COLORS.RegentGray};

    &:hover {
        color: ${COLORS.VimeoBlue};
    }

    * {
        fill: currentColor;
    }
`;

export const IconWrapper = styled.div<{
    labelType: 'textBlock' | 'inline' | 'noPosition';
}>`
    position: absolute;
    top: ${props => (props.labelType === 'textBlock' ? rem(2) : 0)};
    right: ${rem(-20)};
    width: ${rem(16)};
    height: ${rem(16)};

    ${props =>
        props.labelType === 'noPosition' &&
        css`
            position: relative;
            top: 0;
            left: 0;
        `};
`;
