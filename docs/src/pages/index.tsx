import Head from 'next/head';
import Link from 'next/link';

import { Header, Paragraph } from '@vimeo/iris/typography';
import { core } from '@vimeo/iris/tokens';

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
            width: var(--layout-site-width);
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
        {/* <Section>
          <Header>Principles</Header>
          <div
            css={`
              display: grid;
              gap: 2rem;
              grid-template-columns: 1fr 1fr;
              grid-template-rows: auto;
              max-width: var(--layout-site-width);
              margin: 1rem auto;
            `}
          >
            <Block />
            <Block />
            <Block />
            <Block />
          </div>
        </Section> */}
        <Section>
          <Header>Design System</Header>
          <Row>
            <BlockSpace>
              <Header size="3">Tokens</Header>
            </BlockSpace>
            <Block />
            <Block />
            <Block />
          </Row>
          <Row>
            <BlockSpace>
              <Header size="3">Components</Header>
            </BlockSpace>
            <Block
              css={`
                cursor: pointer;
              `}
            >
              <Link href="/component/avatar">
                <a>
                  <Header size="2">Avatar</Header>
                </a>
              </Link>
            </Block>
            <Block
              css={`
                cursor: pointer;
              `}
            >
              <Link href="/component/button">
                <a>
                  <Header size="2">Button</Header>
                </a>
              </Link>
            </Block>
            <Block>view more</Block>
          </Row>
          <Row>
            <BlockSpace>
              <Header size="3">Patterns</Header>
            </BlockSpace>
            <Block />
            <Block />
            <Block />
          </Row>
        </Section>
        {/* <Section>
          <Header>Brand Tools</Header>
          <div
            css={`
              display: grid;
              gap: 2rem;
              grid-template-columns: 1fr 1fr 1fr;
              grid-template-rows: auto;
              max-width: var(--layout-site-width);
              margin: 1rem auto;
            `}
          >
            <Block />
            <Block />
            <Block />
            <Block />
            <Block />
            <Block />
          </div>
        </Section>
        <div
          css={`
            width: 100%;
            padding: 5rem 1rem;
            background: ${core.color.background(0)};
          `}
        >
          <Section>
            <Row>
              <Block>
                <Header>What's New</Header>
              </Block>
              <Block>
                <Header>Blog</Header>
              </Block>
            </Row>
          </Section>
        </div> */}
        <Section>
          <Header>Resources</Header>
          <Row>
            <Link href="/resources/logo">
              <Block
                css={`
                  cursor: pointer;
                `}
              >
                <a>
                  <Header size="2">Logo</Header>
                </a>
              </Block>
            </Link>
            <Block />
          </Row>
        </Section>
      </main>
    </Page>
  );
}

function Section({ children, ...props }) {
  return (
    <section
      {...props}
      css={`
        max-width: var(--layout-site-width);
        margin: 4rem auto;
      `}
    >
      {children}
    </section>
  );
}

function Row(props) {
  return (
    <div
      {...props}
      css={`
        display: flex;
        gap: 2rem;
        max-width: var(--layout-site-width);
        margin: 2rem auto;
      `}
    />
  );
}

function BlockSpace(props) {
  return (
    <div
      {...props}
      css={`
        width: 100%;
        min-height: 12rem;
      `}
    />
  );
}

function Block(props) {
  return (
    <div
      {...props}
      css={`
        padding: 1rem;
        border-radius: 0.375rem;
        background: ${core.color.background(200)};
        width: 100%;
        min-height: 12rem;
      `}
    />
  );
}
