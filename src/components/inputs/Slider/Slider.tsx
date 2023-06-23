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
  Hidden,
} from './Slider.style';
import { Handle } from './Handle';

import { white } from '../../../color';
import { Focus, geometry } from '../../../utils';

interface State {
  values: number[];
  trackRect: any;
  focused: string;
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
  const hiddenInputRef = useRef(null);

  const [state, dispatch] = useReducer(
    reducer,
    initialState(initialValues)
  );
  const { values, trackRect, focused, dragging }: State = state;

  function dispatchChangeEvent(callback) {
    const event = new Event('change', { bubbles: true });
    hiddenInputRef?.current?.dispatchEvent(event);
    callback && callback(event);
  }

  function setDragging(payload) {
    setFocus(payload);
    return dispatch({ type: 'SET_DRAGGING', payload });
  }

  function setValue(payload) {
    dispatchChangeEvent(onChange);
    return dispatch({ type: 'SET_VALUES', payload });
  }

  function setFocus(payload) {
    return () => dispatch({ type: 'SET_FOCUS', payload });
  }

  function setStartValue(value) {
    const newValue = constrain(min, max)(value);
    setValue([newValue, values[1]]);
  }

  function setEndValue(value) {
    const newValue = constrain(min, max)(value);
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

    document && document.addEventListener('mouseup', mouseup);
    return () =>
      document && document.removeEventListener('mouseup', mouseup);
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
      style={{ color: white, margin: '1.5rem 0' }}
      aria-label="slider"
      role="slider"
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={
        dragging === 'startHandle' ? values[0] : values[1]
      }
    >
      {range && (
        <Label focused={focused === 'startHandle'}>
          {editableLabel ? (
            <>
              <LabelInput
                value={values[0]}
                disabled={disabled}
                onChange={(e) => setStartValue(e.target.value)}
                onFocus={setFocus('startHandle')}
                onBlur={setFocus(false)}
                role="start-input"
              />
              <Focus parent={LabelInput} distance={1} />
            </>
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
          dragging={dragging}
          handle="startHandle"
          max={max}
          onChange={onChange}
          setDragging={setDragging}
          value={values[0]}
        />

        {range && (
          <Handle
            disabled={disabled}
            dragging={dragging}
            handle="endHandle"
            max={max}
            onChange={onChange}
            setDragging={setDragging}
            value={values[1]}
          />
        )}
      </Track>
      <Label
        focused={focused === (range ? 'endHandle' : 'startHandle')}
      >
        {editableLabel ? (
          <>
            <LabelInput
              value={range ? values[1] : values[0]}
              disabled={disabled}
              onChange={(e) => {
                range
                  ? setEndValue(e.target.value)
                  : setStartValue(e.target.value);
              }}
              onFocus={setFocus(range ? 'endHandle' : 'startHandle')}
              onBlur={setFocus(false)}
              role={range ? 'end-input' : 'start-input'}
            />
            <Focus parent={LabelInput} distance={1} />
          </>
        ) : (
          formatter(range ? values[1] : values[0])
        )}
      </Label>
      <Hidden
        min={min}
        max={max}
        value={dragging === 'startHandle' ? values[0] : values[1]}
        ref={hiddenInputRef}
        readOnly
      />
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
