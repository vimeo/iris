import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

import { VimeoLogo } from '../../illustration';
import { Button, Avatar as A } from '../../components';
import { Link, Plus, ArrowLeft } from '../../icons';
import { slate } from '../../color';

export default {
  title: 'layout/Dock/Examples',
};

export function Nav() {
  return (
    <TopNav>
      <div style={{ display: 'flex' }}>
        <Button
          style={{
            margin: '0.5rem 0.5rem 0.5rem 0',
          }}
          format="basic"
          variant="minimalTransparent"
          icon={<ArrowLeft />}
        ></Button>
        <Logo />
      </div>
      <RightSection>
        <Avatar src="https://i.vimeocdn.com/portrait/" />
        <Avatar src="https://i.vimeocdn.com/portrait/" />
        <Avatar src="https://i.vimeocdn.com/portrait/" />
        <Button
          style={{
            margin: '0.5rem 0 0.5rem 0.5rem',
            color: slate(400),
          }}
          pill
          format="secondary"
          variant="outline"
          icon={<Plus />}
        ></Button>
        <Button
          style={{
            margin: '0.5rem 0 0.5rem 0.5rem',
          }}
          format="alternative"
          icon={<Link />}
        ></Button>
        <Button
          style={{
            minWidth: '3rem',
            margin: '0.5rem 0 0.5rem 0.5rem',
          }}
          format="alternative"
        >
          Embed
        </Button>
        <Button
          style={{
            minWidth: '3rem',
            margin: '0.5rem 0 0.5rem 0.5rem',
          }}
          format="alternative"
        >
          Publish to social
        </Button>
        <Avatar
          src="https://i.vimeocdn.com/portrait/"
          style={{
            margin: '0.5rem 1rem',
          }}
        />
      </RightSection>
    </TopNav>
  );
}

const Logo = styled(VimeoLogo)`
  height: 1.8rem;
  margin: 0.5rem 0;

  * {
    fill: ${({ theme }) => rgba(theme.content.color, 0.9)};
  }
`;

const TopNav = styled.header`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  height: 3.75rem;
  align-items: center;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid
    ${({ theme }) => rgba(theme.content.color, 0.1)};
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled(A)`
  height: 2.1rem;
  width: 2.1rem;
  margin: 0.5rem -0.1rem;
  border: 1px solid white;
  border-radius: 50%;
`;
