import React from 'react';
// import { TooltipOverlayProps } from '../TooltipOverlay/TooltipOverlay';

export interface CounterIconProps {
  /**
   * Title of CounterIcon. Appears on hover tooltip.
   */
  counterTitle: string;
  /**
   * Icon element.
   */
  icon: React.ReactNode;
  /**
   * Click event callback
   */
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  /**
   * If present, wraps CounterIcon in an anchor tag.
   */
  href?: string;
  /**
   * Props passed to TooltipOverlay.
   */
  tooltipProps?: {}; // TooltipOverlayProps subset?
}
