import React from 'react';
import { storiesOf } from '@storybook/react';
import { Story } from '../../.storybook/ui/Story';
import { text } from '@storybook/addon-knobs';
import styled from 'styled-components';
import { SocialButton } from './SocialButton';

const componentName = 'Button';
const Container = styled.div`
  width: 300px;
`;

storiesOf('Components|Button', module).add('social', () => (
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
