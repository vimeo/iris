import React, { SFC } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { VideoCardStyleSettings } from './VideoCardHelpers';
import { VideoCardThumbnailData } from './VideoCard';
import { COLORS } from '../Legacy/';

export interface VideoCardThumbnailGroupProps
    extends React.HTMLProps<HTMLDivElement> {
    thumbnailData: VideoCardThumbnailData[];
}
// ==================== VideoCardThumbnailGroup Styled

const WrapperStyled = styled<SFC<HTMLDivElement>, 'div'>('div')`
    padding-bottom: 56.25%; // this is forces this area into a thumbnail aspcect ratio
`;

const ThumbnailsStyled = styled<SFC<HTMLDivElement>, 'div'>('div')`
    display: flex;
    padding: ${rem(VideoCardStyleSettings.padding)}
        ${rem(VideoCardStyleSettings.padding)} 0;
    position: absolute;
    width: 100%;
    height: 100%;
`;

const MinorThumbnailsWrapper = styled<SFC<HTMLDivElement>, 'div'>('div')`
    display: flex;
    flex: 0 1 40%;
    flex-direction: column;
    overflow: hidden;
    height: 100%;
`;

const MajorThumbnail = styled<SFC<HTMLDivElement>, 'div'>('div')`
    display: flex;
    flex: 0 1 60%;
`;

const MinorThumbnail = styled<SFC<HTMLDivElement>, 'div'>('div')`
    display: flex;
    height: 50%;
    flex-basis: 50%;
    margin: 0 0 0 ${rem(VideoCardStyleSettings.padding / 2)};

    &:last-of-type {
        margin-top: ${rem(VideoCardStyleSettings.padding / 2)};
    }
`;

const GroupThumbnailImage = styled<SFC<HTMLDivElement>, 'div'>('div')`
    width: 100%;
    height: auto;
    border-radius: ${rem(2)};
    background-size: cover;
    background-position: center;
    background-color: ${COLORS.Porcelain};
`;
// ==================== VideoCardThumbnailGroup

export const VideoCardThumbnailGroup: SFC<VideoCardThumbnailGroupProps> = ({
    thumbnailData,
    // @ts-ignore
    ref: _,
}) => (
    <WrapperStyled>
        <ThumbnailsStyled>
            <MajorThumbnail>
                <GroupThumbnailImage
                    style={
                        thumbnailData[0] && {
                            backgroundImage: `url(${
                                thumbnailData[0].thumbnailSrc
                            })`,
                        }
                    }
                />
            </MajorThumbnail>
            <MinorThumbnailsWrapper>
                <MinorThumbnail>
                    <GroupThumbnailImage
                        style={
                            thumbnailData[1] && {
                                backgroundImage: `url(${
                                    thumbnailData[1].thumbnailSrc
                                })`,
                            }
                        }
                    />
                </MinorThumbnail>
                <MinorThumbnail>
                    <GroupThumbnailImage
                        style={
                            thumbnailData[2] && {
                                backgroundImage: `url(${
                                    thumbnailData[2].thumbnailSrc
                                })`,
                            }
                        }
                    />
                </MinorThumbnail>
            </MinorThumbnailsWrapper>
        </ThumbnailsStyled>
    </WrapperStyled>
);
