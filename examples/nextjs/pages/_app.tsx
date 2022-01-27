import { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { themes } from '@vimeo/iris/themes';
import { GlobalStyles, useStyleVars } from '@vimeo/iris/utils';

import '../../../iris.css';

/* eslint-disable import/no-default-export */
export default function App({ Component, pageProps }) {
  const [theme, themeSet] = useState(themes.dark);
  const { pathname } = useRouter();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme.name);
  }, []);

  function themeToggle() {
    themeSet((theme) => {
      const nextTheme = theme.name === 'dark' ? 'light' : 'dark';

      document.documentElement.setAttribute('data-theme', nextTheme);

      return themes[nextTheme];
    });
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Nav>
          {pages.map(({ href, name }) => (
            <NavItem
              href={href}
              key={href}
              name={name}
              pathname={pathname}
            />
          ))}
        </Nav>
        <Component themeToggle={themeToggle} {...pageProps} />
      </ThemeProvider>
    </>
  );
}

function NavItem({ href, name, pathname }) {
  const active = pathname === href;

  const color = active
    ? 'var(--color-format-primary)'
    : 'var(--color-text-primary)';

  const styleVars = useStyleVars({
    color,
  });

  return (
    <Link href={href} key={href}>
      <NavItemStyled active={active} style={styleVars}>
        {name}
      </NavItemStyled>
    </Link>
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

const NavItemStyled = styled.a<{ active?: boolean }>`
  display: block;
  padding: 1rem;
  font-weight: 700;
  font-size: 1.5rem;
  border-bottom: 0.2rem solid var(--color);
  color: var(--color);
  cursor: pointer;
`;
