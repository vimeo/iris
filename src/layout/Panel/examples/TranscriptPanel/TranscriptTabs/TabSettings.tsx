import React from 'react';
import styled from 'styled-components';

import { Button as ButtonIris } from '../../../../../components';
import { PopOut } from '../../../../../icons';
import { Paragraph } from '../../../../../typography';

export function TabSettings() {
  return (
    <>
      <Paragraph
        size="2"
        style={{ margin: '1.5rem 0', display: 'block' }}
      >
        Helpful copy to let users know that at the moment they can
        manage their captions elsewhere.
      </Paragraph>
      <Button
        icon={<PopOut />}
        iconPosition="right"
        fluid
        style={{ margin: '1.5rem 0' }}
      >
        Caption settings
      </Button>
    </>
  );
}

const Button = styled(ButtonIris)`
  svg {
    padding: 0.2rem;
  }
`;
