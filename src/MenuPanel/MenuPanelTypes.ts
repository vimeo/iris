import React from 'react';

export interface MenuPanelProps {
    /**
     * In what direction should the menu panel try to open? Default: center
     */
    alignment?: 'left' | 'right' | 'center';
    /**
     * Color scheme
     */
    theme?: 'light' | 'dark';
    /**
     * Href applies to wrapping anchor tag
     */
    href?: string;
    /**
     * Suppress Outline on wrapping anchor focus
     */
    hideOutline?: boolean;
    /**
     * Control open/close with props
     */
    isShowing?: boolean;
    /**
     * Internal content of menu panel
     */
    menuContent: React.ReactNode;
    /**
     * Callback when the menu closes
     */
    onClose?: () => void;
    /**
     * Callback when the menu opens
     */
    onOpen?: () => void;
    /**
     * Used to add a class to the panel element
     */
    panelClassName?: string;
    /**
     * Size of the panel
     */
    size: 'sm' | 'md' | 'lg';
    /**
     * Use isFluid if you need to wrap a fullwidth element (e.g. button)
     */
    isFluid?: boolean;
    /**
     * Turn off build in open and close controls, use when the panel is entirely controlled.
     */
    isControlled?: boolean;
    /**
     * Normally we want to refocus on the element that opened the menu panel when the panel closes. Set to false if that is not desired. Defaults to true.
     */
    shouldRefocusTriggerOnClose?: boolean;
    /**
     * Manually set zIndex of the component
     */
    zIndexOverride?: number;
}

export interface MenuPanelState {
    isShowing: boolean;
}

export interface MenuPanelStyledProps {
    theme?: 'light' | 'dark';
    hideOutline?: boolean;
    isShowing?: boolean;
    size: 'sm' | 'md' | 'lg';
    isFluid?: boolean;
    zIndexOverride?: number;
}

export interface TriggerWrapperStyledProps
    extends React.HTMLProps<HTMLAnchorElement> {
    hideOutline?: boolean;
    isFluid?: boolean;
}

export interface WrapperStyledProps {
    isFluid?: boolean;
}

export interface TetherComponentProps {
    attachment?: string;
    targetAttachment?: string;
    constraints?: any;
    enabled?: boolean;
    offset?: string;
}
