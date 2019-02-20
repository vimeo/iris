import React, { SFC } from 'react';
import styled, { css } from 'styled-components';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';

import * as Icons from '../Icons';
import * as Illustrations from '../Illustrations';
import { Header2, Header6 } from '../Type';
import * as COLORS from '../Color/Color';
import { Story } from '../../.storybook/Story';

storiesOf('Icons', module).add('all', () => {
  const size = select(
    'Size',
    { XS: 0.625, SM: 0.875, MD: 1, LG: 1.125, XL: 2 },
    1.125,
    'iconSizes',
  );

  return (
    <Story title="Icons" width="100%">
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {Object.keys(Icons).map(icon => (
          <IconWrapper>
            <Header6 style={{ marginBottom: '0.125rem' }}>
              {icon}
            </Header6>

            <Icon size={size} name={icon} />
          </IconWrapper>
        ))}
      </div>
    </Story>
  );
});
storiesOf('Illustration', module).add('all', () => (
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
  padding: 1rem;
  margin: 1.25rem;
  border-radius: 0.125rem;
  display: inline-block;
  width: calc(100% - 4rem);
  border: 1px solid ${COLORS.Paste};
`;

const width = widthMap =>
  Object.keys(widthMap).map(
    minWidth => css`
      @media (min-width: ${minWidth}rem) {
        width: calc(${widthMap[minWidth]}% - 4rem);
      }
    `,
  );

const IconWrapper = styled.div`
  ${Card};

  ${width({
    40: 50,
    60: 25,
    80: 20,
    120: 16.6667,
  })};
`;

const Icon: SFC<{ size: number; name: string }> = ({ size, name }) =>
  Icons[name]
    ? React.createElement(
        styled(Icons[name])`
          width: ${size}rem;
          height: ${size}rem;
          display: block;
          margin: ${size * 1.5}rem auto;
        `,
      )
    : null;

const IllustrationWrapper = styled.div`
  ${Card};

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
