import React from 'react';
import { storiesOf } from '@storybook/react';
import { VideoCard } from './VideoCard';
import { VideoCardPropertyBadge } from './VideoCardPropertyBadge';
import { VideoCardTimestamp } from './VideoCardTimestamp';
import { GridBlock } from '../GridBlock/GridBlock';
import { Grid } from '../Grid/Grid';
import { GridCol } from '../GridCol/GridCol';
import { MenuPanel } from '../MenuPanel/MenuPanel';
import { ParagraphMd } from '../Type';
import SPicon from '../illustrations/staff-picks-badge-just-sp.svg';
import FBChip from '../icons/third-party/social-chip-facebook.svg';
import YTChip from '../icons/third-party/social-chip-youtube.svg';
import SendIcon from '../icons/paper-plane.svg';
import GearIcon from '../icons/gear.svg';
import { ButtonIconOnly } from '../ButtonIconOnly/ButtonIconOnly';
import { TooltipOverlay } from '../TooltipOverlay/TooltipOverlay';
import { VideoCardFooterActionsGrid } from './VideoCardFooterActionsGrid';

storiesOf('components/VideoCard', module).add('basic', () => (
    <Grid isNested>
        <GridBlock>
            <GridCol mdSpan={12} lgSpan={6}>
                <VideoCard
                    onClick={() => console.log('clicked')}
                    onCheckBoxClick={() => console.log('checkbox clicked')}
                    thumbnailBrandDecorationArea={<SPicon />}
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
            </GridCol>
        </GridBlock>
    </Grid>
));

const thumbnailData = [
    {
        thumbnailAltText: 'Le Futur Sera Chauve / The Bald Future',
        thumbnailSrc: 'https://i.vimeocdn.com/video/685707758_390x220.jpg',
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
        <FBChip />
    </MenuPanel>,
    <MenuPanel
        alignment="left"
        menuContent={<ParagraphMd>Menu Content Here</ParagraphMd>}
        size="md"
    >
        <YTChip />
    </MenuPanel>,
];

const actionButtonsFull = [
    <TooltipOverlay tooltipText="Send to a friend 1">
        <ButtonIconOnly
            format="midDark"
            icon={<SendIcon title="Send to a friend 1" />}
            isButtonElement={false}
            size="sm"
        />
    </TooltipOverlay>,
    <TooltipOverlay tooltipText="Settings 2">
        <ButtonIconOnly
            format="midDark"
            icon={<GearIcon title="Settings 2" />}
            isButtonElement={false}
            size="sm"
        />
    </TooltipOverlay>,
    <TooltipOverlay tooltipText="Send to a friend 3">
        <ButtonIconOnly
            format="midDark"
            icon={<SendIcon title="Send to a friend 3" />}
            isButtonElement={false}
            size="sm"
        />
    </TooltipOverlay>,
    <TooltipOverlay tooltipText="Settings 4">
        <ButtonIconOnly
            format="midDark"
            icon={<GearIcon title="Settings 4" />}
            isButtonElement={false}
            size="sm"
        />
    </TooltipOverlay>,
    <TooltipOverlay tooltipText="Send to a friend 5">
        <ButtonIconOnly
            format="midDark"
            icon={<SendIcon title="Send to a friend 5" />}
            isButtonElement={false}
            size="sm"
        />
    </TooltipOverlay>,
];
