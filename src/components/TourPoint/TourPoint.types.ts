import {
  CSSProperties,
  ReactElement,
  ReactNode,
  MouseEvent,
} from 'react';

export interface Props {
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
  children?: ReactElement;
  confirmation?: ReactNode;
  content?: ReactNode;
  dismission?: ReactNode;
  onClose?: (event: MouseEvent, step: StepEvent) => void;
  /**
   * The address or URL of the a media resource that is to be considered.
   */
  src?: HTMLImageElement['src'];
  step: number;
  style?: CSSProperties;
  title?: HTMLElement['title'];
  getStepsTranslation?: ({
    step,
    steps,
  }: {
    step: number;
    steps: number;
  }) => string;
}

type StepEvent = { direction: 'back' | 'next' | 'dismiss' };

type Attach =
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
