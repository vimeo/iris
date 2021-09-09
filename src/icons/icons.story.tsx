import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { rgba } from 'polished';

import * as BRAND_ICONS from './brand';
import * as PAYMENT_ICONS from './payment';
import * as MEDIA_ICONS from './media';
import * as SOCIAL_ICONS from './social';
import * as UI_ICONS from './ui';
import * as VIMEO_ICONS from './vimeo';

import { Header } from '../typography';
import { Input } from '../components';
import { black, white } from '../color';

export default { title: 'icons/Icons' };

const ICONS = {
  ...VIMEO_ICONS,
  ...UI_ICONS,
  ...BRAND_ICONS,
  ...SOCIAL_ICONS,
  ...PAYMENT_ICONS,
  ...MEDIA_ICONS,
};

export const All = () => <IconStory icons={ICONS} />;
export const UI = () => <IconStory icons={UI_ICONS} />;
export const Social = () => <IconStory icons={SOCIAL_ICONS} />;
export const Payment = () => <IconStory icons={PAYMENT_ICONS} />;
export const Brand = () => <IconStory icons={BRAND_ICONS} />;
export const Vimeo = () => <IconStory icons={VIMEO_ICONS} />;
export const Media = () => <IconStory icons={MEDIA_ICONS} />;

function IconStory({ icons, preserve = false }) {
  const [search, searchSet] = useState('');

  const onChange = (event) => searchSet(event.target.value);

  function checkPreserve(icon) {
    if (SOCIAL_ICONS[icon]) return true;
    if (PAYMENT_ICONS[icon]) return true;

    return preserve;
  }

  const IconNameTags = Object.keys(icons).map((key) => ({
    name: key,
    tags: icons[key].tags,
  }));

  const validIcons = IconNameTags.filter(({ name, tags }) => {
    const query = search?.toLowerCase();
    if (!query) return true;

    const matchName = name.toLowerCase().includes(query);
    const matchTags = tags?.includes(query);

    return matchName || matchTags;
  });

  return (
    <div>
      <Search
        id="search"
        onChange={onChange}
        placeholder="Search for icons"
        size="lg"
        style={{ width: '100%' }}
      />
      <div
        style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
        {validIcons.map(({ name }, i) => (
          <Card key={i}>
            <Icon
              size={2}
              name={name}
              preserve={checkPreserve(name)}
            />
            <Header
              size="6"
              style={{
                margin: '1rem',
                display: 'inline-flex',
              }}>
              {name}
            </Header>
          </Card>
        ))}
      </div>
    </div>
  );
}

function Icon({ size, name, preserve = false }) {
  const Icon = ICONS[name];
  if (!Icon) return null;

  return (
    <Wrap size={size} preserve={preserve}>
      <Icon />
    </Wrap>
  );
}

const width = (widthMap) =>
  Object.keys(widthMap).map(
    (minWidth) => css`
      @media (min-width: ${minWidth}rem) {
        width: calc(${widthMap[minWidth]}% - 1rem);
      }
    `
  );

const Search = styled(Input)`
  margin: 0.5rem;
  width: 100%;

  ${width({
    55: 50,
    80: 33.33,
    120: 25,
  })};
`;

const Card = styled.div`
  border-radius: 0.25rem;
  width: 100%;
  border: 1px solid
    ${({ theme }) =>
      theme.name === 'dark' ? rgba(white, 0.3) : rgba(black, 0.3)};
  align-items: center;
  text-align: center;
  padding: 0.5rem;
  margin: 0.5rem;
  display: flex;

  ${width({
    55: 50,
    80: 33.33,
    120: 25,
  })};
`;

const Wrap = styled.div<any>`
  svg {
    width: ${(p) => p.size}rem;
    height: ${(p) => p.size}rem;
    display: inline-flex;
    margin: 1rem;

    ${(p) =>
      !p.preserve &&
      css`
        * {
          fill: ${p.theme.name === 'dark' ? white : black};
        }
      `}
  }
`;
