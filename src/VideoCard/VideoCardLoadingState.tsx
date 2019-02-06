import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { rem } from 'polished';
import { VideoCardStyleSettings } from './VideoCardHelpers';

const WrapperStyled = styled('div')`
  position: absolute;
  top: 0;
  width: 100%;
`;

const loaderBackgroundAnimation = keyframes`
    from {
        background-position: 100% 0;
    }
    to {
        background-position: -100% 0;
    }
`;

const loadingGradient = css`
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.02) 25%,
    rgba(0, 0, 0, 0.04) 50%,
    rgba(0, 0, 0, 0.02) 75%,
    rgba(0, 0, 0, 0) 100%
  );
  background-size: 200%;
  animation: ${loaderBackgroundAnimation} 2.5s linear infinite;
  transiton: 200ms;
`;

const ThumbnailLoadingStyled = styled.div`
    border-radius: ${rem(VideoCardStyleSettings.borderRadius)}
        ${rem(VideoCardStyleSettings.borderRadius)} 0 0;
    width: 100%;
    padding-bottom: 56.25%;
    ${loadingGradient}
    margin-bottom: ${rem(8)};
    animation-delay: 500ms;
`;

const TitleLoadingStyled = styled.div`
    width: calc(100% - ${rem(VideoCardStyleSettings.padding * 2)});
    margin-left: ${rem(VideoCardStyleSettings.padding)};
    height: ${rem(16)};
    ${loadingGradient}
    margin-bottom: ${rem(8)};
    animation-delay: 1000ms;
`;

const SubTitleLoadingStyled = styled.div`
  width: calc(50% - ${rem(VideoCardStyleSettings.padding)});
  margin-left: ${rem(VideoCardStyleSettings.padding)};
  height: ${rem(16)};
  ${loadingGradient};
`;

export const VideoCardLoadingState = props => {
  const suppressClickPropagation = e => {
    e.stopPropagation();
  };

  return (
    <WrapperStyled {...props} onClick={suppressClickPropagation}>
      <ThumbnailLoadingStyled />
      <TitleLoadingStyled />
      <SubTitleLoadingStyled />
    </WrapperStyled>
  );
};
