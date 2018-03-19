import React from 'react';
import VideoCard, {
    VideoCardFooterActionsGrid,
    VideoCardFooterAttribution,
    VideoCardLiveBadge,
    VideoCardPropertyBadge,
    VideoCardTimestamp,
 } from './index';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import VideoCardFooterAttributionAPI from '../../data/tsdocsHTML/interfaces/_videocard_videocardfooterattribution_.videocardfooterattributionprops.html';
import VideoCardThumbnailDataAPI from '../../data/tsdocsHTML/interfaces/_videocard_videocard_.videocardthumbnaildata.html';
import MenuPanel from '../MenuPanel';
import Grid from '../Grid';
import GridBlock from '../GridBlock';
import GridCol from '../GridCol';
import SPicon from '../illustrations/staff-picks-badge-just-sp.svg';
import FBChip from '../icons/third-party/social-chip-facebook.svg';
import YTChip from '../icons/third-party/social-chip-youtube.svg';
import {
    ParagraphMd,
    Header3,
    Header4,
    Header5,
} from '../Type';
import TooltipOverlay from '../TooltipOverlay';
import ButtonIconOnly from '../ButtonIconOnly/ButtonIconOnly';
import SendIcon from '../icons/paper-plane.svg';
import GearIcon from '../icons/gear.svg';

const getApiHtml = (htmlData) => {
    return {
        __html: htmlData,
    };
};

const testClick = (e) => {
    console.log('clicked', e);
};

const testCheckboxClick = (e) => {
    console.log('clicked the checkbox', e);
};

const actionButtonsFull = [
    (
    <TooltipOverlay
        element="span"
        tooltipText="Send to a friend 1"
    >
        <ButtonIconOnly
            format="midDark"
            icon={<SendIcon title="Send to a friend 1" />}
            isButtonElement={false}
            size="sm"
        />
    </TooltipOverlay>
    ),
    (
    <TooltipOverlay
        element="span"
        tooltipText="Settings 2"
    >
        <ButtonIconOnly
            format="midDark"
            icon={<GearIcon title="Settings 2"/>}
            isButtonElement={false}
            size="sm"
        />
    </TooltipOverlay>
    ),
    (
    <TooltipOverlay
            element="span"
            tooltipText="Send to a friend 3"
        >
            <ButtonIconOnly
                format="midDark"
                icon={<SendIcon title="Send to a friend 3"/>}
                isButtonElement={false}
                size="sm"
            />
        </TooltipOverlay>
        ),
        (
    <TooltipOverlay
            element="span"
            tooltipText="Settings 4"
        >
            <ButtonIconOnly
                format="midDark"
                icon={<GearIcon title="Settings 4"/>}
                isButtonElement={false}
                size="sm"
            />
        </TooltipOverlay>
        ),
        (
    <TooltipOverlay
                element="span"
                tooltipText="Send to a friend 5"
            >
                <ButtonIconOnly
                    format="midDark"
                    icon={<SendIcon title="Send to a friend 5"/>}
                    isButtonElement={false}
                    size="sm"
                />
            </TooltipOverlay>
            ),
];


const actionButtonsJustTwo = [
    (
    <TooltipOverlay
        element="span"
        tooltipText="Send to a friend 1"
    >
        <ButtonIconOnly
            format="midDark"
            icon={<SendIcon title="Send to a friend"/>}
            isButtonElement={false}
            size="sm"
        />
    </TooltipOverlay>
    ),
    (
    <TooltipOverlay
        element="span"
        tooltipText="Settings 2"
    >
        <ButtonIconOnly
            format="midDark"
            icon={<GearIcon title="Settings"/>}
            isButtonElement={false}
            size="sm"
        />
    </TooltipOverlay>
    ),
];

