import React, { SFC } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { VideoCardStyleSettings } from './VideoCardHelpers';
import * as COLORS from '../Color/Color';

export interface VideoCardThumbnailGroupProps
  extends React.HTMLProps<HTMLDivElement> {
  thumbnailData: VideoCardThumbnailData[];
}

export interface VideoCardThumbnailData {
  /**
   * Alt Text for Thumbnail, probably the video title. **Required** for single video cards, can be excluded for group cards.
   */
  thumbnailAltText?: string;
  /**
   * src URI info for thumbnail
   */
  thumbnailSrc: string;
  /**
   * srcSet URI info for thumbnail **Required** for single video cards, can be excluded for group cards.
   */
  thumbnailSrcSet?: string;
}
// ==================== VideoCardThumbnailGroup Styled

const WrapperStyled = styled.div<any>`
  padding-bottom: 56.25%;
`;

/* prettier-ignore */
const ThumbnailsStyled = styled.div<any>`
  display: flex;
  padding: ${rem(VideoCardStyleSettings.padding)}
    ${rem(VideoCardStyleSettings.padding)} 0;
  position: absolute;
  width: 100%;
  height: 100%;
  transition: 160ms ease;
`;

const MinorThumbnailsWrapper = styled.div<any>`
  display: flex;
  flex: 0 1 40%;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
`;

const SingleThumbnail = styled.div`
  display: flex;
  flex: 0 1 100%;
`;

const MajorThumbnail = styled.div<any>`
  display: flex;
  flex: 0 1 60%;
`;

const MinorThumbnail = styled.div<any>`
  display: flex;
  height: 50%;
  flex-basis: 50%;
  margin: 0 0 0 ${rem(VideoCardStyleSettings.padding / 2)};

  &:last-of-type {
    margin-top: ${rem(VideoCardStyleSettings.padding / 2)};
  }
`;

const GroupThumbnailImage = styled.div<any>`
  width: 100%;
  height: auto;
  border-radius: ${rem(2)};
  background-size: cover;
  background-position: center;
  background-color: ${COLORS.Porcelain};
`;

/* prettier-ignore */
export const VideoCardThumbnailGroup: SFC<
  VideoCardThumbnailGroupProps
> = ({ thumbnailData }) =>
  thumbnailData.length === 1 ? (
    <WrapperStyled>
      <ThumbnailsStyled>
        <SingleThumbnail>
          <GroupThumbnailImage
            style={
              thumbnailData[0] && {
                backgroundImage: `url(${
                  thumbnailData[0].thumbnailSrc
                })`,
              }
            }
          />
        </SingleThumbnail>
      </ThumbnailsStyled>
    </WrapperStyled>
  ) : (
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
