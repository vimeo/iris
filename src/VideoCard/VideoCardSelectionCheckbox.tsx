import React, { SFC, MouseEventHandler } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { InputCheckbox } from '../InputCheckbox/InputCheckbox';
import { VideoCardStyleSettings } from './VideoCardHelpers';

export interface VideoCardSelectionCheckboxProps
    extends React.HTMLProps<HTMLInputElement> {
    isShowing?: boolean;
    label: string;
    onCheckBoxClick?: MouseEventHandler;
}

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

export const VideoCardSelectionCheckbox: SFC<
    VideoCardSelectionCheckboxProps
> = ({ isShowing, label, onCheckBoxClick, title, ref: _, ...props }) => {
    const handleCheckboxAreaClick = e => {
        e.stopPropagation();
        if ('function' === typeof onCheckBoxClick) {
            onCheckBoxClick(e);
        }
    };

    const handleCheckboxClick = e => {
        e.stopPropagation();
    };

    return (
        <WrapperStyled onClick={handleCheckboxAreaClick} isShowing={isShowing}>
            <InputCheckbox
                {...props}
                onClick={handleCheckboxClick}
                theme="dark"
                hideLabel
                label={label}
                readOnly
                id={title.replace(/[^A-Z0-9]/gi, '_')}
            />
        </WrapperStyled>
    );
};
