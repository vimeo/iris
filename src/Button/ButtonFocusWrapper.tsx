import React, { SFC } from 'react';
import styled from 'styled-components';

export const LinkElementStyled = styled('span')`
    &:focus,
    a:focus {
        outline: none;
    }
`;

const ButtonFocusWrapper: SFC<React.HTMLProps<HTMLSpanElement>> = props => (
    <LinkElementStyled>{props.children}</LinkElementStyled>
);

export default ButtonFocusWrapper;
