import {
  Dispatch,
  HTMLProps,
  MouseEventHandler,
  ReactElement,
  SetStateAction,
} from 'react';

import { IrisProps, MinorComponent } from '../../utils';

export type ActiveStyles = Record<string, string>;

export type Props = IrisProps<{
  /**
   * [default = 'left']
   */
  attach?: 'left' | 'right';
  children: ReactElement[];
  onOpen?: (active: string) => void;
  onClose?: (active: string) => void;
  state?: [string, Dispatch<SetStateAction<string>>];
  activeStyles?: ActiveStyles;
}>;

export interface ItemPropsExtrinsic {
  children?: ReactElement;
  icon?: ReactElement;
  label: string;
  labelAsTooltip?: boolean;
  onClick?: MouseEventHandler;
}

export type ItemPropsIntrinsic = ItemPropsExtrinsic & {
  attach: Props['attach'];
  onClick: MouseEventHandler;
  isActive?: boolean;
  activeStyles?: ActiveStyles;
};

export interface Minors {
  Item: MinorComponent<ItemPropsExtrinsic>;
  Break: MinorComponent<HTMLProps<HTMLDivElement>>;
}
