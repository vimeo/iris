import styled from 'styled-components';
import { rgba, rem } from 'polished';
import COLORS from '../globals/js/constants/COLORS';

export const Wrapper = styled.div`
    cursor: pointer;
    position: relative;
    padding-bottom: 100%;
    margin-bottom: ${rem(20)};
    min-height: ${rem(200)}; // a reasonable fallback minimum height for the cta
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
        box-shadow: 0 7px 14px -5px rgba(0, 0, 0, 0.15),
            0 0 6px -1px rgba(0, 0, 0, 0.2);

        p {
            color: ${rgba(COLORS.VimeoBlue, 0.6)};
        }
        svg path {
            fill: ${rgba(COLORS.VimeoBlue, 0.6)};
        }
    }

    &:hover:not(:active) {
        transform: scale(1);
        box-shadow: 0 10px 20px -8px rgba(0, 0, 0, 0.15),
            0 0 9px -1px rgba(0, 0, 0, 0.3);
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
