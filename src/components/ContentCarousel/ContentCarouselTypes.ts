import React from 'react';
export interface ContentCarouselState {
  currentSlideIndex: number;
}

export interface ContentCarouselProps {
  /**
   * a required translated string that will be suffixed with the slide number. Example: "Go to slide" will become"Go to slide 1"
   */
  a11yGoToSlideText: string;
  /**
   * a required translated string that means "Next"
   */
  a11yNextSlideText: string;
  /**
   * a required translated string that means "Previous
   */
  a11yPrevSlideText: string;
  /**
   * Setting a number of milliseconds will turn on autoplay at that interval
   */
  autoplayInterval?: number;
  /**
   * Setting a zero-indexed number will start the slideshow on that slide.
   */
  initialSlide?: number;
  /**
   * Should the slideshow repeat infinitely? Defaults to true.
   */
  infinite?: boolean;
  /**
   * Callback when the SlideChanges, returns the new zero-based index as an argument
   */
  onSlideChange?: (newSlideIndex: number) => void;
  /**
   * number of milliseconds the transition should take. Defaults to 300
   */
  speed?: number;
  /**
   * should the dot navigation be shown?
   */
  showIndexedNav?: boolean;
  /**
   * Set to dark if using a dark theme. Defaults to light.
   */
  theme?: 'light' | 'dark';
}

export interface ContentCarouselPropsAll
  extends ContentCarouselProps,
    React.HTMLProps<HTMLDivElement> {}
