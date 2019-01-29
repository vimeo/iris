import React, { SFC } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { VideoCardStyleSettings } from './VideoCardHelpers';

export interface VideoCardContextInfoAreaProps {
  /**
   * Icon decoration for intro header, for likes use <VideoCardLikeIcon />
   */
  contextSubHeaderIcon?: React.ReactNode;
  /**
   * Main context attribution, can be a string or a complex React node (e.g. a link).
   */
  contextAttributionHeader: React.ReactNode;
}

export interface WrapperStyledProps
  extends React.HTMLProps<HTMLDivElement> {
  hasIcon: boolean;
}

const ContextIconSize = 14;
// ==================== VideoCardContextArea Styled
const WrapperStyled = styled<WrapperStyledProps, 'div'>('div')`
  display: flex;
  height: ${rem(VideoCardStyleSettings.contextAreaHeight)};
  padding: ${rem(VideoCardStyleSettings.padding / 2)}
    ${rem(VideoCardStyleSettings.padding)};
  align-items: center;
`;

const IconStyled = styled('div')`
  padding-top: ${rem(3)};
  margin-right: ${rem(4)};
  svg {
    height: ${rem(ContextIconSize)};
    width: ${rem(ContextIconSize)};
  }
`;

export const VideoCardContextInfoArea: SFC<
  VideoCardContextInfoAreaProps
> = ({
  contextAttributionHeader,
  contextSubHeaderIcon,
  ...filteredProps
}) => {
  const suppressClickPropagation = e => {
    e.stopPropagation();
  };

  return (
    <WrapperStyled
      {...filteredProps}
      onClick={suppressClickPropagation}
      hasIcon={contextSubHeaderIcon ? true : false}
    >
      {contextSubHeaderIcon && (
        <IconStyled>{contextSubHeaderIcon}</IconStyled>
      )}
      {contextAttributionHeader}
    </WrapperStyled>
  );
};
