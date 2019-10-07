import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { Notification } from './Notification';
import { Button } from '../../../components/buttons/Button/Button';

import { Story } from '../../../storybook';

storiesOf('Components|informational/', module).add(
  'Notification',
  () => (
    <Story title="Notification">
      <NotificationDocs />
    </Story>
  ),
);

const NotificationDocs = () => {
  const [showing, setShowing] = useState({});
  const [locked, setLocked] = useState(false);

  const demoAction = id => () =>
    alert(`I am a demo action for Notification ${id}`);

  function show(id) {
    if (!locked) {
      setShowing({ [id]: true });
      setLocked(true);
    }
  }

  function onComplete(id) {
    console.log(`notification ${id} onComplete()`);
    setShowing({ [id]: false });
    setLocked(false);
  }

  return (
    <div>
      <Button onClick={() => show(1)}>Show Notification 1</Button>

      <Notification
        isShowing={showing[1]}
        onComplete={() => onComplete(1)}
      >
        This is Notification 1!
      </Notification>

      <br />
      <br />

      <Button onClick={() => show(2)}>Show Notification 2</Button>

      <Notification
        format="warning"
        isShowing={showing[2]}
        onComplete={() => onComplete(2)}
        onActionClick={demoAction}
        actionLabel="Undo"
      >
        This is Notification 2!
      </Notification>
    </div>
  );
};
