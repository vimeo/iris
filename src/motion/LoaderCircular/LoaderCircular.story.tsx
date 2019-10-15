import React from 'react';
import { storiesOf } from '@storybook/react';

import { LoaderCircular as LC } from './LoaderCircular';

import { Story } from '../../storybook';
import styled from 'styled-components';

const LoaderCircular = styled(LC)`
  margin: 1rem;
`;

storiesOf('Motion|loaders', module).add('Loader Circular', () => (
  <Story title="Loader Circular">
    <LoaderCircular size="xs" />
    <LoaderCircular size="sm" />
    <LoaderCircular size="md" />
    <LoaderCircular size="lg" />
    <LoaderCircular size="xl" />
    <br />
    <br />
    <LoaderCircular size="xs" format="basic" />
    <LoaderCircular size="sm" format="basic" />
    <LoaderCircular size="md" format="basic" />
    <LoaderCircular size="lg" format="basic" />
    <LoaderCircular size="xl" format="basic" />
  </Story>
));
