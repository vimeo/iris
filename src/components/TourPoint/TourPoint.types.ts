import { CSSProperties, ReactNode, MouseEvent } from 'react';
import { PopoverAlign, PopoverPosition } from 'react-tiny-popover';
export interface Props {
  id?: string;
  active?: boolean;
  /**
   * Sets or retrieves a text alternative to the graphic.
   */
  alt?: HTMLImageElement['alt'];
  /**
   * The attachment positon of the TourPoint designated on the
   * TourPoint. This is where the caret will be.
   *
   * [default = 'left']
   */
  attach?: Attach;
  children?: JSX.Element;
  confirmation?: ReactNode;
  content?: ReactNode;
  dismission?: ReactNode;
  onClick?: (event: MouseEvent) => void;
  onClose?: (event: MouseEvent, step: StepEvent) => void;
  /**
   * The address or URL of the a media resource that is to be considered.
   */
  src?: HTMLImageElement['src'];
  step: number;
  style?: CSSProperties;
  title?: HTMLElement['title'];
  getStepsTranslation?: ({
    currentStep,
    totalSteps,
  }: {
    currentStep: number;
    totalSteps: number;
  }) => string;

  /**
   * react-tiny-popover props not yet implemented
   */
  positions?: PopoverPosition[];
  align?: PopoverAlign;
}

type StepEvent = { direction: 'back' | 'next' | 'dismiss' };

export type Attach =
  | 'right'
  | 'right-top'
  | 'right-bottom'
  | 'left'
  | 'left-top'
  | 'left-bottom'
  | 'top'
  | 'top-left'
  | 'top-right'
  | 'bottom'
  | 'bottom-left'
  | 'bottom-right';
