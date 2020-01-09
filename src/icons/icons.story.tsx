import React, { createElement, useState } from 'react';
import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';

import * as UI_ICONS from './ui';
import * as SOCIAL_ICONS from './social';
import * as PAYMENT_ICONS from './payment';
import * as VIMEO_ICONS from './vimeo';

import { Header } from '../typography';
import { Input } from '../components/inputs/Input/Input';
import { Story } from '../storybook';
import { black, white } from '../color';

const ICONS = {
  ...VIMEO_ICONS,
  ...UI_ICONS,
  ...SOCIAL_ICONS,
  ...PAYMENT_ICONS,
};

storiesOf('Icons|icons/', module)
  .add('all', () => {
    return <IconStory icons={ICONS} />;
  })
  .add('ui', () => {
    return <IconStory icons={UI_ICONS} />;
  })
  .add('social', () => {
    return <IconStory icons={SOCIAL_ICONS} preserve />;
  })
  .add('payment', () => {
    return <IconStory icons={PAYMENT_ICONS} preserve />;
  })
  .add('vimeo', () => {
    return <IconStory icons={VIMEO_ICONS} />;
  });

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

  return (
    <Story title="Icons" width="100%">
      <Search
        id="search"
        onChange={doChange}
        placeholder="Search for icons"
      />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {Object.keys(icons)
          .filter(icon =>
            icon.toLowerCase().includes(searchText.toLowerCase()),
          )
          .map((icon, i) => (
            <IconWrapper key={i}>
              <Icon size={size} name={icon} preserve={preserve} />
              <Header
                size="6"
                style={{
                  margin: '1rem',
                  display: 'inline-flex',
                }}
              >
                {icon}
              </Header>
            </IconWrapper>
          ))}
      </div>
    </Story>
  );
}

const Card = css`
  border-radius: 0.25rem;
  width: 100%;
  border: 1px solid
    ${({ theme }) =>
      theme.name === 'dark' ? rgba(white, 0.3) : rgba(black, 0.3)};
  align-items: center;
  text-align: center;
`;

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

const IconWrapper = styled.div`
  ${Card};
  padding: 0.5rem;
  margin: 0.5rem;
  display: flex;

  ${width({
    55: 50,
    80: 33.33,
    120: 25,
  })};
`;

function Icon({ size, name, preserve }) {
  return (
    ICONS[name] &&
    createElement(
      styled(ICONS[name])`
        width: ${size}rem;
        height: ${size}rem;
        display: inline-flex;
        margin: 1rem;

        ${p =>
          !preserve &&
          css`
            * {
              fill: ${({ theme }) =>
                theme.name === 'dark' ? white : black};
            }
          `}
      `,
    )
  );
}
