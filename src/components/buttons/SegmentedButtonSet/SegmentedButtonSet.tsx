import React, { SFC } from 'react';
import { WrapperStyled } from './SegmentedButtonSetStyled';
import { SegmentedButtonSetProps } from './SegmentedButtonSetTypes';
import { SegmentedButtonSetButton as SegmentedButton } from '../SegmentedButton/SegmentedButton';
import { InputLabel } from '../../Inputs/InputLabel/InputLabel';

const buildOptions = (options, name, format) =>
  options.map((option, i) => (
    <SegmentedButton
      format={format}
      key={`option-${name}-${i}`}
      name={name}
      {...option}
    />
  ));

export const SegmentedButtonSet: SFC<SegmentedButtonSetProps> = ({
  children,
  format = 'light',
  name,
  groupLabel,
  options,
  showGroupLabel = true,
  ...props
}) => (
  <fieldset aria-label={!showGroupLabel ? groupLabel : null}>
    {showGroupLabel && groupLabel && (
      <InputLabel>{groupLabel}</InputLabel>
    )}
    <WrapperStyled {...props}>
      {buildOptions(options, name, format)}
    </WrapperStyled>
  </fieldset>
);
