import React from 'react';
import { Accordion } from './Accordion';
import { Layout } from '../../storybook';
import styled from 'styled-components';
import { Gear } from '../../icons';
import { rem } from 'polished';
import { core } from '../../tokens';

export default {
  title: 'components/Accordion/examples',
  component: Accordion,
  argTypes: {
    allowMultiple: { control: { disable: true } },
    defaultIndex: { control: { disable: true } },
    format: { control: { disable: true } },
  },
};

export function AccordionWithSubcopy({ args }) {
  return (
    <Layout.StoryVertical center>
      <Accordion {...args}>
        <Accordion.Item
          title="Accordion item title"
          subcopy="Subcopy text"
        >
          Accordion content
        </Accordion.Item>
      </Accordion>
    </Layout.StoryVertical>
  );
}

AccordionWithSubcopy.storyName = 'Accordion - subcopy';

export function AccordionWithIcon({ args }) {
  return (
    <Layout.StoryVertical center>
      <Accordion {...args}>
        <Accordion.Item
          title="Accordion item with icon"
          icon={<GearIcon />}
        >
          Accordion content
        </Accordion.Item>
      </Accordion>
    </Layout.StoryVertical>
  );
}

const GearIcon = styled(Gear)`
  width: ${rem(22)};
  margin-right: ${rem(10)};
  path {
    fill: ${core.color.text.primary};
  }
`;

AccordionWithIcon.storyName = 'Accordion - icon';

export function DisabledAccordion({ args }) {
  return (
    <Layout.StoryVertical center>
      <Accordion {...args}>
        <Accordion.Item
          title="Disabled accordion item"
          disabled={true}
        >
          Accordion content
        </Accordion.Item>
      </Accordion>
    </Layout.StoryVertical>
  );
}

DisabledAccordion.storyName = 'Accordion - disabled';

export function AccordionWithError({ args }) {
  return (
    <Layout.StoryVertical center>
      <Accordion {...args}>
        <Accordion.Item
          title="Accordion item with error"
          hasError={true}
        >
          Accordion content
        </Accordion.Item>
      </Accordion>
    </Layout.StoryVertical>
  );
}

AccordionWithError.storyName = 'Accordion - error';

export function AccordionWithAllowMultipleFalse({ args }) {
  return (
    <Layout.StoryVertical center>
      <Accordion {...args} allowMultiple={false} defaultIndex={0}>
        <Accordion.Item title="Accordion item 1">
          Accordion content
        </Accordion.Item>
        <Accordion.Item title="Accordion item 2">
          Accordion content
        </Accordion.Item>
        <Accordion.Item title="Accordion item 3">
          Accordion content
        </Accordion.Item>
      </Accordion>
    </Layout.StoryVertical>
  );
}

AccordionWithAllowMultipleFalse.storyName =
  'Accordion - allowMultiple is false';

export function AccordionAllowMultiple({ args }) {
  return (
    <Layout.StoryVertical center>
      <Accordion {...args}>
        <Accordion.Item title="Accordion item 1">
          Accordion content
        </Accordion.Item>
        <Accordion.Item title="Accordion item 2">
          Accordion content
        </Accordion.Item>
        <Accordion.Item title="Accordion item 3">
          Accordion content
        </Accordion.Item>
      </Accordion>
    </Layout.StoryVertical>
  );
}

AccordionAllowMultiple.storyName =
  'Accordion - allowMultiple is true (default)';