const exampleAttribution = (
    <VideoCardFooterAttribution
        actionMenuDescription="More"
        actionMenuContent={<ParagraphMd>User Menu Here</ParagraphMd>}
        userAvatarSrc="https://i.vimeocdn.com/portrait/23898613_75x75.webp" userAvatarSrcSet="https://i.vimeocdn.com/portrait/23898613_150x150.webp 2x"
        userName="Killian Vilim"
    />
);

const exampleAttributionLongName = (
    <VideoCardFooterAttribution
        actionMenuDescription="See additional actions"
        actionMenuContent={<ParagraphMd>User Menu Here</ParagraphMd>}
        userAvatarSrc="https://i.vimeocdn.com/portrait/23898613_75x75.webp" userAvatarSrcSet="https://i.vimeocdn.com/portrait/23898613_150x150.webp 2x"
        userName="John Jacob Jingleheimer Schmidt"
    />
);

const singleThumbnail = [
    {
        thumbnailAltText: 'Le Futur Sera Chauve / The Bald Future',
        thumbnailSrc: 'https://i.vimeocdn.com/video/685707758_390x220.webp',
        thumbnailSrcSet: 'https://i.vimeocdn.com/video/685707758_780x439.webp 2x',
    },
];

const albumThumbnails = [
    {
        thumbnailSrc: 'https://i.vimeocdn.com/video/685157492_390x220.webp',
    },
    {
        thumbnailSrc: 'https://i.vimeocdn.com/video/679933026_390x220.webp',
    },
    {
        thumbnailSrc: 'https://i.vimeocdn.com/video/685707758_390x220.webp',
    },
];

const albumThumbnailsIncomplete = [
    {
        thumbnailSrc: 'https://i.vimeocdn.com/video/685157492_390x220.webp',
    },
    {
        thumbnailSrc: 'https://i.vimeocdn.com/video/679933026_390x220.webp',
    },
];

const socialBadges = [
    (
    <MenuPanel
        alignment="left"
        menuContent={<ParagraphMd>Menu Content Here</ParagraphMd>}
        size="md"
    >
        <FBChip />
    </MenuPanel>
    ),
    (
    <MenuPanel
        alignment="left"
        menuContent={<ParagraphMd>Menu Content Here</ParagraphMd>}
        size="md"
    >
            <YTChip />
    </MenuPanel>
    ),
];

const videoProperties = [
(<VideoCardPropertyBadge label="HDR" />),
(<VideoCardPropertyBadge label="360" />),
];

