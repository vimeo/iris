import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';

import { Button } from './Button';
import { DownloadArrow, Heart, PaperPlane } from '../Icons';

const $Button = styled(Button)`
  margin: 0 1rem 1rem 0;
`;

const ButtonCropped = styled($Button)`
  max-width: 150px;
`;

const buttonFormats = {
  primary: 'primary',
  primaryDark: 'primaryDark',
  primaryOutline: 'primaryOutline',
  primaryTextOnly: 'primaryTextOnly',
  secondary: 'secondary',
  secondaryDark: 'secondaryDark',
  secondaryOutline: 'secondaryOutline',
  secondaryTextOnly: 'secondaryTextOnly',
  alternative: 'alternative',
  alternativeOutline: 'alternativeOutline',
  darkSecondary: 'darkSecondary',
  success: 'success',
  successOutline: 'successOutline',
  warning: 'warning',
  warningOutline: 'warningOutline',
  warningTextOnly: 'warningTextOnly',
  lightTransparent: 'lightTransparent',
  lightTextOnly: 'lightTextOnly',
};

import { Story } from '../../.storybook/ui/Story';
import { ParagraphMd } from '../Type';

const componentName = 'Button';

storiesOf(`components|${componentName}`, module)
  .add('playground', () => (
    <Story title={componentName} subTitle="Playground">
      <ParagraphMd>Click "KNOBS" in the panel below.</ParagraphMd>
      <$Button format={select('format', buttonFormats, 'primary')}>
        {text('text', 'Play with me!')}
      </$Button>
    </Story>
  ))
  .add('basic', () => (
    <Story title={componentName} subTitle="Basic">
      <$Button>Primary</$Button>
      <$Button format="secondary">Secondary</$Button>
      <$Button format="alternative">Alternative</$Button>
      <$Button format="success">Success</$Button>
      <$Button format="warning">Warning</$Button>
    </Story>
  ))
  .add(
    'text overflow',
    () => (
      <Story title={componentName} subTitle="Text Overflow">
        <ButtonCropped>Primary with Text Overflow</ButtonCropped>
        <ButtonCropped format="secondary">
          Secondary with Text Overflow
        </ButtonCropped>
        <ButtonCropped format="alternative">
          Alternative with Text Overflow
        </ButtonCropped>
        <ButtonCropped format="success">
          Success with Text Overflow
        </ButtonCropped>
        <ButtonCropped format="warning">
          Warning with Text Overflow
        </ButtonCropped>
      </Story>
    ),
    {
      notes:
        'Buttons must be width constrained for the text to ellipsis crop. ButtonCropped used in example has a max-width of 150px.',
    },
  )
  .add('outline', () => (
    <Story title={componentName} subTitle="Outline">
      <$Button format="primaryOutline">Primary Outline</$Button>
      <$Button format="secondaryOutline">Secondary Outline</$Button>
      <$Button format="alternativeOutline">
        Alternative Outline
      </$Button>
      <$Button format="successOutline">Success Outline</$Button>
      <$Button format="warningOutline">Warning Outline</$Button>
    </Story>
  ))
  .add('icon', () => (
    <Story
      title={componentName}
      subTitle="Icon"
      props={['icon', 'iconLocation']}
    >
      <div>
        <$Button size="lg" format="warning" icon={<PaperPlane />}>
          warning lg
        </$Button>
        <$Button
          size="lg"
          format="success"
          icon={<DownloadArrow />}
          iconLocation="afterLabel"
        >
          Success lg
        </$Button>
      </div>
      <div>
        <$Button format="alternative" icon={<PaperPlane />}>
          Alternative
        </$Button>
        <$Button
          format="secondaryOutline"
          icon={<Heart />}
          iconLocation="afterLabel"
        >
          Secondary Outline
        </$Button>
      </div>
      <div>
        <$Button size="sm" format="primary" icon={<PaperPlane />}>
          Primary sm
        </$Button>
        <$Button
          size="sm"
          format="secondary"
          icon={<DownloadArrow />}
          iconLocation="afterLabel"
        >
          Secondary sm
        </$Button>
      </div>

      <div>
        <$Button
          size="xs"
          format="primaryOutline"
          icon={<PaperPlane />}
        >
          Primary xs
        </$Button>
        <$Button
          size="xs"
          format="secondaryOutline"
          icon={<PaperPlane />}
          iconLocation="afterLabel"
        >
          Secondary xs
        </$Button>
      </div>
    </Story>
  ));
