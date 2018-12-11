import React, { SFC } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

interface Props {
    labeledById: string;
    onClick?: () => void;
    subMenuItems: JSX.Element[];
}

export const VerticalMenuNestedSubMenu: SFC<Props> = ({
    labeledById,
    onClick,
    subMenuItems,
    ...props
}) => (
    <ListStyled {...props} aria-labelledby={labeledById}>
        {subMenuItems.map((_, i) => (
            <ListItemStyled onClick={onClick} key={`submenu${i}`}>
                {subMenuItems[i]}
            </ListItemStyled>
        ))}
    </ListStyled>
);
const ListStyled = styled.ul`
    width: 100%;
    margin-bottom: ${rem(4)};
`;
const ListItemStyled = styled.li`
    margin: ${rem(4)} 0 0 0;
    padding: 0 0 0 ${rem(20)};
    list-style-type: none;
`;
