import React from 'react';

import styled, {
        // @ts-ignore
        StyledComponentClass
} from 'styled-components';

export const LinkElementStyled = styled('span')`
    &:focus,
    a:focus {
        outline: none;
    }
`;

const ButtonFocusWrapper = (props: React.HTMLProps<HTMLSpanElement>) => (
    <LinkElementStyled>
        {props.children}
    </LinkElementStyled>
);

export default ButtonFocusWrapper;
