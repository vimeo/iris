import React from 'react';
import { ParagraphMd } from '../Type';
import InfoIcon from '../icons/circle-info.svg';
import styled, { css } from 'styled-components';
import { rem } from 'polished';
import { COLORS } from '../globals/js/constants/COLORS';
import { keyframes } from 'styled-components';

export const Wrapper = styled.div`
    position: fixed;
    z-index: 9995;
    bottom: 0;
    left: 0;
    width: 100%;
`;

interface ToastProps {
    format: 'warning' | 'neutral';
    actionLabel?: string;
    onMouseEnter: React.MouseEventHandler;
    onMouseLeave: React.MouseEventHandler;
}

const toastAnimation = ({ actionLabel }: ToastProps) => css`
    animation: ${toastKeyframes} ${actionLabel ? '6000ms' : '3000ms'}
        ease-in-out both;
`;

const toastKeyframes = actionLabel => keyframes`
    0%, 100% {
        opacity: 0;
        transform: translateY(${rem(28)}) translateX(-50%);
    }

    ${actionLabel ? '5%, 95%' : '10%, 90%'} {
        opacity: 1;
        transform: translateY(0) translateX(-50%);
    }
`;

export const ToastStyled = styled(
    ({ format, actionLabel, ...props }: ToastProps) => <div {...props} />,
)<ToastProps>`
    position: absolute;
    bottom: ${rem(28)};
    left: 50%;
    min-width: ${rem(140)};
    padding: ${rem(11)} ${rem(20)};
    border-radius: ${rem(3)};
    background: rgba(0, 0, 0, 0.9);
    box-shadow: 0 ${rem(6)} ${rem(10)} 0 rgba(0, 0, 0, 0.12);
    transform: translateX(-50%);
    text-align: center;

    ${toastAnimation};

    ${props =>
        props.format === 'warning' &&
        css`
            padding-left: ${rem(42)};
            text-align: left;
        `}
`;

export const Content = styled(ParagraphMd)`
    &:last-of-type {
        margin-bottom: 0;
    }
`;

export const InfoIconStyled = styled(InfoIcon)`
    position: absolute;
    top: ${rem(10)};
    left: ${rem(16)};
    width: ${rem(18)};
    height: auto;

    * {
        fill: ${COLORS.White};
    }
`;

export const ActionLink = styled.a`
    color: ${COLORS.White};
    text-decoration: underline;

    &:hover {
        color: ${COLORS.White};
        text-decoration: none;
    }
`;
