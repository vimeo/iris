import Link from 'next/link';

import { Header, Paragraph } from '@vimeo/iris/typography';
import { VimeoV } from '@vimeo/iris/icons';

import { Page } from '../../src/pages/Page';
import { VimeoLogo } from '@vimeo/iris/illustration';

export default function Logo({ themeSet, ...props }) {
  return (
    <Page themeSet={themeSet}>
      <div
        css={`
          padding: 0.5rem 0rem;
          max-width: var(--layout-site-width);
          margin: 2rem auto;
        `}
      >
        <header
          css={`
            margin: 2rem auto 5rem;
          `}
        >
          <Header
            css={`
              text-transform: capitalize;
            `}
          >
            Downloads
          </Header>
          <Paragraph size="1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Eos assumenda consequuntur odio labore magni dicta at,
            unde ex doloremque et! Lorem ipsum dolor sit amet
            consectetur adipisicing.
          </Paragraph>
        </header>

        <Paragraph size="1">
          These are our official logos, icons, and screenshots. Please
          read the next section for usage guidelines.
        </Paragraph>
        <div
          css={`
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
            gap: 3rem;
            padding: 3rem;

            > div {
              padding: 3rem;
              border: 1px solid white;
            }

            svg > path {
              fill: white;
            }
          `}
        >
          <div>
            <VimeoLogo />
          </div>
          <div>
            <VimeoV />
          </div>
        </div>
      </div>
    </Page>
  );
}
