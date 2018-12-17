import React, { SFC } from 'react';
import AlertIcon from '../icons/circle-warning.svg';
import SuccessIcon from '../icons/checkmark.svg';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { COLORS } from '../Legacy/COLORS';
import { rem } from 'polished';

interface Props {
    format?: 'negative' | 'positive' | 'neutral';
}

export const InputLabelStateIcon: SFC<Props> = ({ format, ...props }) => (
    <IconStyled format={format} {...props} />
);

const inputIconFadeIn = keyframes`
    0% { opacity: 0 }
    100% { opacity: 1 }
`;

const iconColor = ({ format }) =>
    ({
        negative: `* { fill: ${COLORS.SunsetOrange} }`,
        positive: `* { fill: ${COLORS.Pistachio} }`,
    }[format]);

const IconStyled = styled(({ format, ...props }: Props) =>
    format === 'positive' ? (
        <SuccessIcon {...props} />
    ) : (
        <AlertIcon {...props} />
    ),
)`
    width: 1.125rem;
    height: 1.125rem;
    margin-bottom: ${rem(-3)};
    margin-left: 0.5rem;
    animation-name: ${inputIconFadeIn} 600ms ease-out forwards;
    ${iconColor}
`;
