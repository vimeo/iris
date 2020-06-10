import React from 'react';
import { Select } from './Select';
import { Layout } from '../../../storybook';
import { Badge } from '../../chips/Badge/Badge.style';
import { PaperPlane } from '../../../icons';
import { blue } from '../../../color';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

export default { title: 'components|inputs/Select/' };

export function Common() {
  return (
    <Layout.StoryVertical>
      <Select
        label="Select"
        style={{ display: 'inline-block', width: 'auto' }}
        onChange={e => action('Selected Option')(e.target.value, e)}
      >
        <Select.Option value="" disabled hidden>
          Select something...
        </Select.Option>
        <Select.Option value="1">Value 1</Select.Option>
        <Select.Option value="2">
          Value 2 has a long label
        </Select.Option>
        <Select.Option value="3" disabled>
          Value 2 (Disabled)
        </Select.Option>
      </Select>
      <Select
        label="Select disabled"
        disabled
        style={{ display: 'inline-block', width: 'auto' }}
        onChange={e => action('Selected Option')(e.target.value, e)}
      >
        <Select.Option value="1">Value 1</Select.Option>
        <Select.Option value="2">
          Value 2 has a long label
        </Select.Option>
      </Select>
      <Select
        label="I feel validated!"
        status="positive"
        onChange={e => action('Selected Option')(e.target.value, e)}
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
        onChange={e => action('Selected Option')(e.target.value, e)}
      >
        <Select.Option value="1">Value 1</Select.Option>
        <Select.Option value="2">
          Value 2 has a long label
        </Select.Option>
      </Select>
      <Select
        label="Select with defaultValue of 2"
        defaultValue="2"
        onChange={e => action('Selected Option')(e.target.value, e)}
      >
        <Select.Option value="1">Value 1</Select.Option>
        <Select.Option value="2">
          Value 2 has a long label
        </Select.Option>
      </Select>
    </Layout.StoryVertical>
  );
}

export function Sizes() {
  return (
    <Layout.StoryVertical>
      {['xs', 'sm', 'md', 'lg', 'xl'].map((size, i) => {
        return (
          <Select
            label={`${size} Select`}
            size={size}
            onChange={e =>
              action('Selected Option')(e.target.value, e)
            }
          >
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

export function FauxSelect() {
  return (
    <Layout.StoryVertical>
      <Select
        label="Alert Selected"
        onChange={e => {
          action('Selected Option')(e.target.value, e);
        }}
        faux
        style={{ width: '50%' }}
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
      <br />
      <Select disabled label="Disabled" faux style={{ width: '50%' }}>
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
