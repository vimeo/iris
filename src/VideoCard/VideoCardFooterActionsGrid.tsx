import React, { SFC, ReactNode } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { VideoCardStyleSettings } from './VideoCardHelpers';

export interface VideoCardFooterActionsGridProps {
  actionItems: ReactNode[];
}

export interface VideoCardFooterActionsGridStyledProps {
  fillSpace: boolean;
}

const VideoCardFooterActionsGridStyled = styled.div<any>`
  display: inline-flex;
  justify-content: space-evenly;
  justify-self: ${props => (props.fillSpace ? 'center' : 'end')};
  width: ${props => (props.fillSpace ? '100%' : 'auto')};
`;

const VideoCardFooterActionsCell = styled.div`
  padding-right: ${rem(VideoCardStyleSettings.padding)};
  min-width: ${rem(VideoCardStyleSettings.actionButtonSize)};

  &:last-of-type {
    padding-right: 0;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const VideoCardFooterActionsGrid: SFC<
  VideoCardFooterActionsGridProps
> = ({ actionItems, ...props }) => {
  const suppressClickPropagation = e => {
    e.stopPropagation();
  };

  const gridCells = [];
  const targetCellsCount = 5;
  const countDifference = targetCellsCount - actionItems.length;

  for (let i = 0; i < targetCellsCount; i++) {
    const isEmpty = i + 1 <= countDifference;

    gridCells.push(
      <VideoCardFooterActionsCell
        onClick={isEmpty ? null : suppressClickPropagation}
        key={`VideoCardFooterActionsCell-${i}`}
      >
        {!isEmpty && actionItems[i - countDifference]}
      </VideoCardFooterActionsCell>,
    );
  }

  return (
    <Wrapper>
      <VideoCardFooterActionsGridStyled
        fillSpace={actionItems.length > 3}
        {...props}
      >
        {gridCells}
      </VideoCardFooterActionsGridStyled>
    </Wrapper>
  );
};
