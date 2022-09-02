import React from 'react';

import { Props } from './TextArea.types';
import { InfoIcon, TextAreaStyled } from './TextArea.style';
import { Wrapper } from '../Wrapper/Wrapper';

import {
  Focus,
  withIris,
  // useIrisError
} from '../../../utils';

export const TextArea = withIris<HTMLInputElement, Props>(
  TextAreaComponent
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
        <Focus parent={TextAreaStyled} distance={1} />
      </div>
    </Wrapper>
  );
}
