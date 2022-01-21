import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { themes } from '@vimeo/iris/themes';
import { GlobalStyles } from '@vimeo/iris/utils';
import { core } from '@vimeo/iris/tokens';

/* eslint-disable import/no-default-export */
export default function App({ Component, pageProps }) {
  const [theme, themeSet] = useState(themes.dark);
  const { pathname } = useRouter();

  function themeToggle() {
    themeSet((theme) =>
      theme.name === 'dark' ? themes.light : themes.dark
    );
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Nav>
          {pages.map(({ href, name }) => (
            <Link href={href}>
              <NavItem active={pathname === href} key={href}>
                {name}
              </NavItem>
            </Link>
          ))}
        </Nav>
        <Component themeToggle={themeToggle} {...pageProps} />
      </ThemeProvider>
    </>
  );
}

const pages = [
  { href: '/', name: 'Home' },
  { href: '/sheet', name: 'Test Sheet' },
];

const Nav = styled.div`
  padding: 1rem 2rem;
  display: flex;
`;

const NavItem = styled.a<{ active?: boolean }>`
  display: block;
  padding: 1rem;
  font-weight: 700;
  font-size: 1.5rem;
  border-bottom: 0.2rem solid
    ${(p) =>
      p.active ? core.color.format.primary : core.color.text.primary};
  color: ${(p) =>
    p.active ? core.color.format.primary : core.color.text.primary};
  cursor: pointer;
`;
