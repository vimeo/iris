import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';

import { Paragraph } from './Paragraph';

import { Story } from '../../storybook';

const formats = {
  alternative: 'alternative',
  soft: 'soft',
  basic: 'basic',
};

const statuses = {
  null: null,
  positive: 'positive',
  negative: 'negative',
};

storiesOf('Typography|Paragraph/', module).add('Paragraph', () => (
  <Story title="Paragraph" width="100%">
    <div style={{ padding: '2rem' }}>
      <Paragraph
        size="1"
        format={select('format', formats, 'basic')}
        status={select('status', statuses, null)}
      >
        Paragraph Size 1.
        <br />
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Provident accusantium quisquam numquam voluptatibus, nisi
        temporibus a ipsa similique repellat distinctio!
      </Paragraph>

      <br />

      <Paragraph
        size="2"
        format={select('format', formats, 'basic')}
        status={select('status', statuses, null)}
      >
        Paragraph Size 2.
        <br />
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Provident accusantium quisquam numquam voluptatibus, nisi
        temporibus a ipsa similique repellat distinctio!
      </Paragraph>

      <br />

      <Paragraph
        size="3"
        format={select('format', formats, 'basic')}
        status={select('status', statuses, null)}
      >
        Paragraph Size 3.
        <br />
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Provident accusantium quisquam numquam voluptatibus, nisi
        temporibus a ipsa similique repellat distinctio!
      </Paragraph>

      <br />

      <Paragraph
        size="4"
        format={select('format', formats, 'basic')}
        status={select('status', statuses, null)}
      >
        Paragraph Size 4.
        <br />
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Provident accusantium quisquam numquam voluptatibus, nisi
        temporibus a ipsa similique repellat distinctio!
      </Paragraph>
    </div>
  </Story>
));
