import React, { SFC, useState } from 'react';
import styled, { css } from 'styled-components';
import { storiesOf } from '@storybook/react';

import * as Illustrations from './index';
import { Header2 } from '../legacy';
import { COLORS } from '../legacy';
import { Story } from '../storybook';

storiesOf('illustration|illustrations', module).add('all', () => (
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
