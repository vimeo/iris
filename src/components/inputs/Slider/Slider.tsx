import React, {
  useRef,
  useEffect,
  useLayoutEffect,
  useReducer,
  ReactNode,
  forwardRef,
  Ref,
} from 'react';

import { Props } from './Slider.types';
import { initialState, reducer } from './Slider.state';
import {
  Background,
  ActiveRange,
  Label,
  LabelInput,
  SliderContainer,
} from './Slider.style';
import { Handle } from './Handle';

import { geometry, useOutsideClick } from '../../../utils';
import {
  arrowDown,
  arrowLeft,
  arrowRight,
  arrowUp,
  end,
  home,
} from '../../../utils/events/KeyCodes';

interface State {
  values: number[];
  trackRect: any;
  focused:
    | 'startHandle'
    | 'endHandle'
    | 'startInput'
    | 'endInput'
    | null;
  dragging: 'startHandle' | 'endHandle';
}

export function Slider({
  disabled,
  editableLabel,
  formatter = (value) => value as unknown as string,
  initialValues = [0, 100],
  max = 100,
  min = 0,
  onChange,
  onDragEnd,
  range,
  ...props
}: Props) {
  const trackRef = useRef(null);
  const startHandleRef = useRef(null);
  const endHandleRef = useRef(null);

  useOutsideClick([trackRef], () => {
    setFocus(null);
  });

  const [state, dispatch] = useReducer(
    reducer,
    initialState(initialValues)
  );

  const { values, trackRect, focused, dragging }: State = state;

  function dispatchChangeEvent(callback) {
    const currentInput =
      focused === 'startHandle' || focused === 'startInput'
        ? startHandleRef
        : endHandleRef;

    const event = new Event('change', { bubbles: true });
    (currentInput || startHandleRef).current?.dispatchEvent(event);
    callback && callback(event);
  }

  function setDragging(payload) {
    if (payload) setFocus(payload);
    return dispatch({ type: 'SET_DRAGGING', payload });
  }

  function setValue(payload) {
    dispatchChangeEvent(onChange);
    return dispatch({ type: 'SET_VALUES', payload });
  }

  function setFocus(payload) {
    return dispatch({ type: 'SET_FOCUS', payload });
  }

  function setStartValue(value) {
    const newValue = constrain(
      min,
      range ? values[1] - 1 : max
    )(value);
    setValue([newValue, values[1]]);
  }

  function setEndValue(value) {
    const newValue = constrain(values[0] + 1, max)(value);
    setValue([values[0], newValue]);
  }

  useLayoutEffect(() => {
    const { left, width } = geometry(trackRef.current);
    dispatch({ type: 'SET_TRACK_RECT', payload: { left, width } });
  }, [dragging]);

  useEffect(() => {
    const mouseup = () => {
      dispatchChangeEvent(onDragEnd);
      dragging && setDragging(false);
    };

    const keydown = (event) => {
      if (!focused || !isHandleFocused(focused)) return;

      const action =
        focused === 'startHandle' ? setStartValue : setEndValue;
      const currentValue =
        focused === 'startHandle' ? values[0] : values[1];

      switch (event.keyCode) {
        case arrowDown:
        case arrowLeft:
          action(currentValue - 1);
          break;
        case arrowUp:
        case arrowRight:
          action(currentValue + 1);
          break;
        case home:
          action(min);
          break;
        case end:
          action(max);
          break;
      }
    };

    document && document.addEventListener('mouseup', mouseup);
    document && document.addEventListener('keydown', keydown);

    return () => {
      document && document.removeEventListener('mouseup', mouseup);
      document && document.removeEventListener('keydown', keydown);
    };
  });

  useEffect(() => {
    function mousemove(event) {
      if (dragging) {
        const pos = constrainedPosition(event, trackRect, min, max);
        if (dragging === 'startHandle') setStartValue(pos);
        if (dragging === 'endHandle') setEndValue(pos);
      }
    }

    document && document.addEventListener('mousemove', mousemove);
    return () =>
      document &&
      document.removeEventListener('mousemove', mousemove);
  });

  return (
    <SliderContainer
      {...props}
      range={range}
      aria-label="slider"
      role="slider"
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={
        dragging === 'startHandle' ? values[0] : values[1]
      }
    >
      {range && (
        <Label focused={focused === 'startInput'}>
          {editableLabel ? (
            <LabelInput
              value={values[0]}
              disabled={disabled}
              onFocus={() => setFocus('startInput')}
              onChange={(e) =>
                !e.button && setStartValue(parseInt(e.target.value))
              }
              role="start-input"
            />
          ) : (
            formatter(values[0])
          )}
        </Label>
      )}
      <Track
        ref={trackRef}
        values={values}
        id="track-1"
        max={max}
        range={range}
        aria-label="track"
      >
        <Handle
          disabled={disabled}
          handle="startHandle"
          min={min}
          max={max}
          setFocus={setFocus}
          setDragging={setDragging}
          value={values[0]}
          ref={startHandleRef}
        />

        {range && (
          <Handle
            disabled={disabled}
            handle="endHandle"
            min={min}
            max={max}
            setFocus={setFocus}
            setDragging={setDragging}
            value={values[1]}
            ref={endHandleRef}
          />
        )}
      </Track>
      <Label
        focused={focused === (range ? 'endInput' : 'startInput')}
      >
        {editableLabel ? (
          <LabelInput
            value={range ? values[1] : values[0]}
            disabled={disabled}
            onFocus={() =>
              setFocus(range ? 'endInput' : 'startInput')
            }
            onChange={(e) => {
              range
                ? setEndValue(parseInt(e.target.value))
                : setStartValue(parseInt(e.target.value));
            }}
            role={range ? 'end-input' : 'start-input'}
          />
        ) : (
          formatter(range ? values[1] : values[0])
        )}
      </Label>
    </SliderContainer>
  );
}

interface TrackProps {
  children: ReactNode;
  id?: string;
  ref: Ref<HTMLDivElement>;
  values: number[];
  max: number;
  range: boolean;
}

const Track = forwardRef(
  ({ children, values, max, range, ...props }: TrackProps, ref) => {
    return (
      <Background ref={ref} {...props}>
        {children}
        <ActiveRange
          values={values}
          max={max}
          range={range}
        ></ActiveRange>
      </Background>
    );
  }
);

function isHandleFocused(focusedElement: State['focused']) {
  return focusedElement.includes('Handle');
}

function constrainedPosition(event, element, min, max) {
  const left = event.clientX - element.left;
  const pos = Math.round((left / element.width) * max);

  return constrain(min, max)(pos);
}

function constrain(min, max) {
  return (val) => {
    if (val > max) return max;
    if (val < min) return min;
    return val;
  };
}
