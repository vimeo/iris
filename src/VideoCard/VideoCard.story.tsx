import React from 'react';
import { storiesOf } from '@storybook/react';
import { VideoCard } from './VideoCard';
import { VideoCardPropertyBadge } from './VideoCardPropertyBadge';
import { VideoCardTimestamp } from './VideoCardTimestamp';
import { MenuPanel } from '../MenuPanel/MenuPanel';
import { ParagraphMd } from '../Type';
import { StaffPicksBadgeJustSp } from '../Illustrations';
import {
  SocialChipFacebook,
  SocialChipYoutube,
  PaperPlane,
  Gear,
} from '../Icons';
import { ButtonIconOnly } from '../ButtonIconOnly/ButtonIconOnly';
import { TooltipOverlay } from '../TooltipOverlay/TooltipOverlay';
import { VideoCardFooterActionsGrid } from './VideoCardFooterActionsGrid';

import { Story } from '../../.storybook/ui/Story';
import styled from 'styled-components';

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-height: 20rem;
  position: relative;

  > div {
    flex: 0 0 calc(25% - 2rem);
    margin: 1rem;
  }
`;

const componentName = 'Video Card';

storiesOf(`components/${componentName}`, module).add('basic', () => (
  <Story title={componentName} subTitle="basic" width="100%">
    <Grid>
      <div>
        <VideoCard
          onClick={() => console.log('clicked')}
          onCheckBoxClick={() => console.log('checkbox clicked')}
          thumbnailBrandDecorationArea={<StaffPicksBadgeJustSp />}
          thumbnailData={thumbnailData}
          // @ts-ignore
          thumbnailSocialBadgeArea={socialBadges}
          thumbnailTimestampArea={
            <VideoCardTimestamp timestamp="04:15" />
          }
          thumbnailVideoCardPropertiesArea={videoProperties}
          title="Le Futur Sera Chauve / The Bald Futur, Encore, Le Futur Sera Chauve / The Bald Futur "
          titleSubheader={<span>8432 plays &#183; 5d</span>}
          footer={
            <VideoCardFooterActionsGrid
              actionItems={actionButtonsFull}
            />
          }
        />
      </div>
      <div>
        <VideoCard
          onClick={() => console.log('clicked')}
          onCheckBoxClick={() => console.log('checkbox clicked')}
          thumbnailBrandDecorationArea={<StaffPicksBadgeJustSp />}
          thumbnailData={thumbnailData}
          // @ts-ignore
          thumbnailSocialBadgeArea={socialBadges}
          thumbnailTimestampArea={
            <VideoCardTimestamp timestamp="04:15" />
          }
          thumbnailVideoCardPropertiesArea={videoProperties}
          title="Le Futur Sera Chauve / The Bald Futur, Encore, Le Futur Sera Chauve / The Bald Futur "
          titleSubheader={<span>8432 plays &#183; 5d</span>}
          footer={
            <VideoCardFooterActionsGrid
              actionItems={actionButtonsFull}
            />
          }
        />
      </div>
      <div>
        <VideoCard
          onClick={() => console.log('clicked')}
          onCheckBoxClick={() => console.log('checkbox clicked')}
          thumbnailBrandDecorationArea={<StaffPicksBadgeJustSp />}
          thumbnailData={thumbnailData}
          // @ts-ignore
          thumbnailSocialBadgeArea={socialBadges}
          thumbnailTimestampArea={
            <VideoCardTimestamp timestamp="04:15" />
          }
          thumbnailVideoCardPropertiesArea={videoProperties}
          title="Le Futur Sera Chauve / The Bald Futur, Encore, Le Futur Sera Chauve / The Bald Futur "
          titleSubheader={<span>8432 plays &#183; 5d</span>}
          footer={
            <VideoCardFooterActionsGrid
              actionItems={actionButtonsFull}
            />
          }
        />
      </div>
    </Grid>
  </Story>
));

const thumbnailData = [
  {
    thumbnailAltText: 'Le Futur Sera Chauve / The Bald Future',
    thumbnailSrc:
      'https://i.vimeocdn.com/video/685707758_390x220.jpg',
    thumbnailSrcSet:
      'https://i.vimeocdn.com/video/685707758_780x439.jpg 2x',
  },
];

const videoProperties = [
  <VideoCardPropertyBadge label="HDR" />,
  <VideoCardPropertyBadge label="360" />,
];

const socialBadges = [
  <MenuPanel
    alignment="left"
    menuContent={<ParagraphMd>Menu Content Here</ParagraphMd>}
    size="md"
  >
    <SocialChipFacebook />
  </MenuPanel>,
  <MenuPanel
    alignment="left"
    menuContent={<ParagraphMd>Menu Content Here</ParagraphMd>}
    size="md"
  >
    <SocialChipYoutube />
  </MenuPanel>,
];

const actionButtonsFull = [
  <TooltipOverlay tooltipText="Send to a friend 1">
    <ButtonIconOnly
      format="midDark"
      icon={<PaperPlane />}
      isButtonElement={false}
      size="sm"
    />
  </TooltipOverlay>,
  <TooltipOverlay tooltipText="Settings 2">
    <ButtonIconOnly
      format="midDark"
      icon={<Gear />}
      isButtonElement={false}
      size="sm"
    />
  </TooltipOverlay>,
  <TooltipOverlay tooltipText="Send to a friend 3">
    <ButtonIconOnly
      format="midDark"
      icon={<PaperPlane />}
      isButtonElement={false}
      size="sm"
    />
  </TooltipOverlay>,
  <TooltipOverlay tooltipText="Settings 4">
    <ButtonIconOnly
      format="midDark"
      icon={<Gear />}
      isButtonElement={false}
      size="sm"
    />
  </TooltipOverlay>,
  <TooltipOverlay tooltipText="Send to a friend 5">
    <ButtonIconOnly
      format="midDark"
      icon={<PaperPlane />}
      isButtonElement={false}
      size="sm"
    />
  </TooltipOverlay>,
];
