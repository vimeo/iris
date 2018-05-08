import React from 'react';
import styled from 'styled-components';

const TruncatedTextWrapperStyled = styled.span`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

// ==================== TruncatedTextWrapper

const TruncatedTextWrapper: React.SFC<React.HTMLProps<HTMLSpanElement>> = (props) => {
    
    return (
        <TruncatedTextWrapperStyled>
            {props.children}
        </TruncatedTextWrapperStyled>
    );
};

export default TruncatedTextWrapper;
