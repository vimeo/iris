import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
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
        onComplete={action('Notification 2 onComplete called')}
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
  ))
  .add('Controlled Notification', () => (
    <Story title="Controlled Notification">
      <ControlledNotification />
    </Story>
  ));

const ControlledNotification = () => {
  const [isShowingNotification, setIsShowingNotification] = useState(
    false,
  );

  return (
    <>
      <Notification
        content="Controlled Notification"
        showing={isShowingNotification}
        duration={3000}
        onComplete={() => {
          action('Controlled Notification onComplete Called')();
          setIsShowingNotification(false);
        }}
      />
      <Button
        onClick={() => {
          setIsShowingNotification(false);
          setTimeout(function() {
            setIsShowingNotification(true);
          }, 100);
        }}
      >
        Show Controlled Notification
      </Button>
    </>
  );
};
