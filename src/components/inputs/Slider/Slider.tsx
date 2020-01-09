import React, {
  useRef,
  useEffect,
  useLayoutEffect,
  useReducer,
  ReactNode,
  forwardRef,
  Ref,
} from 'react';

import { initialState, reducer } from './Slider.state';
import { Background, ActiveRange } from './Slider.style';
import { Handle } from './Handle';

import { white } from '../../../color';
import { geometry } from '../../../utils';

interface Props {
  disabled?: boolean;
  editableLabel?: boolean;
  formatter?: (value: number) => string;
  initialValues?: number[];
  max?: number;
  min?: number;
  onChange?: (formattedValue: number | string) => number | string;
  range?: boolean;
}

interface State {
  values: number[];
  trackRect: any;
  focused: boolean;
  dragging: 'startHandle' | 'endHandle';
}

export function Slider({
  disabled,
  editableLabel,
  formatter = value => (value as unknown) as string,
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
    initialState(initialValues),
  );
  const { values, trackRect, focused, dragging }: State = state;

  function setDragging(payload) {
    setFocus(payload);
    return dispatch({
      type: 'SET_DRAGGING',
      payload,
    });
  }

  function setValue(payload) {
    return dispatch({
      type: 'SET_VALUES',
      payload,
    });
  }

  function setFocus(payload) {
    return () => dispatch({ type: 'SET_FOCUS', payload });
  }

  function setStartValue({ target: { value } }) {
    const newValue = constrain(min, max)(value);
    onChange && onChange(formatter(newValue));

    return setValue([newValue, values[1]]);
  }

  function setEndValue({ target: { value } }) {
    const newValue = constrain(min, max)(value);
    onChange && onChange(formatter(newValue));

    return setValue([values[0], newValue]);
  }

  useLayoutEffect(() => {
    const { left, width } = geometry(ref);
    dispatch({ type: 'SET_TRACK_RECT', payload: { left, width } });
  }, []);

  useEffect(() => {
    const mouseup = () => dragging && setDragging(false);

    document.addEventListener('mouseup', mouseup);
    return () => document.removeEventListener('mouseup', mouseup);
  });

  useEffect(() => {
    function mousemove(event) {
      if (dragging) {
        const pos = constrainedPosition(event, trackRect);

        if (dragging === 'startHandle')
          dispatch({ type: 'SET_VALUES', payload: [pos, values[1]] });

        if (dragging === 'endHandle')
          dispatch({ type: 'SET_VALUES', payload: [values[0], pos] });
      }
    }

    document.addEventListener('mousemove', mousemove);
    return () => document.removeEventListener('mousemove', mousemove);
  });

  return (
    <div {...props} style={{ color: white, margin: '4rem 0' }}>
      <Track ref={ref} values={values} id="track-1">
        <Handle
          disabled={disabled}
          dragging={dragging}
          editableLabel={editableLabel}
          formatter={formatter}
          focused={focused}
          handle="startHandle"
          max={max}
          min={min}
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
            formatter={formatter}
            focused={focused}
            handle="endHandle"
            max={max}
            min={min}
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
  },
);

function constrainedPosition(event, element) {
  const left = event.clientX - element.left;
  const pos = Math.round((left / element.width) * 100);

  return constrain(0, 100)(pos);
}

function constrain(min, max) {
  return val => {
    if (val > max) return max;
    if (val < min) return min;
    return val;
  };
}
