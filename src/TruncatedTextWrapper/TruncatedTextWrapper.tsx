import React from 'react';
import styled from 'styled-components';

export interface TruncatedTextWrapperProps extends React.HTMLProps<HTMLSpanElement> {
    /**
     * sets a CSS display attribute on the span that creates the truncation
     */
    displayCSSType?: 'inline-block'| 'inline-flex' | 'flex' | 'block';
}

const TruncatedTextWrapperStyled = styled<TruncatedTextWrapperProps, 'span'>('span')`
    display: ${props => props.displayCSSType};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

// ==================== TruncatedTextWrapper

const TruncatedTextWrapper = ({
    ref: _,
    ...props
}: TruncatedTextWrapperProps) => {
    return (
        <TruncatedTextWrapperStyled
            {...props}
        />
    );
};

export default TruncatedTextWrapper;
