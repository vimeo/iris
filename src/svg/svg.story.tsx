import React, { SFC, useState } from 'react';
import styled, { css } from 'styled-components';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';

import * as Icons from '../Icons';
import * as Illustrations from '../Illustrations';
import { Header2, Header6 } from '../Type';
import * as COLORS from '../Color/Color';
import { Story } from '../../.storybook/ui/Story';
import { InputText } from '../InputText/InputText';

storiesOf('SVG|Icons', module).add('all', () => {
  return <IconStory />;
});

function IconStory() {
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
        {Object.keys(Icons)
          .filter(icon =>
            icon.toLowerCase().includes(searchText.toLowerCase()),
          )
          .map((icon, i) => (
            <IconWrapper key={i}>
              <Icon size={size} name={icon} />
              <Header6
                style={{
                  margin: '1rem',
                  display: 'inline-flex',
                }}
              >
                {icon}
              </Header6>
            </IconWrapper>
          ))}
      </div>
    </Story>
  );
}

storiesOf('SVG|Illustration', module).add('all', () => (
  <Story title="Illustrations" width="100%">
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {Object.keys(Illustrations).map(illustration => (
        <IllustrationWrapper>
          <Header2 style={{ marginBottom: '0.25rem' }}>
            {illustration}
          </Header2>

          <Illustration name={illustration} />
        </IllustrationWrapper>
      ))}
    </div>
  </Story>
));

const Card = css`
  border-radius: 0.125rem;
  width: 100%;
  border: 1px solid ${COLORS.Porcelain};
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

const Search = styled(InputText)`
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

const Icon: SFC<{ size: number; name: string }> = ({ size, name }) =>
  Icons[name]
    ? React.createElement(
        styled(Icons[name])`
          width: ${size}rem;
          height: ${size}rem;
          display: inline-flex;
          margin: 1rem;
        `,
      )
    : null;

const IllustrationWrapper = styled.div`
  ${Card};
  padding: 1rem;
  margin: 1.25rem;
  display: inline-block;

  ${width({
    70: 50,
  })};
`;

const Illustration: SFC<any> = ({ name }) =>
  Illustrations[name]
    ? React.createElement(
        styled(Illustrations[name])`
          width: 20rem;
          height: 20rem;
          display: block;
          margin: 3rem auto;
        `,
      )
    : null;
