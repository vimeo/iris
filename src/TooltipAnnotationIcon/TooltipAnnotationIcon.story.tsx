import React from 'react';
import { storiesOf } from '@storybook/react';
import TooltipAnnotationIcon from './TooltipAnnotationIcon';
import { Header4 } from '../Type';

storiesOf('components/TooltipAnnotationIcon', module).add(
    'default',
    () => (
        <div>
            <TooltipAnnotationIcon size="md" tooltipText="I am a tooltip">
                <Header4>Tooltip</Header4>
            </TooltipAnnotationIcon>
        </div>
    ),
    {
        info: {
            inline: true,
            propTables: [TooltipAnnotationIcon],
        },
        notes: '',
    },
);
