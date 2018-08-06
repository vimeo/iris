import React from 'react';
import { Omit } from '../globals/js/type-helpers';


export interface ButtonProps
    extends Omit<React.HTMLProps<HTMLElement>, 'size'> {
    /**
     * Determines if there should be margins automatically, set to false to suppress.
     */
    autoMargins?: boolean;
    /**
     * At what breakpoint should the button go to `width: auto`?
     */
    autoWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'fluid';
    children: React.ReactNode;
    className?: string;
    /**
     * For custom color themes, specify color strings (any valid css color value) for the background and text color for default and hover states.
     *  *`hoverTextColor` is optional and falls back to `defaultTextColor`
     *  *`hoverBorderColor`  and `defaultBorderColor` are optional and fall back to background color pairings
     */
    customFormat?: customFormatButton;
    /**
     * Chooses the color theme
     */
    format?: buttonFormats;
    /**
     * This should be an SVG loaded through SVG loader.
     */
    icon?: React.ReactNode;
    /**
     * Choose icon location (default: beforeLabel)
     */
    iconLocation?: 'beforeLabel' | 'afterLabel' |'featuredLeft';
    /**
     * If `false` the button will be rendered as a span tag
     */
    isButtonElement?: boolean;
    /**
     * removes all margins
     */
    isInline?: boolean;
    /**
     * Choose the button size
     */
    size?: 'xs' | 'sm' | 'md' | 'lg' |'xl';
}

export interface customFormatButton {
    defaultBackgroundColor: string,
    defaultBorderColor?: string,
    defaultTextColor: string,
    hoverBackgroundColor: string,
    hoverBorderColor?: string,
    hoverTextColor?: string,
}

export type buttonFormats =
    | 'primary'
    | 'primaryDark'
    | 'primaryOutline'
    | 'primaryTextOnly'
    | 'secondary'
    | 'secondaryDark'
    | 'secondaryOutline'
    | 'secondaryTextOnly'
    | 'alternative'
    | 'alternativeOutline'
    | 'darkSecondary'
    | 'success'
    | 'successOutline'
    | 'warning'
    | 'warningOutline'
    | 'warningTextOnly'
    | 'lightTransparent'
    | 'lightTextOnly';
