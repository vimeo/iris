import React from 'react';

import { Search } from './Search';

export default {
  title: 'components/Search/props',
};

export function Size({ args }) {
  return sizes.map((size, key) => (
    <div
      key={key}
      css={`
        padding: 1rem;
        max-width: 40rem;
      `}
    >
      <Search
        {...args}
        label={'search size ' + size}
        placeholder="Search our videos"
        size={size}
      />
    </div>
  ));
}

export function Format({ args }) {
  return formats.map((format, key) => (
    <div
      key={key}
      css={`
        padding: 1rem;
        max-width: 40rem;
      `}
    >
      <Search
        {...args}
        label={'search format ' + format}
        placeholder="Search our videos"
        format={format}
      />
    </div>
  ));
}

export function Variant({ args }) {
  return variants.map((variant, key) => (
    <div
      key={key}
      css={`
        padding: 1rem;
        max-width: 40rem;
      `}
    >
      <Search
        {...args}
        label={'search variant ' + variant}
        placeholder="Search our videos"
        variant={variant}
      />
    </div>
  ));
}

const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
const formats = ['primary', 'alternative'] as const;
const variants = ['minimal', 'basic'] as const;
