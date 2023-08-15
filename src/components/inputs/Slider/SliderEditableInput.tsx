import React from 'react';

import {
  ArrowsContainer,
  LabelInput,
  LabelInputContainer,
  SliderInputArrowStyled,
} from './Slider.style';

export const SliderEditableInput = ({
  disabled,
  onArrowUpClick,
  onArrowDownClick,
  onChange,
  onFocus,
  role,
  value,
}) => {
  return (
    <LabelInputContainer>
      <LabelInput
        value={value}
        disabled={disabled}
        onFocus={onFocus}
        onChange={onChange}
        role={role}
      />
      <ArrowsContainer>
        <SliderInputArrowStyled
          role="arrow-up"
          onClick={onArrowUpClick}
        />
        <SliderInputArrowStyled
          role="arrow-down"
          onClick={onArrowDownClick}
          style={{
            transform: 'rotate(180deg)',
          }}
        />
      </ArrowsContainer>
    </LabelInputContainer>
  );
};
