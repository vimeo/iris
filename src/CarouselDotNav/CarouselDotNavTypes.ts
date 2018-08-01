export interface CarouselDotProps extends React.HTMLProps < HTMLButtonElement > {
    isSelected?: boolean;
    theme: 'light' | 'dark';
}

export interface CarouselWrapperProps extends React.HTMLProps < HTMLDivElement > {
    showIndexedNav: boolean;
}

export interface CarouselDotNavProps extends React.HTMLProps < HTMLDivElement > {
    a11yGoToSlideText: string;
    a11yNextSlideText: string;
    a11yPrevSlideText: string;
    currentSelectedIndex?: number;
    dotCount: number;
    onDotClick: (index : number) => void;
    onNextClick: () => void;
    onPrevClick: () => void;
    showIndexedNav: boolean;
    theme: 'light' | 'dark';
};
