import React, { SFC } from 'react';
import styled, {
    css,
    // @ts-ignore fixes "cannot be named" error
    Styles, 
    // @ts-ignore fixes "cannot be named" error
    StyledComponentClass,
} from 'styled-components';
import { rem } from 'polished';
import VimeoStyleSettings from '../globals/js/style-settings/VimeoStyleSettings';
import COLORS from '../globals/js/constants/COLORS';
import {
    typeByCSSInterface,
    TypeProps,
    StyledTypeElementProps,
} from './TypeTypes';
import { getUnitlessLineHeight} from './TypeHelpers';
import { Omit } from '../globals/js/type-helpers';
import { TypeVariableElement } from './TypeVariableElement';


export const TypeBaseStyleSettings = {
    fontFamily: {
        regular: VimeoStyleSettings.type.fontFamily.regular,
        light: VimeoStyleSettings.type.fontFamily.light,
    },
    fontSize: {
        xs: 10,
        sm: 12,
        md: 14,
        lg: 16,
        stat: 24,
        h1: 36,
        h2: 28,
        h3: 22,
        h4: 18,
        h5: 16,
        h6: 14,
        headerSm: 12,
    },
    fontWeight: {
        xs: 'normal',
        sm: 'normal',
        md: 'normal',
        lg: 'normal',
        stat: VimeoStyleSettings.type.weights.light,
        h1: VimeoStyleSettings.type.weights.medium,
        h2: VimeoStyleSettings.type.weights.medium,
        h3: VimeoStyleSettings.type.weights.medium,
        h4: VimeoStyleSettings.type.weights.medium,
        h5: VimeoStyleSettings.type.weights.medium,
        h6: VimeoStyleSettings.type.weights.medium,
        headerSm: VimeoStyleSettings.type.weights.mediumLight,
    },
    format: {
        alternative: {
            default: VimeoStyleSettings.colors.typeColors.textColorMedium,
        },
        light: {
            xs: VimeoStyleSettings.colors.typeColors.textColorMediumLight,
            sm: VimeoStyleSettings.colors.typeColors.textColorMediumLight,
            md: VimeoStyleSettings.colors.typeColors.textColorMediumLight,
            lg: VimeoStyleSettings.colors.typeColors.textColorMediumLight,
            stat: VimeoStyleSettings.colors.typeColors.textColorMediumLight,
            headerSm: VimeoStyleSettings.colors.typeColors.textColorMediumDark,
            default: VimeoStyleSettings.colors.typeColors.textColorLight,
        },
        dark: {
            default: VimeoStyleSettings.colors.typeColors.textColorDark,
        },
        white: {
            default: COLORS.White,
        },
        success: {
            default: COLORS.Pistachio,
        }
    },
    letterSpacing: {
        xs: '0.01rem',
        sm: '0.01rem',
        md: '0.01rem',
        lg: '0.01rem',
        stat: '0.01rem',
        h1: '0.04rem',
        h2: '0.04rem',
        h3: '0.01rem',
        h4: '0.01rem',
        h5: '0.01rem',
        h6: '0.01rem',
        headerSm: '.033rem',
    },
    lineHeight: {
        xs: 12,
        sm: 16,
        md: 20,
        lg: 20,
        stat: 32,
        h1: 40,
        h2: 32,
        h3: 38,
        h4: 24,
        h5: 20,
        h6: 20,
        headerSm: 18,
    },
    marginBottom: {
        xs: 12,
        sm: 16,
        md: 20,
        lg: 24,
        stat: 24,
        h1: 20,
        h2: 16,
        h3: 8,
        h4: 4,
        h5: 8,
        h6: 8,
        headerSm: 8,
    },
};

// This function serves as an interface to generate type styles in the same way the old SCSS type mixins work
// it is used when a type component cannot be used in a component for some reason. (e.g. styling a third-party plugin)
// it also creates our basic type styles.

export const typeCSSByProps = (settings: typeByCSSInterface) => {
        return css`
        font-size: ${rem(TypeBaseStyleSettings.fontSize[settings.size])};
        font-family: ${
        settings.fontStack
                ? TypeBaseStyleSettings.fontFamily[settings.fontStack]
                : TypeBaseStyleSettings.fontFamily.regular};
        font-weight: ${TypeBaseStyleSettings.fontWeight[settings.size]};
        letter-spacing: ${TypeBaseStyleSettings.letterSpacing[settings.size]};
        line-height: ${getUnitlessLineHeight(
                TypeBaseStyleSettings.fontSize[settings.size],
                TypeBaseStyleSettings.lineHeight[settings.size]
            )};

        color: ${TypeBaseStyleSettings.format[settings.format][settings.size] ||
            TypeBaseStyleSettings.format[settings.format].default};

        max-width: 44rem;

        margin-bottom: ${
            settings.noMargin
                ? '0'
                : rem(TypeBaseStyleSettings.marginBottom[settings.size])};
    `
};

const StyledElement = styled< StyledTypeElementProps & TypeProps , any >(TypeVariableElement)`
    ${props => typeCSSByProps({
        fontStack: props.fontStack,
        format: props.format,
        noMargin: props.noMargin,
        size:props.size
    })}
    
    strong {
        // handle bold styling within paragaphs.
        font-weight: ${VimeoStyleSettings.type.weights.medium};
    }
`;

const TypeBase: SFC <
    StyledTypeElementProps &
    TypeProps & 
    Omit<React.HTMLProps<HTMLElement>, 'size'>
> = ({
    ref: _,
    ...filteredProps
}) => (
    <StyledElement {...filteredProps} />
);

export default TypeBase;
