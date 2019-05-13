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
  min-height: 20rem;
  position: relative;

  > div {
    flex: 0 0 calc(100% - 2rem);
    margin: 1rem;
  }

  @media screen and (min-width: 35rem) {
    > div {
      flex: 0 0 calc(50% - 2rem);
    }
  }

  @media screen and (min-width: 50rem) {
    > div {
      flex: 0 0 calc(33% - 2rem);
    }
  }

  @media screen and (min-width: 80rem) {
    > div {
      flex: 0 0 calc(25% - 2rem);
    }
  }
`;

const componentName = 'Video Card';

storiesOf(`components|${componentName}`, module)
  .add('basic', () => (
    <Story title={componentName} subTitle="basic" width="100%">
      <Grid>
        <div>
          <VideoCard
            onClick={() => console.log('clicked')}
            onCheckBoxClick={() => console.log('checkbox clicked')}
            thumbnailBrandDecorationArea={<StaffPicksBadgeJustSp />}
            thumbnailData={thumbnailData}
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
  ))
  .add('albums', () => (
    <Story title={componentName} subTitle="basic" width="100%">
      <Grid>
        <div>
          <VideoCard
            isGroup
            isSelectable
            footer={
              <VideoCardFooterActionsGrid
                actionItems={[...actionButtonsFull.slice(0, 2)]}
              />
            }
            onClick={() => console.log('clicked')}
            thumbnailData={albumThumbnails}
            title="Sample Album"
            titleSubheader={<span>34 videos &#183; 5d</span>}
          />
        </div>
        <div>
          <VideoCard
            footer={
              <VideoCardFooterActionsGrid
                actionItems={[...actionButtonsFull.slice(0, 2)]}
              />
            }
            isGroup
            isProcessing
            isSelectable
            onClick={() => console.log('clicked')}
            thumbnailData={[...albumThumbnails.slice(0, 2)]}
            title="Sample Album"
            titleSubheader={<span>2 videos &#183; 5d</span>}
          />
        </div>
        <div>
          <VideoCard
            footer={
              <VideoCardFooterActionsGrid
                actionItems={[...actionButtonsFull.slice(0, 2)]}
              />
            }
            isGroup
            isSelectable
            onClick={() => console.log('clicked')}
            thumbnailData={[...albumThumbnails.slice(0, 1)]}
            title="Sample Album"
            titleSubheader={<span>2 videos &#183; 5d</span>}
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

const albumThumbnails = [
  {
    thumbnailSrc:
      'https://i.vimeocdn.com/video/685157492_390x220.jpg',
  },
  {
    thumbnailSrc:
      'https://i.vimeocdn.com/video/679933026_390x220.jpg',
  },
  {
    thumbnailSrc:
      'https://i.vimeocdn.com/video/685157492_390x220.jpg',
  },
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
