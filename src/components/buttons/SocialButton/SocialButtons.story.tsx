import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import { SocialButton } from './SocialButton';

import { Story } from '../../../storybook';

const componentName = 'Button';
const Container = styled.div`
  width: 300px;
`;

storiesOf('Components|buttons/', module).add('social', () => (
  <Story title={componentName} subTitle="Social Buttons">
    <Container>
      <SocialButton brand="facebook" autoWidth="fluid">
        {text('Facebook text', 'Join with Facebook')}
      </SocialButton>
      <br />
      <br />
      <SocialButton brand="google" autoWidth="fluid">
        {text('Google text', 'Join with Google')}
      </SocialButton>
    </Container>
  </Story>
));
