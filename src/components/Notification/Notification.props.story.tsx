import React, { useState } from 'react';

import { Notification } from './Notification';

import { Button } from '../Button/Button';

export default {
  title: 'components/Notification/props',
  component: Notification,
  argTypes: {
    onComplete: { action: 'Notification onComplete called' },
  },
};

export function Automatic() {
  return (
    <Notification automatic content="Notification!">
      <Button>Show Notification</Button>
    </Notification>
  );
}

export function Action() {
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
