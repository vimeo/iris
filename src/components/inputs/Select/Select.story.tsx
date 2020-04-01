import React, { useRef } from 'react';
import { storiesOf } from '@storybook/react';
import { Select } from './Select';
import { Story } from '../../../storybook';
import { Badge } from '../../chips/Badge/Badge.style';
import { PaperPlane } from '../../../icons';
import { blue } from '../../../color';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

storiesOf(`Components|inputs/`, module)
  .add('Select', () => (
    <Story title="Select">
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
      <br />
      <br />
      <Select
        label="I feel validated!"
        status="positive"
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
      <br />
      <br />
      <Select
        label="Something bad happened!"
        status="negative"
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
      <br />
      <br />
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
      <br />
      <br />
      <hr />
      <Select
        label="xs Select"
        size="xs"
        onChange={e => action('Selected Option')(e.target.value, e)}
      >
        <Select.Option value="1">Value 1</Select.Option>
        <Select.Option value="2">
          Value 2 has a long label
        </Select.Option>
      </Select>
      <br />
      <Select
        label="sm Select"
        size="sm"
        onChange={e => action('Selected Option')(e.target.value, e)}
      >
        <Select.Option value="1">Value 1</Select.Option>
        <Select.Option value="2">
          Value 2 has a long label
        </Select.Option>
      </Select>
      <br />
      <Select
        label="md Select"
        size="md"
        onChange={e => action('Selected Option')(e.target.value, e)}
      >
        <Select.Option value="1">Value 1</Select.Option>
        <Select.Option value="2">
          Value 2 has a long label
        </Select.Option>
      </Select>
      <br />
      <Select
        label="lg Select"
        size="lg"
        onChange={e => action('Selected Option')(e.target.value, e)}
      >
        <Select.Option value="1">Value 1</Select.Option>
        <Select.Option value="2">
          Value 2 has a long label
        </Select.Option>
      </Select>
      <br />
      <Select
        label="xl Select"
        size="xl"
        onChange={e => action('Selected Option')(e.target.value, e)}
      >
        <Select.Option value="1">Value 1</Select.Option>
        <Select.Option value="2">
          Value 2 has a long label
        </Select.Option>
      </Select>
      <br />
    </Story>
  ))
  .add('Select (faux)', () => <FauxSelectStory />);

function FauxSelectStory() {
  const selectRef = useRef(null);
  return (
    <Story title="Select">
      <Select
        label="Alert Selected"
        onChange={e => {
          action('Selected Option')(
            e.target.value,
            e,
            selectRef.current,
          );
        }}
        ref={selectRef}
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
    </Story>
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
