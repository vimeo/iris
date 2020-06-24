import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import { select } from '@storybook/addon-knobs';

import * as UI_ICONS from './ui';
import * as SOCIAL_ICONS from './social';
import * as PAYMENT_ICONS from './payment';
import * as VIMEO_ICONS from './vimeo';

import { Header } from '../typography';
import { Input } from '../components';
import { Story } from '../storybook';
import { black, white } from '../color';

export default { title: 'icons|Icons/' };

const ICONS = {
  ...VIMEO_ICONS,
  ...UI_ICONS,
  ...SOCIAL_ICONS,
  ...PAYMENT_ICONS,
};

export const All = () => <IconStory icons={ICONS} />;
export const UI = () => <IconStory icons={UI_ICONS} />;
export const Socail = () => <IconStory icons={SOCIAL_ICONS} />;
export const Payment = () => <IconStory icons={PAYMENT_ICONS} />;
export const Vimeo = () => <IconStory icons={VIMEO_ICONS} />;

function IconStory({ icons, preserve = false, ...props }) {
  const [searchText, setSearchText] = useState('');

  const doChange = event => {
    setSearchText(event.target.value);
  };

  const size = select(
    'Size',
    { XS: 0.625, SM: 0.875, MD: 1, LG: 1.125, XL: 2 },
    2,
    'iconSizes',
  );

  function checkPreserve(icon) {
    if (SOCIAL_ICONS[icon]) return true;
    if (PAYMENT_ICONS[icon]) return true;

    return preserve;
  }

  const validIcons = Object.keys(icons).filter(icon =>
    icon.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <Story title="Icons" width="100%">
      <Search
        id="search"
        onChange={doChange}
        placeholder="Search for icons"
      />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {validIcons.map((icon, i) => (
          <Card key={i}>
            <Icon
              size={size}
              name={icon}
              preserve={checkPreserve(icon)}
            />
            <Header
              size="6"
              style={{
                margin: '1rem',
                display: 'inline-flex',
              }}
            >
              {icon}
            </Header>
          </Card>
        ))}
      </div>
    </Story>
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

const width = widthMap =>
  Object.keys(widthMap).map(
    minWidth => css`
      @media (min-width: ${minWidth}rem) {
        width: calc(${widthMap[minWidth]}% - 4rem);
      }
    `,
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
    width: ${p => p.size}rem;
    height: ${p => p.size}rem;
    display: inline-flex;
    margin: 1rem;

    ${p =>
      !p.preserve &&
      css`
        * {
          fill: ${p.theme.name === 'dark' ? white : black};
        }
      `}
  }
`;
