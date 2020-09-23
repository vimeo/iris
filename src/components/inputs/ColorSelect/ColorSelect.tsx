import React, {
  useReducer,
  useRef,
  useState,
  useLayoutEffect,
  useEffect,
} from 'react';
import { parseToHsl, hslToColorString } from 'polished';

import {
  Wrapper,
  SpectrumWrapper,
  HueSpectrum,
  Cursor,
  Dot,
} from './ColorSelect.style';
import { Props } from './ColorSelect.types';
import { reducer } from './ColorSelect.state';

import { Input } from '../Input/Input';
import { InnerButton } from '../InnerButton';
import { HueSlider } from './Slider';
import { ColorInputs } from './ColorInputs';
import { Presets, PresetsProps } from './Presets';

import { PopOver } from '../../../layout';
import {
  withIris,
  geometry,
  centered,
  MinorComponent,
  throttle,
} from '../../../utils';
import { HSVtoHSL, colorSpaces, round } from '../../../color';

export const ColorSelect = withIris<
  HTMLInputElement,
  Props,
  { Presets: MinorComponent<PresetsProps> }
>(ColorSelectComponent);

ColorSelect.Presets = Presets;

function ColorSelectComponent({
  height = 360,
  initialColor = '#F00',
  label,
  onChange,
  onClose,
  onOpen,
  resetColor = initialColor,
  resetLabel,
  size,
  throttleSpeed = 24,
  value,
  width = 360,
  attach = 'bottom',
  ...props
}: Props) {
  const defaultColor = parseToHsl(initialColor);
  const initialColors = colorSpaces(defaultColor);

  const initialState = {
    open: false,
    dragging: false,
    coords: [width, 0],
    HSL: defaultColor,
    ...initialColors,
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const { open, dragging, coords, HSL, HSV, RGB, HEX } = state;

  const ref = useRef(null);
  const [inputHeight, setInputHeight] = useState(0);
  useLayoutEffect(
    () => setInputHeight(geometry(ref.current).height),
    []
  );
  useEffect(() => {
    dispatch({ type: 'SET_HEX', payload: value });
  }, [value]);

  function clamp([X, Y]) {
    if (X < 0) X = 0;
    if (Y < 0) Y = 0;
    if (X > width) X = width;
    if (Y > height) Y = height;
    return [X, Y];
  }

  const toggle = () => {
    open && onClose && onClose();
    !open && onOpen && onOpen();
    dispatch({ type: 'TOGGLE' });
  };

  const setHue = useRef(
    throttle((e) => {
      const newHSL = {
        ...HSL,
        hue: parseInt(e.target.value, 10) / 100,
      };

      if (HSL.hue !== newHSL.hue) {
        onChange && onChange(hslToColorString(newHSL));
        dispatch({ type: 'SET_HSL', payload: newHSL });
      }
    }, throttleSpeed / 4)
  ).current;

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

    const payload = { hue, saturation, lightness };
    onChange && onChange(hslToColorString(payload));
    dispatch({ type: 'SET_HSL', payload });
  }

  const reset = (e) => {
    e.stopPropagation();
    const payload = [width, 0];
    onChange && onChange(hslToColorString(parseToHsl(resetColor)));
    dispatch({ type: 'SET_COORDS', payload });
    dispatch({ type: 'SET_HSL', payload: parseToHsl(resetColor) });
  };

  const doMouseActive = (dragging: boolean) => ({
    nativeEvent: { offsetX, offsetY },
  }) => {
    const payload = clamp([offsetX, offsetY]);

    if (dragging) dispatch({ type: 'DRAG_START' });
    else dispatch({ type: 'DRAG_END' });
    dispatch({ type: 'SET_COORDS', payload });

    setHSLfromCoords({ offsetX, offsetY }, HSL.hue);
  };

  const doMouseMove = (e) => dragging && persist(e, setLoupe);
  const setLoupe = (e) => setCoords(e, HSL.hue);

  return (
    <PopOver
      attach={attach}
      content={
        <Wrapper width={width}>
          <SpectrumWrapper
            onMouseDown={doMouseActive(true)}
            onMouseUp={doMouseActive(false)}
            onMouseLeave={() => dispatch({ type: 'DRAG_END' })}
            {...props}
          >
            <HueSpectrum
              hue={HSL.hue}
              onMouseMove={doMouseMove}
              width={width}
              height={height}
              style={{
                background: hslToColorString({
                  hue: HSL.hue,
                  saturation: 1,
                  lightness: 0.5,
                }),
              }}
            >
              <Cursor style={cursorPosition(coords)} />
            </HueSpectrum>
          </SpectrumWrapper>

          <HueSlider
            onMouseDown={() =>
              !dragging && dispatch({ type: 'DRAG_START' })
            }
            onMouseUp={() =>
              dragging && dispatch({ type: 'DRAG_END' })
            }
            onChange={setHue}
            HEX={HEX}
            width={width}
            value={HSL.hue * 100}
          />
          <ColorInputs
            dispatch={dispatch}
            HEX={HEX}
            HSL={HSL}
            RGB={RGB}
            HSV={HSV}
            onChange={onChange}
          />
        </Wrapper>
      }
    >
      <div style={{ position: 'relative' }}>
        <Input
          value={HEX}
          style={{ paddingLeft: '2.25rem' }}
          onClick={toggle}
          size={size}
          type="text"
          ref={ref}
          label={label}
          onChange={(e) => {
            onChange && onChange(e.target.value);
            dispatch({
              type: 'SET_HEX',
              payload: e.target.value,
            });
          }}
        >
          <Dot style={{ background: HEX }} />
          {resetLabel && HEX !== resetColor.toLowerCase() && (
            <InnerButton
              format="basic"
              variant="minimalTransparent"
              size={size}
              onClick={reset}
              height={inputHeight}
            >
              <span style={centered}>{resetLabel}</span>
            </InnerButton>
          )}
        </Input>
      </div>
    </PopOver>
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
