import React from 'react';
import { select } from '@storybook/addon-knobs';

import { Paragraph } from './Paragraph';

import { Layout } from '../../storybook';

/* eslint-disable import/no-default-export */
export default { title: 'typography|Paragraph/' };
/* eslint-enable import/no-default-export */

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

export function Size() {
  return (
    <Layout.StoryVertical>
      <Paragraph size="1" format="basic">
        Paragraph Size 1.
        <br />
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Provident accusantium quisquam numquam voluptatibus, nisi
        temporibus a ipsa similique repellat distinctio!
      </Paragraph>

      <br />

      <Paragraph size="2" format="basic">
        Paragraph Size 2.
        <br />
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Provident accusantium quisquam numquam voluptatibus, nisi
        temporibus a ipsa similique repellat distinctio!
      </Paragraph>

      <br />

      <Paragraph size="3" format="basic">
        Paragraph Size 3.
        <br />
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Provident accusantium quisquam numquam voluptatibus, nisi
        temporibus a ipsa similique repellat distinctio!
      </Paragraph>

      <br />

      <Paragraph size="4" format="basic">
        Paragraph Size 4.
        <br />
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Provident accusantium quisquam numquam voluptatibus, nisi
        temporibus a ipsa similique repellat distinctio!
      </Paragraph>
    </Layout.StoryVertical>
  );
}

export function Format() {
  return (
    <Layout.StoryVertical>
      <Paragraph size="2">
        Paragraph Size 2.
        <br />
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Provident accusantium quisquam numquam voluptatibus, nisi
        temporibus a ipsa similique repellat distinctio!
      </Paragraph>

      <br />

      <Paragraph size="2" format="alternative">
        Paragraph Size 2 Format Alternative.
        <br />
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Provident accusantium quisquam numquam voluptatibus, nisi
        temporibus a ipsa similique repellat distinctio!
      </Paragraph>

      <br />

      <Paragraph size="2" format="soft">
        Paragraph Size 2 Format Soft.
        <br />
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Provident accusantium quisquam numquam voluptatibus, nisi
        temporibus a ipsa similique repellat distinctio!
      </Paragraph>
    </Layout.StoryVertical>
  );
}

export function Status() {
  return (
    <Layout.StoryVertical>
      <Paragraph size="2">
        Paragraph Size 2.
        <br />
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Provident accusantium quisquam numquam voluptatibus, nisi
        temporibus a ipsa similique repellat distinctio!
      </Paragraph>

      <br />

      <Paragraph size="2" status="positive">
        Paragraph Size 2 Status Positive.
        <br />
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Provident accusantium quisquam numquam voluptatibus, nisi
        temporibus a ipsa similique repellat distinctio!
      </Paragraph>

      <br />

      <Paragraph size="2" status="negative">
        Paragraph Size 2 Status Negative.
        <br />
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Provident accusantium quisquam numquam voluptatibus, nisi
        temporibus a ipsa similique repellat distinctio!
      </Paragraph>
    </Layout.StoryVertical>
  );
}
