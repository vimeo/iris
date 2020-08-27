import React from 'react';

import styled, { css } from 'styled-components';
import { rem } from 'polished';

import { Props } from './TextArea.types';

import { slate, blue, red } from '../../../color';
import {
  withIris,
  // useIrisError
} from '../../../utils';
import { Wrapper } from '../Wrapper/Wrapper';
import { inputColors } from '../Shared';
import { CircleInfoSmall } from '../../../icons';

export const TextArea = withIris<HTMLInputElement, Props>(
  TextAreaComponent,
);

function TextAreaComponent({
  disabled,
  errorMsg,
  forwardRef,
  format,
  messages,
  helperMsg,
  id,
  label,
  preMessage,
  ...props
}) {
  // const { irisError } = useIrisError(
  //   props,
  //   TextArea,
  //   `\`value="${props.value}"\` was specified. Did you mean to use \`defaultValue="${props.value}"\``,
  //   !props.value,
  // );

  return (
    <Wrapper
      disabled={disabled}
      label={label}
      messages={messages}
      status={format}
      // {...irisError}
    >
      <div style={{ position: 'relative' }}>
        <TextAreaStyled
          id={id}
          aria-label={label}
          aria-invalid={format === 'negative'}
          disabled={disabled}
          hasIcon={format === 'negative'}
          format={format}
          ref={forwardRef}
          {...props}
        />
        {format === 'negative' ? <InfoIcon /> : null}
      </div>
    </Wrapper>
  );
}

const TextAreaStyled = styled.textarea<any>`
  display: block;
  width: 100%;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  padding: 1rem;
  font-size: ${rem(14)};
  line-height: 1.25rem;
  height: auto;
  border-radius: 0.2rem;
  ${inputColors};

  &:placeholder {
    color: ${slate(200)};
  }

  &:focus {
    outline: none;
    border: 1.5px solid ${blue(500)};
  }

  ${props =>
    props.hasIcon &&
    css`
      padding-left: 2.25rem;
    `};
`;

const InfoIcon = styled(CircleInfoSmall)`
  position: absolute;
  top: ${rem(18)};
  left: ${rem(10)};
  width: ${rem(20)};
  height: ${rem(20)};

  * {
    fill: ${red(500)};
  }
`;
