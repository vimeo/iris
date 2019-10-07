import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { ButtonLoadingState as B } from './ButtonLoadingState';
import { Gear } from '../../../icons';
import { Story } from '../../../storybook';
import styled from 'styled-components';

const componentName = 'Button';

const ButtonLoadingState = styled(B)`
  margin: 0 1rem 1rem 0;
`;

storiesOf('Components|buttons/', module).add('loading state', () => (
  <Story title={componentName} subTitle="Loading State">
    <ButtonLoadingStateDocs />
  </Story>
));

const ButtonLoadingStateDocs = () => {
  const [loading, setLoading] = useState(false);
  const doClick = () => setLoading(loading => !loading);

  return (
    <>
      <ButtonLoadingState
        isLoading={!loading}
        onClick={doClick}
        size="lg"
      >
        Click Me
      </ButtonLoadingState>
      <ButtonLoadingState
        icon={<Gear />}
        isLoading={loading}
        onClick={doClick}
        format="primaryOutline"
        size="md"
      >
        Click Me
      </ButtonLoadingState>
      <ButtonLoadingState
        icon={<Gear />}
        isLoading={!loading}
        onClick={doClick}
        format="success"
        size="sm"
      >
        Click Me
      </ButtonLoadingState>
      <ButtonLoadingState
        isLoading={loading}
        onClick={doClick}
        format="secondary"
        size="xs"
      >
        Click Me
      </ButtonLoadingState>
    </>
  );
};
