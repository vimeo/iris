import React, { SFC } from 'react';
import { UploadCloud } from '../../../icons';
import { ButtonFileUploadWrapper } from '../ButtonFileUploadWrapper/ButtonFileUploadWrapper';
import {
  LabelStyled,
  SpanStyled,
} from './ButtonFileUploadIconOnlyStyled';
import { BFUIOFocus as FocusOutline } from './ButtonFileIploadIconOnlyFocus';

interface Props {
  autoSpacingHorizontal?: boolean;
  className?: string;
  format?: 'dark' | 'alternative' | 'light';
  id: string;
  name?: string;
  label: string;
  size?: 'sm' | 'md';
}

export const ButtonFileUploadIconOnly: SFC<Props> = ({
  autoSpacingHorizontal = true,
  className,
  format = 'dark',
  id,
  name,
  label,
  size = 'sm',
  ...props
}) => (
  <ButtonFileUploadWrapper
    className={className}
    id={id}
    name={name}
    inputElementProps={props}
  >
    <LabelStyled htmlFor={id} size={size} inputElementProps={props}>
      <SpanStyled>
        <UploadCloud />
      </SpanStyled>
    </LabelStyled>
    <FocusOutline />
  </ButtonFileUploadWrapper>
);
