import React, { SFC } from 'react';
import RightArrow from '../Icons/chevron-right.svg';
import styled from 'styled-components';
import { rem } from 'polished';
import { COLORS } from '../Legacy/COLORS';

interface Props {
    nestedButtonLabel: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const VerticalMenuToggleButton: SFC<Props> = ({
    nestedButtonLabel,
    ...props
}) => (
    <ButtonStyled {...props}>
        <RightArrowStyled title={nestedButtonLabel} />
    </ButtonStyled>
);

const ButtonStyled = styled.button`
    display: block;
    position: relative;
    width: ${rem(20)};
    height: ${rem(20)};
    color: ${COLORS.AstroGranite};
    border: 0;
    border-radius: ${rem(10)};
    background: transparent;
    align-items: center;
    &:hover {
        background-color: rgba(162, 175, 184, 0.16);
    }
`;
const RightArrowStyled = styled(RightArrow)`
    position: absolute;
    top: ${rem(1)};
    left: ${rem(2)};
    width: ${rem(18)};
    height: ${rem(18)};
    fill: currentColor;
`;
