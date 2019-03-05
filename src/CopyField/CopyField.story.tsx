import React from 'react';
import { storiesOf } from '@storybook/react';
import { CopyField } from './CopyField';

import { Story } from '../../.storybook/ui/Story';

const componentName = 'Copy Field';

storiesOf(`components/`, module).add('Copy Field', () => (
  <Story title={componentName}>
    <CopyField
      buttonFormat="strong"
      id="copyField1"
      label="Copy URL"
      stringToCopy="http://www.vimeo.com"
      successMessage="Copied!"
      tooltipString="Copy this URL to the clipboard"
    />
    <br />
    <CopyField
      buttonFormat="neutral"
      id="copyField2"
      label="Copy URL"
      stringToCopy="http://www.vimeo.com"
      successMessage="Copied!"
      tooltipString="Copy this URL to the clipboard"
    />
    <br />
    <CopyField
      buttonFormat="subtle"
      id="copyField2"
      label="Copy URL"
      stringToCopy="http://www.vimeo.com"
      successMessage="Copied!"
      tooltipString="Copy this URL to the clipboard"
    />
    <br />
    <hr />
    <br />
    <CopyField
      buttonFormat="strong"
      id="copyField1"
      label="Copy URL"
      size="lg"
      stringToCopy="http://www.vimeo.com"
      successMessage="Copied!"
      tooltipString="Copy this URL to the clipboard"
    />
    <br />
    <CopyField
      buttonFormat="neutral"
      id="copyField2"
      label="Copy URL"
      size="lg"
      stringToCopy="http://www.vimeo.com"
      successMessage="Copied!"
      tooltipString="Copy this URL to the clipboard"
    />
    <br />
    <CopyField
      buttonFormat="subtle"
      id="copyField2"
      label="Copy URL"
      size="lg"
      stringToCopy="http://www.vimeo.com"
      successMessage="Copied!"
      tooltipString="Copy this URL to the clipboard"
    />
    <br />
  </Story>
));
