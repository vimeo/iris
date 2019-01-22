import React from 'react';
import { storiesOf } from '@storybook/react';
import { NotificationNeutral } from '../NotificationNeutral/NotificationNeutral';
import { NotificationSuccess } from '../NotificationSuccess/NotificationSuccess';
import { NotificationWarning } from '../NotificationWarning/NotificationWarning';
import { ParagraphMd } from '../Type';

storiesOf('components/Notifications', module)
    .add(
        'neutral',
        () => (
            <NotificationNeutral
                id="someOptionalId"
                className="someOptionalClass"
            >
                <ParagraphMd>Lorem ipsum dolor sit amet.</ParagraphMd>
            </NotificationNeutral>
        ),
        {
            info: {
                inline: true,
                propTables: [NotificationNeutral],
            },
            options: {
                name: 'Iris',
                url: '#',
            },
        },
    )
    .add(
        'success',
        () => (
            <NotificationSuccess
                id="someOptionalId"
                className="someOptionalClass"
            >
                <ParagraphMd>Lorem ipsum dolor sit amet.</ParagraphMd>
            </NotificationSuccess>
        ),
        {
            info: {
                inline: true,
                propTables: [NotificationSuccess],
            },
            options: {
                name: 'Iris',
                url: '#',
            },
        },
    )
    .add(
        'warning',
        () => (
            <NotificationWarning
                id="someOptionalId"
                className="someOptionalClass"
            >
                <ParagraphMd>Lorem ipsum dolor sit amet.</ParagraphMd>
            </NotificationWarning>
        ),
        {
            info: {
                inline: true,
                propTables: [NotificationWarning],
            },
            options: {
                name: 'Iris',
                url: '#',
            },
        },
    );
