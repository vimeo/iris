import React from 'react';

import { Paragraph } from './Paragraph';

import { Layout } from '../../storybook';

export default {
  title: 'typography/Paragraph/props',
  component: Paragraph,
};

export function Size({ args }) {
  return (
    <Layout.StoryVertical>
      <Paragraph size="1" format="basic" {...args}>
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
Size.storyName = 'size';

export function Format({ args }) {
  return (
    <Layout.StoryVertical>
      <Paragraph size="2" {...args}>
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
Format.storyName = 'format';

export function Status({ args }) {
  return (
    <Layout.StoryVertical>
      <Paragraph size="2" {...args}>
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
Status.storyName = 'status';
