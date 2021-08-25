import React from 'react';
import styled from 'styled-components';

import { SocialButton as SB } from './SocialButton';

export default {
  title: 'components/SocialButton',
  component: SB,
};

const SocialButton = styled(SB)`
  width: 20rem;
  margin: 0 1rem 1rem 0;
`;

export function Social() {
  return (
    <>
      <SocialButton brand="apple" fluid>
        Sign in with Apple
      </SocialButton>
      <SocialButton brand="facebook" fluid>
        Join with Facebook
      </SocialButton>
      <SocialButton brand="google" fluid>
        Join with Google
      </SocialButton>
    </>
  );
}
