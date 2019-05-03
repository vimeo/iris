import React from 'react';
import { storiesOf } from '@storybook/react';
import { Story } from '../../.storybook/ui/Story';
import { text } from '@storybook/addon-knobs';
import styled from 'styled-components';
import { SocialButtonFacebook } from './SocialButtonFacebook';
import { SocialButtonGoogle } from './SocialButtonGoogle';

const componentName = 'Button';
const Container = styled.div`
  width: 300px;
`;

const GoogleButton = styled(SocialButtonGoogle)`
  margin-top: 1rem;
`;

storiesOf('Components|Button', module).add('social', () => (
  <Story title={componentName} subTitle="Social Buttons">
    <Container>
      <SocialButtonFacebook autoWidth="fluid">
        {text('Facebook text', 'Join with Facebook')}
      </SocialButtonFacebook>
      <GoogleButton autoWidth="fluid">
        {text('Google text', 'Join with Google')}
      </GoogleButton>
    </Container>
  </Story>
));
