import React from 'react';
import { storiesOf } from '@storybook/react';
import { Story } from '../../../storybook';
import { text } from '@storybook/addon-knobs';
import styled from 'styled-components';
import { SocialButton } from './SocialButton';

const Container = styled.div`
  width: 300px;

  > * {
    margin: 1rem 0;
  }
`;

storiesOf('Components|buttons', module).add('Social Button', () => (
  <Story title="Social Button">
    <Container>
      <SocialButton brand="facebook" fluid>
        {text('Facebook text', 'Join with Facebook')}
      </SocialButton>
      <SocialButton brand="google" fluid>
        {text('Google text', 'Join with Google')}
      </SocialButton>
    </Container>
  </Story>
));
