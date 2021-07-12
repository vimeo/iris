import Head from 'next/head';

import { Header, Paragraph } from '@vimeo/iris/typography';

import { Hero } from './index.style';
import { Page } from './Page';

export function Home({ themeSet, ...props }) {
  return (
    <Page themeSet={themeSet}>
      <Head>
        <title>Iris — Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        css={`
          overflow: hidden;
          position: relative;
          display: flex;
          align-items: center;
          height: 30rem;
        `}
      >
        <section
          css={`
            margin: 0 auto;
            width: 60rem;
            position: relative;
            z-index: 100;
          `}
        >
          <Header>Iris Design System</Header>
          <Paragraph
            size="1"
            css={`
              display: block;
              max-width: 30rem;
            `}
          >
            Explaining what this is and how to use Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </Paragraph>
        </section>
        <Hero />
      </div>

      <main
        css={`
          padding: 1rem;
        `}
      >
        <section
          css={`
            margin: 0 auto;
            max-width: 60rem;
          `}
        >
          <Header>Principles</Header>
        </section>
        <section
          css={`
            margin: 0 auto;
            max-width: 60rem;
          `}
        >
          <Header>Design System</Header>
        </section>
        <section
          css={`
            margin: 0 auto;
            max-width: 60rem;
          `}
        >
          <Header>What's New</Header>
          <Header>Blog</Header>
        </section>
        <section
          css={`
            margin: 0 auto;
            max-width: 60rem;
          `}
        >
          <Header>Resources</Header>
        </section>
      </main>
    </Page>
  );
}
