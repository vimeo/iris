// @flow
const fontSizeBasis = 16;

const pixelsToRem = (pixels: number) => {
    return `${pixels / fontSizeBasis}rem`;
};
export default pixelsToRem;
