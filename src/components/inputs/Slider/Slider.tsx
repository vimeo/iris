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
import { Background, ActiveRange } from './Slider.style';
import { Handle } from './Handle';

import { white } from '../../../color';
import { geometry } from '../../../utils';

interface State {
  values: number[];
  trackRect: any;
  focused: boolean;
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
  range,
  ...props
}: Props) {
  const ref = useRef(null);
  const [state, dispatch] = useReducer(
    reducer,
    initialState(initialValues)
  );
  const { values, trackRect, focused, dragging }: State = state;

  function setDragging(payload) {
    setFocus(payload);
    return dispatch({ type: 'SET_DRAGGING', payload });
  }

  function setValue(payload) {
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
    const { left, width } = geometry(ref.current);
    dispatch({ type: 'SET_TRACK_RECT', payload: { left, width } });
  }, [dragging]);

  useEffect(() => {
    const mouseup = () => dragging && setDragging(false);

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
    <div {...props} style={{ color: white, margin: '4rem 0' }}>
      <Track ref={ref} values={values} id="track-1">
        <Handle
          disabled={disabled}
          dragging={dragging}
          editableLabel={editableLabel}
          focused={focused}
          formatter={formatter}
          handle="startHandle"
          max={max}
          min={min}
          onChange={onChange}
          setDragging={setDragging}
          setFocus={setFocus}
          setValue={setStartValue}
          value={values[0]}
        />

        {range && (
          <Handle
            disabled={disabled}
            dragging={dragging}
            editableLabel={editableLabel}
            focused={focused}
            formatter={formatter}
            handle="endHandle"
            max={max}
            min={min}
            onChange={onChange}
            setDragging={setDragging}
            setFocus={setFocus}
            setValue={setEndValue}
            value={values[1]}
          />
        )}
      </Track>
    </div>
  );
}

interface TrackProps {
  children: ReactNode;
  id?: string;
  ref: Ref<HTMLDivElement>;
  values: number[];
}

const Track = forwardRef(
  ({ children, values, ...props }: TrackProps, ref) => {
    return (
      <Background ref={ref} {...props}>
        {children}
        <ActiveRange values={values}></ActiveRange>
      </Background>
    );
  }
);

function constrainedPosition(event, element, min, max) {
  const left = event.clientX - element.left;
  const pos = Math.round((left / element.width) * 100);

  return constrain(min, max)(pos);
}

function constrain(min, max) {
  return (val) => {
    if (val > max) return max;
    if (val < min) return min;
    return val;
  };
}
