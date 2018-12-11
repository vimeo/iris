import styled from 'styled-components';
import { rgba, rem } from 'polished';
import { COLORS } from '../globals/js/constants/COLORS';

export const Wrapper = styled.div<{ fluid: boolean }>`
    cursor: pointer;
    position: relative;
    padding-bottom: ${props => (props.fluid ? '0' : '100%')};
    margin-bottom: ${rem(20)};
    min-height: ${props => (props.fluid ? '100%' : rem(200))};
    border: 1px dashed rgba(179, 191, 200, 0.4);
    border-radius: ${rem(4)};
    background-color: ${COLORS.Paste};
    transform: scale(0.995);
    transition: 150ms ease-in-out;

    &:hover,
    &:focus,
    &:focus-within,
    &:active {
        outline: none;
        background: white;
        border: 1px dashed rgba(179, 191, 200, 0);
        transform: scale(0.9975);
        box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 10px -8px,
            rgba(0, 0, 0, 0.3) 0px 0px 4px -1px p {
            color: ${rgba(COLORS.VimeoBlue, 0.6)};
        }
        svg path {
            fill: ${rgba(COLORS.VimeoBlue, 0.6)};
        }
    }

    &:hover:not(:active) {
        transform: scale(1);
        box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 10px -8px,
            rgba(0, 0, 0, 0.3) 0px 0px 4px -1px;
    }
`;

export const Card = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    box-shadow: none;

    svg {
        height: ${rem(30)};

        path {
            fill: ${COLORS.RegentGray};
        }
    }
`;

export const Anchor = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    text-decoration: none;

    &:focus {
        outline: none;
    }

    p {
        margin-top: ${rem(12)};
        margin-bottom: 0;
        color: ${rgba(COLORS.RegentGray, 0.6)};
    }

    > svg {
        width: ${rem(24)};

        path {
            fill: ${rgba(COLORS.RegentGray, 0.6)};
        }
    }
`;
