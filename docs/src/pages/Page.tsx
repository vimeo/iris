import Link from 'next/link';

import { Button } from '@vimeo/iris/components';
import { LightDark, Search } from '@vimeo/iris/icons';
import { VimeoLogo } from '@vimeo/iris/illustration';
import { themes } from '@vimeo/iris/themes';

import { Footer, Nav } from './index.style';

export function Page({ themeSet, children, ...props }) {
  function toggleTheme() {
    themeSet((theme) =>
      theme.name === 'dark' ? themes.light : themes.dark
    );
  }

  return (
    <>
      <Nav>
        <h1
          css={`
            font-size: 1.75rem;
            line-height: 2rem;
            padding: 0 2rem 0 0;
            margin: 0;
          `}
        >
          <Link href="/">
            <a>
              <VimeoLogo
                css={`
                  width: 6rem;
                  margin-right: 0.25rem;
                  > path {
                    fill: ${(p) =>
                      p.theme.name === 'dark' ? 'white' : 'black'};
                  }
                `}
              />
              design
            </a>
          </Link>
        </h1>
        <span>Principles</span>
        {/* <Link href="/tokens">
          <a>Tokens</a>
        </Link> */}
        <span>Tokens</span>
        <Link href="/components">
          <a>Components</a>
        </Link>
        <span>Patterns</span>
        <span>Content</span>
        <span>Resources</span>
        <Search
          css={`
            width: 2rem;
            margin: 0 0 0 auto;

            * {
              fill: white;
            }
          `}
        />
      </Nav>

      <main>{children}</main>

      <Footer>
        <span style={{ flexGrow: 1, paddingLeft: '1rem' }}>
          Footer
        </span>
        <Button
          icon={<LightDark />}
          onClick={toggleTheme}
          size="md"
          style={{ marginLeft: 'auto', marginRight: '1rem' }}
        />
      </Footer>
    </>
  );
}
