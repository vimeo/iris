import React, { SFC } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import InputCheckbox from '../InputCheckbox';
import { VideoCardStyleSettings } from './VideoCardHelpers';

export interface VideoCardSelectionCheckboxProps
    extends React.HTMLProps<HTMLInputElement> {
    isShowing?: boolean;
    label: string;
    onCheckBoxClick?: (event) => void;
}

// ==================== VideoCardSelectionCheckbox Styled

export interface WrapperStyledProps extends React.HTMLProps<HTMLDivElement> {
    isShowing?: boolean;
}

const WrapperStyled = styled<WrapperStyledProps, 'div'>('div')`
    display: ${props => (props.isShowing ? 'inline-flex' : 'none')};
    position: absolute;
    top: 0;
    left: 0;
    padding: ${rem(VideoCardStyleSettings.padding)}
        ${rem(VideoCardStyleSettings.padding)} 0;
`;

// ==================== VideoCardSelectionCheckbox

const VideoCardSelectionCheckbox: SFC<VideoCardSelectionCheckboxProps> = ({
    isShowing,
    label,
    onCheckBoxClick,
    ref: _, // filter out ref from styled component
    ...filteredProps
}) => {
    // these two handlers make it so that there is a bigger hitbox around the checkbox.
    const handleCheckboxAreaClick = e => {
        e.stopPropagation();
        if (typeof onCheckBoxClick === 'function') {
            onCheckBoxClick(e);
        }
    };

    const handleCheckboxClick = e => {
        e.stopPropagation();
    };

    return (
        <WrapperStyled onClick={handleCheckboxAreaClick} isShowing={isShowing}>
            <InputCheckbox
                {...filteredProps}
                onClick={handleCheckboxClick}
                size="md"
                theme="dark"
                hideLabel
                label={label}
                readOnly
            />
        </WrapperStyled>
    );
};

export default VideoCardSelectionCheckbox;
