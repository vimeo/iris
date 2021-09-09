import React from 'react';

import { Search } from './Search';

export default {
  title: 'components/Search/props',
};

export function Size() {
  return sizes.map((size) => (
    <div
      css={`
        padding: 1rem;
        max-width: 40rem;
      `}>
      <Search
        label={'search size ' + size}
        placeholder="Search our videos"
        size={size}
      />
    </div>
  ));
}

export function Format() {
  return formats.map((format) => (
    <div
      css={`
        padding: 1rem;
        max-width: 40rem;
      `}>
      <Search
        label={'search format ' + format}
        placeholder="Search our videos"
        format={format}
      />
    </div>
  ));
}

export function Variant() {
  return variants.map((variant) => (
    <div
      css={`
        padding: 1rem;
        max-width: 40rem;
      `}>
      <Search
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
