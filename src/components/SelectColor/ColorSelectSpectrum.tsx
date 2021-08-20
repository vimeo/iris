import React, { useRef } from 'react';
import { hslToColorString } from 'polished';

import {
  SpectrumWrapper,
  HueSpectrum,
  Cursor,
} from './ColorSelect.style';

import { throttle } from '../../utils';
import { HSVtoHSL, round } from '../../color';

export function ColorSelectSpectrum({
  colorMeta,
  coords,
  width,
  height,
  dispatch,
  throttleSpeed,
  onChange,
  dragging,
  ...props
}) {
  const clamp = useClamp(width, height);
  const { hue } = colorMeta.HSL;

  const setCoords = useRef(
    throttle(({ nativeEvent: { offsetX, offsetY } }, hue) => {
      const payload = clamp([offsetX, offsetY]);

      dispatch({ type: 'SET_COORDS', payload });
      setHSLfromCoords({ offsetX, offsetY }, hue);
    }, throttleSpeed)
  ).current;

  function setHSLfromCoords(nativeEvent, hue) {
    const { saturation, lightness } = coordsToSL(
      nativeEvent,
      width,
      height
    );

    const payload = safeHSL({ hue, saturation, lightness });
    onChange && onChange(hslToColorString(payload));

    dispatch({ type: 'SET_HSL', payload });
  }

  const doMouseActive =
    (dragging: boolean) =>
    ({ nativeEvent: { offsetX, offsetY } }) => {
      const payload = clamp([offsetX, offsetY]);

      if (dragging) dispatch({ type: 'DRAG_START' });
      else dispatch({ type: 'DRAG_END' });
      dispatch({ type: 'SET_COORDS', payload });

      setHSLfromCoords({ offsetX, offsetY }, hue);
    };

  const onMouseDown = doMouseActive(true);
  const onMouseUp = doMouseActive(false);
  const onMouseLeave = () => dispatch({ type: 'DRAG_END' });
  const onMouseMove = (event) => dragging && persist(event, setLoupe);
  const setLoupe = (event) => setCoords(event, hue);

  return (
    <SpectrumWrapper
      dragging={dragging}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
      {...props}
    >
      <HueSpectrum
        hue={hue}
        onMouseMove={onMouseMove}
        width={width}
        height={height}
        style={{
          background: hslToColorString({
            hue,
            saturation: 1,
            lightness: 0.5,
          }),
        }}
      >
        <Cursor style={cursorPosition(coords)} />
      </HueSpectrum>
    </SpectrumWrapper>
  );
}

const cursorPosition = (coords) => ({
  transform: `translate(${coords[0]}px, ${coords[1]}px)`,
});

function coordsToSL(nativeEvent, width, height) {
  const { saturation, lightness } = HSVtoHSL({
    hue: 360,
    saturation: round(nativeEvent.offsetX / width),
    value: round((nativeEvent.offsetY / height - 1) * -1),
  });

  return { saturation, lightness };
}

function persist(e, fn) {
  e.persist();
  fn(e);
}

function useClamp(width, height) {
  return ([X, Y]) => {
    if (X < 0) X = 0;
    if (Y < 0) Y = 0;
    if (X > width) X = width;
    if (Y > height) Y = height;

    return [X, Y];
  };
}

function safeHSL({ hue, saturation, lightness }) {
  if (hue < 0) hue = 0;
  if (hue > 360) hue = 360;
  if (saturation < 0) saturation = 0;
  if (saturation > 1) saturation = 1;
  if (lightness < 0) lightness = 0;
  if (lightness > 1) lightness = 1;

  return { hue, saturation, lightness };
}
