import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Notification } from './Notification';
import { Button } from '../../index';
import { Story } from '../../../storybook';
import { Header } from '../../../typography/Header/Header.style';

storiesOf('Components|informational/', module)
  .add('Notification', () => (
    <Story title="Notification">
      <Notification automatic content="This is Notification 1!">
        <Button>Show Notification 1</Button>
      </Notification>

      <br />
      <br />

      <Notification
        status="negative"
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
  ))
  .add('Notification (fancy)', () => (
    <Story title="Notification">
      <Notification
        automatic
        content={
          <>
            <img
              src="http://placekitten.com/480/120"
              alt=""
              style={{ width: '100%' }}
            />
            <Header size="4" style={{ margin: '1rem auto' }}>
              I am a very fancy tip!
            </Header>
          </>
        }
      >
        <Button>Show Notification 1</Button>
      </Notification>
    </Story>
  ));
