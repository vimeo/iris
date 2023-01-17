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
  UnitSign,
} from './Slider.style';
import { Handle } from './Handle';

import { white } from '../../../color';
import { Focus, geometry } from '../../../utils';

interface State {
  values: number[];
  trackRect: any;
  focused: boolean;
  dragging: 'startHandle' | 'endHandle';
}

export function Slider({
  disabled,
  editableLabel,
  stickyLabel,
  inputLabelArrows,
  unitSignType,
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
  }, []);

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
        if (dragging === 'startHandle') {
          setStartValue(pos);
        }
        if (dragging === 'endHandle') setEndValue(pos);
      }
    }

    document && document.addEventListener('mousemove', mousemove);
    return () =>
      document &&
      document.removeEventListener('mousemove', mousemove);
  });

  console.log(formatter(formatter(values[0]) + unitSignType));
  return (
    <div
      {...props}
      style={{
        color: white,
        margin: '4rem 0',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Track ref={ref} values={values} id="track-1" range={range}>
        <Handle
          disabled={disabled}
          dragging={dragging}
          editableLabel={editableLabel}
          inputLabelArrows={inputLabelArrows}
          stickyLabel={stickyLabel}
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
          unitSignType={unitSignType}
        />

        {range && (
          <Handle
            disabled={disabled}
            dragging={dragging}
            editableLabel={editableLabel}
            inputLabelArrows={inputLabelArrows}
            stickyLabel={stickyLabel}
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
            unitSignType={unitSignType}
          />
        )}
      </Track>
      {!stickyLabel && (
        <Label focused={focused} stickyLabel={stickyLabel}>
          {editableLabel ? (
            <>
              <LabelInput
                value={values[0]}
                onChange={(e) => {
                  setStartValue(e.target.value);
                }}
                onFocus={setFocus('startHandle')}
                onBlur={setFocus(false)}
                focused={focused === !!'startHandle'}
                stickyLabel={stickyLabel}
                inputLabelArrows={inputLabelArrows}
              />
              <Focus parent={LabelInput} distance={1} />
              <UnitSign>{unitSignType}</UnitSign>
            </>
          ) : (
            <div>
              {formatter(values[0])}
              {unitSignType}
            </div>
          )}
        </Label>
      )}
    </div>
  );
}

interface TrackProps {
  children: ReactNode;
  id?: string;
  ref: Ref<HTMLDivElement>;
  values: number[];
  range: boolean;
}

const Track = forwardRef(
  ({ children, values, range, ...props }: TrackProps, ref) => {
    return (
      <Background range={range} ref={ref} {...props}>
        {children}
        <ActiveRange range={range} values={values}></ActiveRange>
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
