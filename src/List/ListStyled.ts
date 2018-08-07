import React from 'react';
import styled , {
    //@ts-ignore needed for cannot be named warning
    StyledComponentClass,
} from 'styled-components';
import { ListProps } from './ListTypes';
import { ListItemStyled } from '../ListItem/ListItemStyled';
import { ListVariableElement } from './ListVariableElement';

const LIST_TYPES = {
    'alphabet': 'lower-alpha',
    'ordered': 'decimal',
    'unordered': 'disc',
};

export const ListStyled = styled<React.HTMLProps<HTMLUListElement> & ListProps, any>(ListVariableElement)`
    margin: 0;
    padding: 0;
    
    ${ListItemStyled} {
        list-style-type: ${props => LIST_TYPES[props.format] || LIST_TYPES.unordered}
    }
`;
