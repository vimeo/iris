import React from 'react';

import { Notification } from './Notification';

import { Button } from '../../index';
import { Header } from '../../../typography';

export default {
  title: 'components/Notification/examples',
  component: Notification,
};

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
