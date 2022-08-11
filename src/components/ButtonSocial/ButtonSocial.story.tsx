import React from 'react';
import styled from 'styled-components';

import { ButtonSocial as SB } from './ButtonSocial';

export default {
  title: 'components/ButtonSocial',
  component: SB,
};

const ButtonSocial = styled(SB)`
  width: 20rem;
  margin: 0 1rem 1rem 0;
`;

export function Social({ args }) {
  return (
    <>
      <ButtonSocial brand="apple" fluid {...args}>
        Sign in with Apple
      </ButtonSocial>
      <ButtonSocial brand="facebook" fluid>
        Join with Facebook
      </ButtonSocial>
      <ButtonSocial brand="google" fluid>
        Join with Google
      </ButtonSocial>
    </>
  );
}
