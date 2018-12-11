import { NotificationProps } from './NotificationProps';
import styled from 'styled-components';
import { rgba, rem } from 'polished';
import { TRANSITIONS } from '../globals/js/constants/TRANSITIONS';
import { COLORS } from '../globals/js/constants/COLORS';

const notificationPaddingHorizontal = 16;
const notificationPaddingVertical = 12;
const notificationIconSize = 20;
const notificationIconMargin = 12;
const notificationDismissIconSize = 20;

const notificationColors = {
    neutral: {
        bg: COLORS.Foam,
        color: COLORS.VimeoBlue,
    },
    success: {
        bg: COLORS.RumSwizzle,
        color: COLORS.Pistachio,
    },
    warning: {
        bg: COLORS.PalePink,
        color: COLORS.SunsetOrange,
    },
};

const notificationBg = variant =>
    notificationColors[variant] && notificationColors[variant].bg;
const notificationColor = variant =>
    notificationColors[variant] && notificationColors[variant].color;

export const NotificationStyled = styled<NotificationProps, 'div'>('div')`
    position: relative;

    width: 100%;
    margin-bottom: ${rem(16)};
    padding-top: ${rem(notificationPaddingVertical)};
    padding-right: ${rem(
        notificationDismissIconSize +
            notificationPaddingHorizontal +
            notificationIconMargin,
    )};
    padding-bottom: ${rem(notificationPaddingVertical)};
    padding-left: ${props =>
        props.hasIcon ? rem(48) : rem(notificationPaddingHorizontal)};

    border-radius: ${rem(3)};
    background-color: ${props => notificationBg(props.variant)};

    transition: all ${TRANSITIONS.base};

    p:last-of-type {
        max-width: 44rem;
        margin-bottom: 0 !important;
    }

    .icon {
        position: absolute;
        top: ${props =>
            props.headerText ? rem(14) : rem(notificationPaddingVertical)};
        left: ${rem(notificationPaddingHorizontal)};

        svg {
            width: ${rem(notificationIconSize)};
            height: ${rem(notificationIconSize)};

            * {
                fill: ${props => notificationColor(props.variant)};
            }
        }
    }

    .dismissButtonWrapper {
        position: absolute;
        top: ${rem(4)};
        right: ${rem(4)};

        svg * {
            fill: ${props =>
                notificationColor(
                    props.variant,
                )} !important; // overrides button icon color for special case
        }

        &:hover button {
            background: ${props =>
                rgba(
                    notificationColor(props.variant),
                    0.1,
                )} !important; // overrides button icon color for special case
        }
    }
`;
