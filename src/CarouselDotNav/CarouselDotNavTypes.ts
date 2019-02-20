export interface CarouselDotProps {
  isSelected?: boolean;
  theme: 'light' | 'dark';
}

export interface CarouselWrapperProps {
  showIndexedNav: boolean;
}

export interface CarouselDotNavProps {
  a11yGoToSlideText: string;
  a11yNextSlideText: string;
  a11yPrevSlideText: string;
  currentSelectedIndex?: number;
  dotCount: number;
  onDotClick: (index: number) => void;
  onNextClick: () => void;
  onPrevClick: () => void;
  showIndexedNav: boolean;
  theme: 'light' | 'dark';
}
