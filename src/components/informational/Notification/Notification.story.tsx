import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Notification } from './Notification';
import { Button } from '../../index';
import { Story } from '../../../storybook';

storiesOf('Components|informational/', module).add(
  'Notification',
  () => (
    <Story title="Notification">
      <Notification automatic content="This is Notification 1!">
        <Button>Show Notification 1</Button>
      </Notification>

      <br />
      <br />

      <Notification
        format="warning"
        actionLabel="Undo"
        content="This is Notification 2!"
        action={{
          label: 'Undo',
          onClick: () =>
            alert('I am a demo action for Toastification 2'),
        }}
      >
        <Button>Show Notification 2</Button>
      </Notification>
    </Story>
  ),
);
