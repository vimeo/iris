import React, { useState } from 'react';
import styled from 'styled-components';

import { Select } from './Select';

import { Badge } from '../Badge/Badge.style';
import { Button } from '../Button/Button';
import { Layout } from '../../storybook';
import { PaperPlane } from '../../icons';
import { blue } from '../../color';

export default {
  title: 'components/Select/props',
};

export function Disabled() {
  return (
    <Layout.StoryVertical>
      <Select label="Select disabled" disabled>
        <Select.Option value="1">Value 1</Select.Option>
        <Select.Option value="2">
          Value 2 has a long label
        </Select.Option>
      </Select>
    </Layout.StoryVertical>
  );
}
Disabled.storyName = 'disabled';

export function Messages() {
  return (
    <Layout.StoryVertical>
      <Select
        label="Select with pre message"
        messages={{ pre: 'This is a pre message' }}>
        <Select.Option value="1">Value 1</Select.Option>
        <Select.Option value="2">
          Value 2 has a long label
        </Select.Option>
      </Select>
      <Select
        label="Select with post message"
        messages={{ post: 'post message' }}>
        <Select.Option value="1">Value 1</Select.Option>
        <Select.Option value="2">
          Value 2 has a long label
        </Select.Option>
      </Select>
      <Select
        label="Select with help message"
        status="positive"
        messages={{ help: 'Success!' }}>
        <Select.Option value="1">Value 1</Select.Option>
        <Select.Option value="2">
          Value 2 has a long label
        </Select.Option>
      </Select>
      <Select
        label="Select with error message"
        status="negative"
        messages={{ error: 'Error!' }}>
        <Select.Option value="1">Value 1</Select.Option>
        <Select.Option value="2">
          Value 2 has a long label
        </Select.Option>
      </Select>
    </Layout.StoryVertical>
  );
}
Messages.storyName = 'messages';

export function Status() {
  return (
    <Layout.StoryVertical>
      <Select
        label="I feel validated!"
        status="positive"
        messages={{ help: 'Great!' }}>
        <Select.Option value="1">Value 1</Select.Option>
        <Select.Option value="2">
          Value 2 has a long label
        </Select.Option>
      </Select>
      <Select
        label="Something bad happened!"
        status="negative"
        messages={{ error: 'Oops, that needs to be fixed.' }}>
        <Select.Option value="1">Value 1</Select.Option>
        <Select.Option value="2">
          Value 2 has a long label
        </Select.Option>
      </Select>
    </Layout.StoryVertical>
  );
}
Status.storyName = 'status';
export function DefaultValue() {
  return (
    <Layout.StoryVertical>
      <Select
        label="Select with defaultValue of 2"
        defaultValue="2"
        onChange={(e) =>
          console.log('Selected Option', e.target.value, e)
        }>
        <Select.Option value="1">Value 1</Select.Option>
        <Select.Option value="2">
          Value 2 has a long label
        </Select.Option>
      </Select>
    </Layout.StoryVertical>
  );
}
DefaultValue.storyName = 'defaultValue';

export function Value() {
  const [value, valueSet] = useState('1');

  return (
    <Layout.StoryVertical>
      <Select
        label="'value' state is controlled externally"
        value={value}
        onChange={(e) => {
          valueSet(e.target.value);
          console.log('Selected Option', e.target.value, e);
        }}>
        <Select.Option value="1">Value 1</Select.Option>
        <Select.Option value="2">
          Value 2 has a long label
        </Select.Option>
      </Select>
    </Layout.StoryVertical>
  );
}
Value.storyName = 'value';

export function Size() {
  return (
    <Layout.StoryVertical>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size, i) => {
        return (
          <Select key={i} label={`${size} Select`} size={size}>
            <Select.Option value="1">Value 1</Select.Option>
            <Select.Option value="2">
              Value 2 has a long label
            </Select.Option>
          </Select>
        );
      })}
    </Layout.StoryVertical>
  );
}
Size.storyName = 'size';

export function Faux() {
  return (
    <Layout.StoryVertical>
      <Select
        label="Faux select"
        onChange={(e) => {
          console.log('Selected Option', e.target.value, e);
        }}
        faux>
        <Select.Option value="1">Option 1</Select.Option>
        <Select.Option value="2">Option 2</Select.Option>
        <Select.Option value="3">
          Option 3 <PaperPlane style={{ margin: '0 0.5rem' }} />
        </Select.Option>
        <Select.Option value="4" disabled>
          Option 4
        </Select.Option>
        <Select.Option value="5" href="#" disabled>
          Option 5 {UpgradeBadge}
        </Select.Option>
        <a href="#">
          <Notice>This is a notice. Contact Us.</Notice>
        </a>
      </Select>
    </Layout.StoryVertical>
  );
}
Faux.storyName = 'faux';

export function FauxExternalState() {
  const [value, valueSet] = useState(null);

  function onChange(event) {
    valueSet(event.target.value);
    console.log('Selected Option', event.target.value, event);
  }

  return (
    <Layout.StoryVertical>
      <Select
        label="Faux select"
        onChange={onChange}
        placeholder="Please select an option."
        value={value}
        faux>
        <Select.Option value="1">Option 1</Select.Option>
        <Select.Option value="2">Option 2</Select.Option>
        <Select.Option value="3">
          Option 3 <PaperPlane style={{ margin: '0 0.5rem' }} />
        </Select.Option>
        <Select.Option value="4" disabled>
          Option 4
        </Select.Option>
        <Select.Option value="5" href="#" disabled>
          Option 5 {UpgradeBadge}
        </Select.Option>
      </Select>
      <Button onClick={() => valueSet(null)}>Reset</Button>
      <Button onClick={() => valueSet('1')}>Select Option 1</Button>
    </Layout.StoryVertical>
  );
}
FauxExternalState.storyName = 'faux (external state)';

const UpgradeBadge = (
  <Badge
    // @ts-ignore
    format="upgrade"
    size="sm"
    style={{ display: 'inline-block', margin: '0 0.5rem' }}>
    Upgrade
  </Badge>
);

const Notice = styled.div`
  background: ${blue(50)};
  width: 100%;
  padding: 0.75rem 1.5rem;
  color: black;
  a {
    color: black;
    text-decoration: underline;
  }
`;

export function Pill() {
  return (
    <Layout.StoryVertical>
      <Select label="Select disabled" pill>
        <Select.Option value="1">Value 1</Select.Option>
        <Select.Option value="2">
          Value 2 has a long label
        </Select.Option>
      </Select>
    </Layout.StoryVertical>
  );
}
Pill.storyName = 'pill';
