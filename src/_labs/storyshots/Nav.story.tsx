import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import { storiesOf } from '@storybook/react';

import { VimeoLogo } from '../../illustration';
import {
  Button,
  Breadcrumb,
  BreadcrumbLink,
  Avatar,
  Search,
} from '../../components';
import { ChevronDown, Bell as B } from '../../icons';

storiesOf(`Labs|storyshots/layout`, module).add('Nav', () => (
  <div>
    <TopNav>
      <Logo />
      <Search
        format="alternative"
        variant="minimal"
        style={{ margin: '0.5rem 0 0.5rem auto' }}
      />
      <Bell />
      <Avatar
        src="https://i.vimeocdn.com/portrait/"
        style={{
          height: '2rem',
          width: '2rem',
          margin: '0.5rem 1rem',
        }}
      />
      <Button style={{ minWidth: '3rem' }}>Upload</Button>
    </TopNav>
    <SubNav>
      <Breadcrumb
        currentPageLabel="My Showcase"
        style={{ width: '75%' }}
        crumbs={[
          <BreadcrumbLink href="#">Home</BreadcrumbLink>,
          <BreadcrumbLink href="#">Showcases</BreadcrumbLink>,
        ]}
      />
      <Button
        format="alternative"
        icon={<ChevronDown />}
        iconPosition="right"
        style={{
          marginLeft: 'auto',
          minWidth: '3rem',
        }}
      >
        Share
      </Button>
    </SubNav>
  </div>
));

const Bell = styled(B)`
  height: 1.5rem;
  width: 1.5rem;
  margin: 0 1rem;

  * {
    fill: ${({ theme }) => rgba(theme.content.color, 0.9)};
  }
`;

const Logo = styled(VimeoLogo)`
  height: 2rem;
  margin: 0.5rem 0;

  * {
    fill: ${({ theme }) => rgba(theme.content.color, 0.9)};
  }
`;

const TopNav = styled.header`
  display: flex;
  height: 3.75rem;
  width: 100%;
  align-items: center;
  padding: 0.5rem 1rem;
  background: ${({ theme }) => rgba(theme.content.color, 0.025)};
  border-bottom: 1px solid
    ${({ theme }) => rgba(theme.content.color, 0.1)};
  color: white;
`;

const SubNav = styled.div`
  display: flex;
  height: 3.75rem;
  width: 100%;
  align-items: center;
  padding: 0.5rem 1rem;
  background: ${({ theme }) => rgba(theme.content.color, 0.05)};
  border-bottom: 1px solid
    ${({ theme }) => rgba(theme.content.color, 0.1)};
  color: white;
`;
