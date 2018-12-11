import styled, { keyframes } from 'styled-components';
import { rem } from 'polished';
import { InputStyleSettings as styles } from '../InputText/InputHelpers';
import { VimeoStyleSettings as vimeo } from '../globals/js/style-settings/VimeoStyleSettings';

export const WrapperStyled = styled.div<{
    isInline?: boolean;
    theme: 'light' | 'dark';
}>`
    margin-bottom: ${props =>
        props.isInline ? '0' : rem(styles.marginBottom)};
    color: ${props => styles.color[props.theme].text.default};
`;

const iconSlide = ({ iconSize = 'md' }) => keyframes`
    from {
        width: 0;
        opacity: 0;
    }
    to {
        width: ${rem(styles.size[iconSize].iconSize)};
        opacity: 1;
    }
`;

const getIconColor = ({ format = 'neutral' }) =>
    ({
        negative: vimeo.colors.uiColors.alertColor,
        positive: vimeo.colors.uiColors.positiveColor,
        neutral: 'inherit',
    }[format]);

const padding = {
    sm: `${rem(12)} ${rem(9)}`,
    md: `${rem(12)} ${rem(11)}`,
    lg: `${rem(13)} ${rem(15)}`,
    xl: `${rem(13)} ${rem(15)}`,
};

export const IconStyled = styled.div<{
    iconSize?: 'sm' | 'md' | 'lg' | 'xl';
    format?: 'negative' | 'positive' | 'neutral';
}>`
    color: ${getIconColor};
    position: absolute;
    top: 0;
    left: 0;
    height: ${props => rem(styles.size[props.iconSize].height)};
    padding: ${props => padding[props.iconSize]};

    svg {
        width: ${props => rem(styles.size[props.iconSize].iconSize)};
        height: ${props => rem(styles.size[props.iconSize].iconSize)};
        animation: ${iconSlide} 300ms ease-out forwards;

        * {
            fill: currentColor;
        }
    }
`;

export const PositioningWrapperStyled = styled.div`
    position: relative;
`;

export const InputFieldWrapperStyled = styled.div`
    position: relative;
    padding: 0;
`;
