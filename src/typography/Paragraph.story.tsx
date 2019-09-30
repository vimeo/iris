import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import { Paragraph } from './Paragraph';
import { Story } from '../storybook';

const variants = {
  alternative: 'alt',
  normal: 'normal',
  success: 'success',
};

storiesOf('Typography|Paragraph', module)
  .add('light', () => (
    <Story title="Typography" subTitle="Paragraphs" width="100%">
      <div style={{ padding: '2rem' }}>
        <Paragraph
          size="1"
          variant={select('variant', variants, 'normal')}
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
          variant={select('variant', variants, 'normal')}
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
          variant={select('variant', variants, 'normal')}
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
          variant={select('variant', variants, 'normal')}
        >
          Paragraph Size 4.
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Provident accusantium quisquam numquam voluptatibus, nisi
          temporibus a ipsa similique repellat distinctio!
        </Paragraph>
      </div>
    </Story>
  ))
  .add('dark', () => (
    <Story title="Typography" subTitle="Headlines" width="100%">
      <div style={{ background: '#222', padding: '2rem' }}>
        <Paragraph
          size="1"
          theme="dark"
          variant={select('variant', variants, 'normal')}
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
          theme="dark"
          variant={select('variant', variants, 'normal')}
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
          theme="dark"
          variant={select('variant', variants, 'normal')}
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
          theme="dark"
          variant={select('variant', variants, 'normal')}
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
