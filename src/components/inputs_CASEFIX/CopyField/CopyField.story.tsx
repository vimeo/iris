import React from 'react';
import { storiesOf } from '@storybook/react';
import { CopyField } from './CopyField';

import { Story } from '../../../storybook';
import { select, text } from '@storybook/addon-knobs';
const componentName = 'Copy Field';

const sizes = {
  md: 'md',
  lg: 'lg',
};

const formats = {
  strong: 'strong',
  neutral: 'neutral',
  subtle: 'subtle',
};

storiesOf(`components|Inputs`, module).add('Copy Field', () => (
  <Story title={componentName}>
    Try the knobs!
    <CopyField
      format={select('format', formats, 'strong')}
      id="copyField1"
      label="Copy URL"
      stringToCopy={text('stringToCopy', 'http://www.vimeo.com')}
      successMessage={text('successMessage', 'Copied!')}
      tooltipString={text(
        'tooltipString',
        'Copy this URL to the clipboard',
      )}
      size={select('size', sizes, 'md')}
    >
      {text('children', 'Copy feed URL')}
    </CopyField>
    <br />
    <hr />
    <br />
    <CopyField
      format={select('format', formats, 'strong')}
      id="copyField2"
      label="Copy URL"
      stringToCopy={text('stringToCopy', 'http://www.vimeo.com')}
      successMessage={text('successMessage', 'Copied!')}
      tooltipString={text(
        'tooltipString',
        'Copy this URL to the clipboard',
      )}
      size={select('size', sizes, 'md')}
    />
    <br />
  </Story>
));
