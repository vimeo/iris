import { ReactNode } from 'react';

import { IrisProps } from '../../utils';

type Fluid = true | { min?: number; max?: number };

export type Props = IrisProps<
  {
    /**
     * Whether the button will fill the width of its container,
     * can also specify the min, max widths in px of when the button will be fluid
     *
     * Example: {{ min: 250, max: 750 }}
     *
     * [default = false]
     */
    fluid?: Fluid;
    /**
     * [default = 'primary']
     */
    format?: 'primary' | 'secondary';
    isActive?: boolean;
    offIcon: ReactNode;
    /**
     * Inactive state text
     */
    offStateText: string;
    onIcon: ReactNode;
    /**
     * Active state text
     */
    onStateText: string;
    style?: { margins?: string };
    /**
     * Action text that appears on hover when button is in active state
     */
    turnOffActionText: string;
    turnOffIcon: ReactNode;
    /**
     * [default = 'outline']
     */
    variant?: 'outline' | 'solid';
  },
  HTMLButtonElement
>;
