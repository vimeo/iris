import React, { SFC } from 'react';
import { CarouselDotNavProps } from './CarouselDotNavTypes';
import {
    DotStyled,
    WrapperStyled,
    VisuallyHiddenContent,
} from './CarouselDotNavStyled';
import { KEY_CODES } from '../Legacy/KEY_CODES';

export const CarouselDotNav: SFC<CarouselDotNavProps> = ({
    a11yGoToSlideText,
    a11yNextSlideText,
    a11yPrevSlideText,
    currentSelectedIndex = 0,
    dotCount,
    onDotClick,
    onNextClick,
    onPrevClick,
    showIndexedNav,
    theme,
    ref: _,
    ...props
}) => {
    const handleDotClick = event => {
        if (typeof onDotClick === 'function') {
            const index = parseInt(event.target.getAttribute('data-index'), 10);
            onDotClick(index);
        }
    };

    const handleKeyUp = (event: React.KeyboardEvent<HTMLButtonElement>) => {
        const keyCode = event.keyCode;

        if (keyCode === KEY_CODES.arrowLeft) {
            if (typeof onPrevClick === 'function') {
                onPrevClick();
            }
        } else if (keyCode === KEY_CODES.arrowRight) {
            if (typeof onNextClick === 'function') {
                onNextClick();
            }
        }
    };

    const handleNextClick = () => {
        if (typeof onNextClick === 'function') {
            onNextClick();
        }
    };

    const handlePrevClick = () => {
        if (typeof onPrevClick === 'function') {
            onPrevClick();
        }
    };

    const dots = [];

    for (let i = 0; i < dotCount; i++) {
        dots.push(
            <DotStyled
                key={`dot${i}`}
                data-index={i}
                isSelected={i === currentSelectedIndex}
                onClick={handleDotClick}
                onKeyUp={handleKeyUp}
                theme={theme}
            >
                <VisuallyHiddenContent>
                    {`${a11yGoToSlideText} ${i + 1}`}
                </VisuallyHiddenContent>
            </DotStyled>,
        );
    }

    return (
        <WrapperStyled showIndexedNav={showIndexedNav} {...props}>
            <VisuallyHiddenContent>
                <button onClick={handlePrevClick} onKeyUp={handleKeyUp}>
                    {a11yPrevSlideText}
                </button>
            </VisuallyHiddenContent>
            {dots}
            <VisuallyHiddenContent>
                <button onClick={handleNextClick} onKeyUp={handleKeyUp}>
                    {a11yNextSlideText}
                </button>
            </VisuallyHiddenContent>
        </WrapperStyled>
    );
};
