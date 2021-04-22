import { ReactNode, ReactElement } from 'react';

import { IrisProps } from '../../../utils';

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
    content?: ReactNode;
    children?: ReactElement;
    /**
     * Choose from predefined sizes or set custom size
     *
     * [default = 'md']
     */
    size?: 'sm' | 'md' | 'lg' | { width: number };
    /**
     * Function called when modal is opened
     */
    onOpen?: VoidFunction;
    /**
     * Function called when modal is closed
     */
    onClose?: VoidFunction;
    /**
     * Function called when the left button is clicked
     */
    onPrev?: VoidFunction;
    /**
     * Function called when the right button is clicked
     */
    onNext?: VoidFunction;
    /**
     * The index of the active modal.
     * Used to determine whether the prev/next buttons should be disabled.
     *
     * [default = 0]
     */
    activeModal?: number;
    /**
     * Total number of modals in carousel.
     * Used to determine whether the prev/next buttons should be disabled.
     *
     * [default = 1]
     */
    total?: number;
  },
  HTMLDivElement
>;
