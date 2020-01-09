import React from 'react';
import { storiesOf } from '@storybook/react';
import { Search } from './Search';
import { Story } from '../../../storybook';

const componentName = 'Search Field';

storiesOf(`Components|inputs/Text/`, module).add('Search', () => (
  <Story title={componentName}>
    <Search
      label="Search"
      placeholder="Search our videos"
      format="alternative"
      size="xs"
    />
    <Search
      label="Search"
      placeholder="Search our videos"
      size="sm"
      format="alternative"
    />
    <Search
      label="Search"
      placeholder="Search our videos"
      size="md"
      format="alternative"
    />
    <Search
      label="Search"
      placeholder="Search our videos"
      format="alternative"
      size="lg"
    />
    <Search
      label="Search"
      placeholder="Search our videos"
      format="alternative"
      size="xl"
    />
    <hr />
    <br />
    <Search
      label="Search"
      placeholder="Search our videos"
      format="alternative"
      variant="minimal"
      size="xs"
    />
    <Search
      label="Search"
      placeholder="Search our videos"
      format="alternative"
      variant="minimal"
    />
    <Search
      label="Search"
      placeholder="Search our videos"
      format="alternative"
      variant="minimal"
      size="lg"
    />
    <Search
      label="Search"
      placeholder="Search our videos"
      format="primary"
      size="xs"
    />
    <Search
      label="Search"
      placeholder="Search our videos"
      format="primary"
    />
    <Search
      label="Search"
      placeholder="Search our videos"
      format="primary"
      size="lg"
    />
  </Story>
));
