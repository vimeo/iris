import React from 'react';
import { storiesOf } from '@storybook/react';
import { Tag } from './Tag';
import { Story } from '../../.storybook/ui/Story';
import styled from 'styled-components';

const $Tag = styled(Tag)`
  margin: 0 1rem 1rem 0;
`;

const componentName = 'Tag';

storiesOf(`components|${componentName}`, module)
  .add('basic', () => (
    <Story title={componentName} subTitle="basic">
      <$Tag size="xs">Documentary</$Tag>
      <$Tag size="sm">Animation</$Tag>
      <$Tag size="md">Narrative</$Tag>
      <$Tag size="lg">Comedy</$Tag>
      <$Tag onDismiss={dismissHandler} size="lg">
        Comedy
      </$Tag>
    </Story>
  ))
  .add('image', () => (
    <Story title={componentName} subTitle="image" props={['img']}>
      <$Tag
        size="xs"
        img="https://i.vimeocdn.com/video/562859486_270x270.jpg"
      >
        Beyonce
      </$Tag>
      <$Tag
        size="sm"
        format="dark"
        img="https://i.vimeocdn.com/video/562859486_270x270.jpg"
      >
        Janelle
      </$Tag>
      <$Tag
        size="md"
        img="https://i.vimeocdn.com/video/562859486_270x270.jpg"
      >
        Michelle
      </$Tag>
      <$Tag
        size="md"
        format="dark"
        img="https://i.vimeocdn.com/video/562859486_270x270.jpg"
      >
        Tessa
      </$Tag>
    </Story>
  ));

const dismissHandler = () => {
  alert('deleted this tag');
};
