import { rgba } from 'polished';
import React from 'react';
import styled from 'styled-components';

import { Button } from '../../components';
import { VimeoLogo } from '../../illustration';
import { Menu } from '../../layout';
import { BigPicture } from '../../utils';
import { Header } from '../../typography';
import { Folder, Gear, Grid, Home } from '../../icons';

export default { title: 'Labs/Analytics' };

export function Common() {
  return (
    <div>
      <BigPicture config={{ area: 'content' }}>
        <Nav>
          <Logo />
          <Button style={{ float: 'right', margin: '0 1rem' }}>
            I am tracked!
          </Button>
        </Nav>
      </BigPicture>

      <Button>I am not tracked.</Button>

      <BigPicture config={{ area: 'content' }}>
        <Button>I am tracked!</Button>
      </BigPicture>
    </div>
  );
}

const Logo = styled(VimeoLogo)`
  height: 1.8rem;
  margin: 0.5rem 0;

  * {
    fill: ${({ theme }) => rgba(theme.content.color, 0.9)};
  }
`;

const Nav = styled.header`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  height: 3.75rem;
  align-items: center;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid
    ${({ theme }) => rgba(theme.content.color, 0.1)};
`;
