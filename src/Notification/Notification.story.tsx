import React from 'react';
import { storiesOf } from '@storybook/react';
import { NotificationNeutral } from '../NotificationNeutral/NotificationNeutral';
import { NotificationSuccess } from '../NotificationSuccess/NotificationSuccess';
import { NotificationWarning } from '../NotificationWarning/NotificationWarning';
import { ParagraphMd } from '../Type';

import { Story } from '../../.storybook/Story';

const componentName = 'Notification';

storiesOf(`components/${componentName}`, module)
  .add('neutral', () => (
    <Story title={componentName} subTitle="neutral">
      <NotificationNeutral
        id="someOptionalId"
        className="someOptionalClass"
      >
        <ParagraphMd>Lorem ipsum dolor sit amet.</ParagraphMd>
      </NotificationNeutral>
    </Story>
  ))
  .add('success', () => (
    <Story title={componentName} subTitle="success">
      <NotificationSuccess
        id="someOptionalId"
        className="someOptionalClass"
      >
        <ParagraphMd>Lorem ipsum dolor sit amet.</ParagraphMd>
      </NotificationSuccess>
    </Story>
  ))
  .add('warning', () => (
    <Story title={componentName} subTitle="warning">
      <NotificationWarning
        id="someOptionalId"
        className="someOptionalClass"
      >
        <ParagraphMd>Lorem ipsum dolor sit amet.</ParagraphMd>
      </NotificationWarning>
    </Story>
  ));
