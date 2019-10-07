import React, { ReactNode, SFC } from 'react';

import { InputMessage } from '../InputMessage/InputMessage';
import { SlideUpDown } from '../../../motion/SlideUpDown/SlideUpDown';

interface Props {
  errorMsg?: ReactNode;
  helperMsg?: ReactNode;
  format?: 'bottom' | 'sublabel';
  theme?: 'default' | 'light' | 'dark';
}

export const InputMessageArea: SFC<Props> = ({
  errorMsg,
  format = 'bottom',
  helperMsg,
  theme,
  ...props
}) => (
  <div
    {...props}
    style={{ marginBottom: format === 'sublabel' && '0.5rem' }}
  >
    <SlideUpDown isHidden={!helperMsg}>
      <InputMessage format="negative" theme={theme}>
        {errorMsg}
      </InputMessage>
    </SlideUpDown>
    <SlideUpDown isHidden={!errorMsg}>
      <InputMessage format="helper" theme={theme}>
        {helperMsg}
      </InputMessage>
    </SlideUpDown>
  </div>
);
