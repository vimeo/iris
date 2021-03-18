import { RefObject, MouseEventHandler, CSSProperties } from 'react';

export type Point = number;
export type Coordinates = [Point, Point];

export type Attach = [Coordinates, Coordinates];
export type AttachAlias =
  | 'top'
  | 'topRight'
  | 'right'
  | 'bottomRight'
  | 'bottom'
  | 'bottomLeft'
  | 'left'
  | 'topLeft';

export type SimpleAnimation = {
  enter: CSSProperties;
  exit: CSSProperties;
};

export interface PortalConfig {
  anchorToWindow?: boolean;
  animation?: SimpleAnimation;
  attach?: Attach | AttachAlias;
  forceActive?: boolean | null | undefined;
  margin?: number;
  onClose?: MouseEventHandler;
  onOpen?: MouseEventHandler;
  onClick?: MouseEventHandler;
  screen?: boolean;
  trigger?: 'click' | 'hover';
}

export const ANCHOR_POINTS = [
  'top',
  'topRight',
  'right',
  'bottomRight',
  'bottom',
  'bottomLeft',
  'left',
  'topLeft',
] as const;

export interface AnchorProps {
  onClick?: MouseEventHandler;
  onMouseEnter?: MouseEventHandler;
  onMouseLeave?: MouseEventHandler;
  ref: RefObject<HTMLElement>;
}
