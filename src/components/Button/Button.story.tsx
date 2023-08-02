import React from 'react';
import { StoryFn } from '@storybook/react';
import styled from 'styled-components';

import { Button as B } from './Button';
import { Props } from './Button.types';
import { DownloadArrow } from '../../icons';
import { Header } from '../../typography';

import {
  formats,
  statuses,
  variants,
  sizes,
  iconPositions,
} from './Button.config';

export default {
  title: 'components/Button',
  component: B,
  argTypes: {
    circular: { table: { disable: true } },
    overflow: { table: { disable: true } },
    href: { control: { disable: true } },
    icon: { control: { disable: true } },
    target: { control: { disable: true } },
    children: {
      control: {
        type: 'text',
      },
    },
  },
};

const ButtonStyled = styled(B)`
  margin-bottom: 1rem;
  max-width: 10rem;
`;

const Template: StoryFn<Props> = ({ children, ...args }) => {
  return (
    <>
      <ButtonStyled {...args} size="md">
        {children}
      </ButtonStyled>
      <ButtonStyled icon={<DownloadArrow />} {...args}>
        {children}
      </ButtonStyled>
    </>
  );
};

export const Button = Template.bind({});
Button.args = {
  children: 'Button',
};

const states = ['default', 'hover', 'focus', 'active', 'disabled'];
const formatStickers = formats.flatMap((format) =>
  states.map((state) => ({ format: format, id: state }))
);
const variantStickers = variants.flatMap((variant) =>
  states.map((state) => ({ variant: variant, id: state }))
);
const sizeStickers = sizes.flatMap((size) =>
  states.map((state) => ({ size: size, id: state }))
);
const iconPositionStickers = iconPositions.flatMap((iconPosition) =>
  states.map((state) => ({ iconPosition: iconPosition, id: state }))
);

const LayoutGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(5, 1fr);
`;
const GridCell = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;
const StyledHeader = styled(Header)`
  margin-top: 2rem;
`;

const Sheet = () => {
  return (
    <>
      <StyledHeader>Formats</StyledHeader>
      <LayoutGrid>
        {formatStickers.map((sticker, i) => (
          <GridCell key={i}>
            <pre>{sticker.format}</pre>
            <ButtonStyled
              {...sticker}
              disabled={sticker.id === 'disabled'}
            >
              {sticker.id}
            </ButtonStyled>
          </GridCell>
        ))}
      </LayoutGrid>
      <StyledHeader>Variants</StyledHeader>
      <LayoutGrid>
        {variantStickers.map((sticker, i) => (
          <GridCell key={i}>
            <pre>{sticker.variant}</pre>
            <ButtonStyled
              {...sticker}
              disabled={sticker.id === 'disabled'}
            >
              {sticker.id}
            </ButtonStyled>
          </GridCell>
        ))}
      </LayoutGrid>
      <StyledHeader>Sizes</StyledHeader>
      <LayoutGrid>
        {sizeStickers.map((sticker, i) => (
          <GridCell key={i}>
            <pre>{sticker.size}</pre>
            <ButtonStyled
              {...sticker}
              disabled={sticker.id === 'disabled'}
            >
              {sticker.id}
            </ButtonStyled>
          </GridCell>
        ))}
      </LayoutGrid>
      <StyledHeader>Icon Positions</StyledHeader>
      <LayoutGrid>
        {iconPositionStickers.map((sticker, i) => (
          <GridCell key={i}>
            <pre>{sticker.iconPosition}</pre>
            <ButtonStyled
              {...sticker}
              icon={<DownloadArrow />}
              disabled={sticker.id === 'disabled'}
            >
              {sticker.id}
            </ButtonStyled>
          </GridCell>
        ))}
      </LayoutGrid>
    </>
  );
};

export const StickerSheet = Sheet.bind({});
StickerSheet.parameters = {
  pseudo: {
    hover: '#hover',
    focusVisible: '#focus',
    active: '#active',
  },
  lostpixel: {
    waitBeforeScreenshot: 4000,
  },
};
