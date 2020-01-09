import { ReactNode, ReactElement } from 'react';

import { IrisProps } from '../../../utils';

export type Props = IrisProps<
  {
    active?: boolean;
    content?: ReactNode;
    children?: ReactElement;
    dismissLabel?: string;
    size?: 'sm' | 'md' | 'lg';
    feature?: boolean;
    onOpen?: VoidFunction;
    onClose?: VoidFunction;
  },
  HTMLDivElement
>;