class VideoCardDocs extends React.Component {
    render() {
        return (
            <div className="Pattern__docs">
                <div data-code>
                <ParagraphMd>Video Cards represent videos in a grid and have several modular areas that can contain different content based on audience.</ParagraphMd>
                    <Grid isNested>
                        <GridBlock>
                            <GridCol mdSpan={12} lgSpan={8}>
                                <VideoCard
                                    footer={(
                                        <VideoCardFooterActionsGrid
                                            actionItems={actionButtonsFull}
                                        />
                                    )}
                                    onClick={testClick}
                                    thumbnailBrandDecorationArea={<SPicon />}
                                    thumbnailData={singleThumbnail}
                                    thumbnailSocialBadgeArea={socialBadges}
                                    thumbnailTimestampArea={(
                                        <VideoCardTimestamp timestamp="04:15"/>
                                    )}
                                    thumbnailVideoCardPropertiesArea={videoProperties}
                                    title="Le Futur Sera Chauve / The Bald Future"
                                    titleSubheader={<span>8432 plays &#183; 5d</span>}
                                />
                            </GridCol>
                            <GridCol mdSpan={12} lgSpan={8}>
                                <VideoCard
                                    footer={exampleAttribution}
                                    isPrivate
                                    isSelectable
                                    onClick={testClick}
                                    onCheckBoxClick={testCheckboxClick}
                                    thumbnailBrandDecorationArea={<SPicon />}
                                    thumbnailData={singleThumbnail}
                                    thumbnailSocialBadgeArea={socialBadges}
                                    thumbnailTimestampArea={(
                                        <VideoCardTimestamp timestamp="04:15"/>
                                    )}
                                    thumbnailVideoCardPropertiesArea={videoProperties}

                                    title="Very Very Long Title Example for Truncation"
                                    titleSubheader={<span>8432 plays &#183; 5d</span>}
                                />
                            </GridCol>
                            <GridCol mdSpan={12} lgSpan={8}>
                                <VideoCard
                                    footer={exampleAttributionLongName}
                                    isSelectable
                                    isSelected
                                    onClick={testClick}
                                    onCheckBoxClick={testCheckboxClick}
                                    thumbnailBrandDecorationArea={<SPicon />}
                                    thumbnailData={singleThumbnail}
                                    thumbnailSocialBadgeArea={socialBadges}
                                    thumbnailTimestampArea={(
                                        <VideoCardLiveBadge
                                            liveLabelString="Live"
                                        />
                                    )}
                                    thumbnailVideoCardPropertiesArea={videoProperties}
                                    title="Le Futur Sera Chauve / The Bald Future"
                                    titleSubheader={<span>8432 plays &#183; 5d</span>}
                                />
                            </GridCol>
                            <GridCol mdSpan={12} lgSpan={8}>
                                <VideoCard
                                    isGroup
                                    isSelectable
                                    footer={(
                                        <VideoCardFooterActionsGrid
                                            actionItems={actionButtonsJustTwo}
                                        />
                                    )}
                                    onClick={testClick}
                                    thumbnailData={albumThumbnails}
                                    title="Sample Album"
                                    titleSubheader={<span>34 videos &#183; 5d</span>}
                                />
                            </GridCol>
                            <GridCol mdSpan={12} lgSpan={8}>
                                <VideoCard
                                    footer={(
                                        <VideoCardFooterActionsGrid
                                            actionItems={actionButtonsJustTwo}
                                        />
                                    )}
                                    isGroup
                                    isSelectable
                                    onClick={testClick}
                                    thumbnailData={albumThumbnailsIncomplete}
                                    title="Sample Album"
                                    titleSubheader={<span>2 videos &#183; 5d</span>}
                                />
                            </GridCol>
                        </GridBlock>
                    </Grid>
                </div>
                <ExampleSource>
                    {`
import {
    VideoCard,
    VideoCardFooterActionsGrid,
    VideoCardFooterAttribution,
    VideoCardLiveBadge,
    VideoCardPropertyBadge,
    VideoCardTimestamp,
 } from '@vimeo/iris';

<VideoCard
    footer={(
        <VideoCardFooterActionsGrid
            actionItems={actionButtonsFull}
        />
    )}
    onClick={testClick}
    thumbnailBrandDecorationArea={<SPicon />}
    thumbnailData={singleThumbnail}
    thumbnailSocialBadgeArea={socialBadges}
    thumbnailTimestampArea={(
        <VideoCardTimestamp timestamp="04:15"/>
    )}
    thumbnailVideoCardPropertiesArea={videoProperties}
    title="Le Futur Sera Chauve / The Bald Future"
    titleSubheader={<span>8432 plays &#183; 5d</span>}
/>

<VideoCard
    footer={exampleAttribution}
    isPrivate
    isSelectable
    onClick={testClick}
    onCheckBoxClick={testCheckboxClick}
    thumbnailBrandDecorationArea={<SPicon />}
    thumbnailData={singleThumbnail}
    thumbnailSocialBadgeArea={socialBadges}
    thumbnailTimestampArea={(
        <VideoCardTimestamp timestamp="04:15"/>
    )}
    thumbnailVideoCardPropertiesArea={videoProperties}

    title="Very Very Long Title Example for Truncation"
    titleSubheader={<span>8432 plays &#183; 5d</span>}
/>

<VideoCard
    footer={exampleAttributionLongName}
    isSelectable
    isSelected
    onClick={testClick}
    onCheckBoxClick={testCheckboxClick}
    thumbnailBrandDecorationArea={<SPicon />}
    thumbnailData={singleThumbnail}
    thumbnailSocialBadgeArea={socialBadges}
    thumbnailTimestampArea={(
        <VideoCardLiveBadge
            liveLabelString="Live"
        />
    )}
    thumbnailVideoCardPropertiesArea={videoProperties}
    title="Le Futur Sera Chauve / The Bald Future"
    titleSubheader={<span>8432 plays &#183; 5d</span>}
/>

<VideoCard
    isGroup
    isSelectable
    footer={(
        <VideoCardFooterActionsGrid
            actionItems={actionButtonsJustTwo}
        />
    )}
    onClick={testClick}
    thumbnailData={albumThumbnails}
    title="Sample Album"
    titleSubheader={<span>34 videos &#183; 5d</span>}
/>

<VideoCard
    footer={(
        <VideoCardFooterActionsGrid
            actionItems={actionButtonsJustTwo}
        />
    )}
    isGroup
    isSelectable
    onClick={testClick}
    thumbnailData={albumThumbnailsIncomplete}
    title="Sample Album"
    titleSubheader={<span>2 videos &#183; 5d</span>}
/>
                    `}
                </ExampleSource>
                <Header3>Prop Value Variables Used in Above Examples</Header3>
                <ExampleSource>
                    {`
const actionButtonsFull = [
    (
    <TooltipOverlay
        element="span"
        tooltipText="Send to a friend"
    >
        <ButtonIconOnly
            format="midDark"
            icon={<SendIcon title="Send to a friend"/>}
            isButtonElement={false}
            size="sm"
        />
    </TooltipOverlay>
    ),
    (
    <TooltipOverlay
        element="span"
        tooltipText="Settings"
    >
        <ButtonIconOnly
            format="midDark"
            icon={<GearIcon title="Settings"/>}
            isButtonElement={false}
            size="sm"
        />
    </TooltipOverlay>
    ),
    (
    <TooltipOverlay
            element="span"
            tooltipText="Send to a friend"
        >
            <ButtonIconOnly
                format="midDark"
                icon={<SendIcon title="Send to a friend"/>}
                isButtonElement={false}
                size="sm"
            />
        </TooltipOverlay>
        ),
        (
    <TooltipOverlay
            element="span"
            tooltipText="Settings"
        >
            <ButtonIconOnly
                format="midDark"
                icon={<GearIcon title="Settings"/>}
                isButtonElement={false}
                size="sm"
            />
        </TooltipOverlay>
        ),
        (
    <TooltipOverlay
                element="span"
                tooltipText="Send to a friend"
            >
                <ButtonIconOnly
                    format="midDark"
                    icon={<SendIcon title="Send to a friend"/>}
                    isButtonElement={false}
                    size="sm"
                />
            </TooltipOverlay>
            ),
];


const actionButtonsJustTwo = [
    (
    <TooltipOverlay
        element="span"
        tooltipText="Send to a friend"
    >
        <ButtonIconOnly
            format="midDark"
            icon={<SendIcon title="Send to a friend"/>}
            isButtonElement={false}
            size="sm"
        />
    </TooltipOverlay>
    ),
    (
    <TooltipOverlay
        element="span"
        tooltipText="Settings"
    >
        <ButtonIconOnly
            format="midDark"
            icon={<GearIcon title="Settings"/>}
            isButtonElement={false}
            size="sm"
        />
    </TooltipOverlay>
    ),
];

const exampleAttribution = (
    <VideoCardFooterAttribution
        actionMenuDescription="See additional actions"
        actionMenuContent={<ParagraphMd>User Menu Here</ParagraphMd>}
        userAvatarSrc="https://i.vimeocdn.com/portrait/23898613_75x75.webp" userAvatarSrcSet="https://i.vimeocdn.com/portrait/23898613_150x150.webp 2x"
        userName="Killian Vilim"
    />
);

const exampleAttributionLongName = (
    <VideoCardFooterAttribution
        actionMenuDescription="See additional actions"
        actionMenuContent={<ParagraphMd>User Menu Here</ParagraphMd>}
        userAvatarSrc="https://i.vimeocdn.com/portrait/23898613_75x75.webp" userAvatarSrcSet="https://i.vimeocdn.com/portrait/23898613_150x150.webp 2x"
        userName="John Jacob Jingleheimer Schmidt"
    />
);

const singleThumbnail = [
    {
        thumbnailAltText: 'Le Futur Sera Chauve / The Bald Future',
        thumbnailSrc: 'https://i.vimeocdn.com/video/685157492_390x220.webp',
        thumbnailSrcSet: 'https://i.vimeocdn.com/video/685157492_780x439.webp 2x',
    },
];

const albumThumbnails = [
    {
        thumbnailSrc: 'https://i.vimeocdn.com/video/685157492_390x220.webp',
    },
    {
        thumbnailSrc: 'https://i.vimeocdn.com/video/679933026_390x220.webp',
    },
    {
        thumbnailSrc: 'https://i.vimeocdn.com/video/685157492_390x220.webp',
    },
];

const albumThumbnailsIncomplete = [
    {
        thumbnailSrc: 'https://i.vimeocdn.com/video/685157492_390x220.webp',
    },
    {
        thumbnailSrc: 'https://i.vimeocdn.com/video/679933026_390x220.webp',
    },
];

const socialBadges = [
    (
    <MenuPanel
        alignment="left"
        menuContent={<ParagraphMd>Menu Content Here</ParagraphMd>}
        size="md"
    >
        <FBChip />
    </MenuPanel>
    ),
    (
    <MenuPanel
        alignment="left"
        menuContent={<ParagraphMd>Menu Content Here</ParagraphMd>}
        size="md"
    >
            <YTChip />
    </MenuPanel>
    ),
];

const videoProperties = [
(<VideoCardPropertyBadge label="HDR" />),
(<VideoCardPropertyBadge label="360" />),
];

                        `}
                    </ExampleSource>
                    <Header3>Sub-Component and Special Prop Notes</Header3>

                    <Header4>thumbnailData Prop Interface</Header4>
                    <ParagraphMd>The <code>thumbnailData</code> prop takes an array of data to show thumnails. Single Video cards should take one object in the Array, Group Video Cards can take up to 3.</ParagraphMd>
                    <div dangerouslySetInnerHTML={getApiHtml(VideoCardThumbnailDataAPI)} />

                    <Header4>VideoCardFooterActionsGrid Component</Header4>
                    <ParagraphMd>This component receives a <code>actionItems</code>prop that should be an array of up to 5 <code>ButtonIconOnly</code> components wrapped in tooltips.</ParagraphMd>

                    <Header4>VideoCardFooterAttribution Component</Header4>
                    <ParagraphMd>This component is used to show attribution of the video and an action menu.</ParagraphMd>
                    <Header5>VideoCardFooterAttribution Props</Header5>
                    <div dangerouslySetInnerHTML={getApiHtml(VideoCardFooterAttributionAPI)} />

                    <Header4>VideoCardLiveBadge Component</Header4>
                    <ParagraphMd>This component produces a Live badge and takes a single <code>liveLabelString</code> string prop that should be the translated "Live" label.</ParagraphMd>

                    <Header4>VideoCardPropertyBadge Component</Header4>
                    <ParagraphMd>This component produces a Video Property badge and takes a single <code>label</code> string prop that should be the translated property label (e.g. "HDR").</ParagraphMd>

                    <Header4>VideoCardTimestamp Component</Header4>
                    <ParagraphMd>This component produces a Video Timestamp badge and takes a single <code>timestamp</code> string prop that should be the localized timestamp.</ParagraphMd>

                </div>
        );
    }
}

export default VideoCardDocs;
