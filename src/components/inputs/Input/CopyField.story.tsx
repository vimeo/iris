import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';

import { CopyField } from './CopyField';

import { Story } from '../../../storybook';

const componentName = 'Copy Field';

const sizes = {
  md: 'md',
  lg: 'lg',
};

const formats = {
  primary: 'primary',
  alternative: 'alternative',
  soft: 'soft',
};

storiesOf(`components|inputs`, module).add('Copy Field', () => (
  <Story title={componentName}>
    <CopyField
      format={select('format', formats, 'primary')}
      id="copyField1"
      label="Copy URL 1"
      value={text('value', 'http://www.vimeo.com')}
      messages={{ success: text('successMessage', 'Copied!') }}
      size={select('size', sizes, 'md')}
    >
      {text('children', 'Copy feed URL')}
    </CopyField>
    <br />
    <br />
    <CopyField
      format="alternative"
      id="copyField2"
      label="Copy URL 2"
      value="https://vimeo.com/for-hire"
      messages={{ success: 'Copied!' }}
      size="lg"
    />
    <br />
  </Story>
));
