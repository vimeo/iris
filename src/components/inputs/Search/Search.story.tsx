import React from 'react';

import { Search } from './Search';

export default { title: 'Components/inputs/Search' };

export function Common() {
  return (
    <div
      css={`
        padding: 2rem;
        max-width: 30rem;
      `}
    >
      <Search label="Search" placeholder="Search our videos" />
    </div>
  );
}

export function Size() {
  return sizes.map((size) => (
    <div
      css={`
        padding: 1rem;
        max-width: 40rem;
      `}
    >
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
      `}
    >
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
      `}
    >
      <Search
        label={'search variant ' + variant}
        placeholder="Search our videos"
        variant={variant}
      />
    </div>
  ));
}

const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];
const formats = ['primary', 'alternative'];
const variants = ['minimal', 'basic'];
