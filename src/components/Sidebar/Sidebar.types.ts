import {
  Dispatch,
  HTMLProps,
  MouseEventHandler,
  ReactElement,
  SetStateAction,
} from 'react';

import { IrisProps, MinorComponent } from '../../utils';

export type Props = IrisProps<{
  /**
   * [default = 'left']
   */
  attach?: 'left' | 'right';
  children: ReactElement[];
  onOpen?: (active: string) => void;
  onClose?: (active: string) => void;
  state?: [string, Dispatch<SetStateAction<string>>];
}>;

export interface ItemPropsExtrinsic {
  children?: ReactElement;
  icon?: ReactElement;
  label: string;
  onClick?: MouseEventHandler;
  tourPoint?: any;
}

export type ItemExtrinsic = (
  props: ItemPropsExtrinsic
) => JSX.Element;

export type ItemPropsIntrinsic = ItemPropsExtrinsic & {
  attach: Props['attach'];
  onClick: MouseEventHandler;
  tourPoint?: any;
};

export interface Minors {
  Item: MinorComponent<ItemPropsExtrinsic>;
  Break: MinorComponent<HTMLProps<HTMLDivElement>>;
}
