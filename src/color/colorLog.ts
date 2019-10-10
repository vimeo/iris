import { parseToHsl, readableColor, parseToRgb } from 'polished';

export function colorLog({ color, grade, newColor }) {
  console.log({ color, grade, newColor });

  console.log(
    `%c      ${newColor}                      `,
    `background: ${newColor}; color: ${readableColor(newColor)}`,
  );

  console.log(
    `%c      H ${parseToHsl(newColor).hue.toFixed(2)} S ${parseToHsl(
      newColor,
    ).saturation.toFixed(2)} L ${parseToHsl(
      newColor,
    ).lightness.toFixed(2)}        `,
    `background: ${newColor}; color: ${readableColor(newColor)}`,
  );

  console.log(
    `%c      R ${parseToRgb(newColor).red.toFixed(2)} G ${parseToRgb(
      newColor,
    ).green.toFixed(2)} B ${parseToRgb(newColor).blue.toFixed(
      2,
    )}     `,
    `background: ${newColor}; color: ${readableColor(newColor)}`,
  );
}
