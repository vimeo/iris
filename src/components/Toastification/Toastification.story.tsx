import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Toastification } from './Toastification';
import { Button } from '../Button/Button';
import { Story } from '../../storybook';

storiesOf('Components|Toastification', module).add(
  'Toastification',
  () => (
    <Story title="Toastification">
      <ToastificationDocs />
    </Story>
  ),
);

const ToastificationDocs = () => {
  const [showing, setShowing] = useState({});
  const [locked, setLocked] = useState(false);

  const demoAction = id => () =>
    alert(`I am a demo action for Toastification ${id}`);

  function show(id) {
    if (!locked) {
      setShowing({ [id]: true });
      setLocked(true);
    }
  }

  function onComplete(id) {
    console.log(`toastification ${id} onComplete()`);
    setShowing({ [id]: false });
    setLocked(false);
  }

  return (
    <div>
      <Button onClick={() => show(1)}>Show Toastification 1</Button>

      <Toastification
        isShowing={showing[1]}
        onComplete={() => onComplete(1)}
      >
        This is Toastification 1!
      </Toastification>

      <br />
      <br />

      <Button onClick={() => show(2)}>Show Toastification 2</Button>

      <Toastification
        format="warning"
        isShowing={showing[2]}
        onComplete={() => onComplete(2)}
        onActionClick={demoAction}
        actionLabel="Undo"
      >
        This is Toastification 2!
      </Toastification>
    </div>
  );
};
