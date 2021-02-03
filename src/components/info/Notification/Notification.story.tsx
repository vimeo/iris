import React, { useState } from 'react';

import { Notification } from './Notification';

import { Button } from '../../index';
import { Header } from '../../../typography';

export default { title: 'Components/Info/Notification' };

export function Common() {
  return (
    <Notification content="Notification!">
      <Button>Show Notification</Button>
    </Notification>
  );
}

export function Automatic() {
  return (
    <Notification automatic content="Notification!">
      <Button>Show Notification</Button>
    </Notification>
  );
}

export function WithAction() {
  return (
    <Notification
      actionLabel="Undo"
      content="Notification!"
      action={{
        label: 'Undo',
        onClick: () =>
          alert('I am a demo action for the Notification'),
      }}
      onComplete={() => console.log('Notification onComplete called')}
    >
      <Button>Show Notification</Button>
    </Notification>
  );
}

export const Controlled = () => <ControlledStory />;
function ControlledStory() {
  const [showing, showingSet] = useState(false);

  function onComplete() {
    console.log('controlled Notification onComplete called');
    showingSet(false);
  }

  return (
    <>
      <Notification
        content="Controlled Notification"
        duration={3000}
        onComplete={onComplete}
        showing={showing}
      />
      <Button onClick={() => showingSet(true)}>
        Show Controlled Notification
      </Button>
    </>
  );
}

export function FancyContent() {
  return (
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
      <Button>Show Notification</Button>
    </Notification>
  );
}
