import React, { SFC } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { VideoCardStyleSettings } from './VideoCardHelpers';

export interface VideoCardFooterActionsGridProps
    extends React.HTMLProps<HTMLDivElement> {
    actionItems: Array<React.Component<any>>;
}

export interface VideoCardFooterActionsGridStyledProps
    extends React.HTMLProps<HTMLDivElement> {
    fillSpace: boolean;
}

// ==================== VideoCardFooterActionsGrid Styled
const VideoCardFooterActionsGridStyled = styled<
    VideoCardFooterActionsGridStyledProps,
    'div'
>('div')`
    display: inline-flex;
    justify-content: space-evenly;
    justify-self: ${props => (props.fillSpace ? 'center' : 'end')};
    width: ${props => (props.fillSpace ? '100%' : 'auto')};
`;

const VideoCardFooterActionsCell = styled<
    React.HTMLProps<HTMLDivElement>,
    'div'
>('div')`
    padding-right: ${rem(VideoCardStyleSettings.padding)};
    min-width: ${rem(VideoCardStyleSettings.actionButtonSize)};

    &:last-of-type {
        padding-right: 0;
    }
`;

const Wrapper = styled<React.HTMLProps<HTMLDivElement>, 'div'>('div')`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

// ==================== VideoCardFooterActionsGrid

const VideoCardFooterActionsGrid: SFC<VideoCardFooterActionsGridProps> = ({
    actionItems,
    
    ref: _, // filter out ref from styled component
    ...filteredProps
}) => {
    const suppressClickPropagation = e => {
        // clicks in the footer area should not trigger the onClick for the entireCard.
        e.stopPropagation();
    };

    let gridCells = [];
    const targetCellsCount = 5;
    const countDifference = targetCellsCount - actionItems.length;

    // make five cells. If there are not 5 buttons, front-load the empty ones.
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
                {...filteredProps}
            >
                {gridCells}
            </VideoCardFooterActionsGridStyled>
        </Wrapper>
    );
};

export default VideoCardFooterActionsGrid;
