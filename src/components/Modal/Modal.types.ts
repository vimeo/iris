import { ReactNode, ReactElement, MouseEventHandler } from 'react';

import { IrisProps } from '../../utils';

export type Props = IrisProps<
  {
    /**
     * The modal's open/close state can be controlled with this prop.
     * If not defined, it will use the internal state.
     */
    active?: boolean;
    /**
     * The `content` defines what will appear inside the portal component,
     * whereas the `children` defines what the portal component is anchored to.
     */
    children?: ReactElement;
    content?: ReactNode;
    dismissLabel?: string;
    /**
     * Whether the modal should be featured in lower right corner of viewport.
     *
     * [default = false]
     */
    feature?: boolean;
    onOpen?: VoidFunction;
    onClose?: VoidFunction;
    /**
     * Places a translucent screen behind the Modal and above background
     * content to prevent user interaction outside the modal.
     *
     * [default = true]
     */
    screen?: boolean;
    /**
     * [default = 'md']
     */
    size?: 'sm' | 'md' | 'lg';
    /**
     * The 'backdrop' object parameter contains options to configure backdrop styles and events.
     */
    backdrop?: {
      blur?: number;
      backgroundColor?: string;
      onClick?: MouseEventHandler;
    };
  },
  HTMLDivElement
>;
