import React from 'react';
import styled from 'styled-components';

import { Select } from './Select';

import { Layout } from '../../../storybook';
import { Badge } from '../../chips/Badge/Badge.style';
import { PaperPlane } from '../../../icons';
import { blue } from '../../../color';

export default {
  title: 'Components/Inputs/Select/Props',
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

export function Messages() {
  return (
    <Layout.StoryVertical>
      <Select
        label="Select with pre message"
        messages={{ pre: 'This is a pre message' }}
      >
        <Select.Option value="1">Value 1</Select.Option>
        <Select.Option value="2">
          Value 2 has a long label
        </Select.Option>
      </Select>
      <Select
        label="Select with post message"
        messages={{ post: 'post message' }}
      >
        <Select.Option value="1">Value 1</Select.Option>
        <Select.Option value="2">
          Value 2 has a long label
        </Select.Option>
      </Select>
      <Select
        label="Select with help message"
        status="positive"
        messages={{ help: 'Success!' }}
      >
        <Select.Option value="1">Value 1</Select.Option>
        <Select.Option value="2">
          Value 2 has a long label
        </Select.Option>
      </Select>
      <Select
        label="Select with error message"
        status="negative"
        messages={{ error: 'Error!' }}
      >
        <Select.Option value="1">Value 1</Select.Option>
        <Select.Option value="2">
          Value 2 has a long label
        </Select.Option>
      </Select>
    </Layout.StoryVertical>
  );
}

export function Status() {
  return (
    <Layout.StoryVertical>
      <Select
        label="I feel validated!"
        status="positive"
        messages={{ help: 'Great!' }}
      >
        <Select.Option value="1">Value 1</Select.Option>
        <Select.Option value="2">
          Value 2 has a long label
        </Select.Option>
      </Select>
      <Select
        label="Something bad happened!"
        status="negative"
        messages={{ error: 'Oops, that needs to be fixed.' }}
      >
        <Select.Option value="1">Value 1</Select.Option>
        <Select.Option value="2">
          Value 2 has a long label
        </Select.Option>
      </Select>
    </Layout.StoryVertical>
  );
}
export function DefaultValue() {
  return (
    <Layout.StoryVertical>
      <Select
        label="Select with defaultValue of 2"
        defaultValue="2"
        onChange={(e) =>
          console.log('Selected Option', e.target.value, e)
        }
      >
        <Select.Option value="1">Value 1</Select.Option>
        <Select.Option value="2">
          Value 2 has a long label
        </Select.Option>
      </Select>
    </Layout.StoryVertical>
  );
}
DefaultValue.storyName = 'DefaultValue';

export function Sizes() {
  return (
    <Layout.StoryVertical>
      {['xs', 'sm', 'md', 'lg', 'xl'].map((size, i) => {
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

export function Faux() {
  return (
    <Layout.StoryVertical>
      <Select
        label="Faux select"
        onChange={(e) => {
          console.log('Selected Option', e.target.value, e);
        }}
        faux
      >
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
      <Select disabled label="Disabled" faux>
        <Select.Option value="1">Option 1</Select.Option>
        <Select.Option value="2">Option 2</Select.Option>
      </Select>
    </Layout.StoryVertical>
  );
}

const UpgradeBadge = (
  <Badge
    format="upgrade"
    size="sm"
    style={{ display: 'inline-block', margin: '0 0.5rem' }}
  >
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
