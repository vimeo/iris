import Head from 'next/head';

import { Button } from '@vimeo/iris/components';
import { Header, Paragraph } from '@vimeo/iris/typography';
import { LightDark } from '@vimeo/iris/icons';
import { themes } from '@vimeo/iris/themes';

import {
  Card,
  Code,
  Container,
  Footer,
  Grid,
  Main,
} from './index.style';

import { LogoZeit } from '../icons/';

export function Home({ themeSet, ...props }) {
  function toggleTheme() {
    themeSet((theme) =>
      theme.name === 'dark' ? themes.light : themes.dark
    );
  }

  return (
    <Container>
      <Head>
        <title>Iris — Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Header>
          Welcome to{' '}
          <a
            href="https://nextjs.org"
            style={{ textDecoration: 'underline' }}
          >
            Next.js with Iris!
          </a>
        </Header>

        <Paragraph size="1">
          Get started by editing <Code>pages/index.tsx</Code>
        </Paragraph>

        <Grid>
          <Card href="https://nextjs.org/docs">
            <Header size="3">Documentation &rarr;</Header>
            <Paragraph size="1">
              Find in-depth information about Next.js features and
              API.
            </Paragraph>
          </Card>

          <Card href="https://nextjs.org/learn">
            <Header size="3">Learn &rarr;</Header>
            <Paragraph size="1">
              Learn about Next.js in an interactive course with
              quizzes!
            </Paragraph>
          </Card>

          <Card href="https://github.com/zeit/next.js/tree/master/examples">
            <Header size="3">Examples &rarr;</Header>
            <Paragraph size="1">
              Discover and deploy boilerplate example Next.js
              projects.
            </Paragraph>
          </Card>

          <Card href="https://zeit.co/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
            <Header size="3">Deploy &rarr;</Header>
            <Paragraph size="1">
              Instantly deploy your Next.js site to a public URL with
              ZEIT Now.
            </Paragraph>
          </Card>
        </Grid>
      </Main>

      <Footer>
        <span style={{ flexGrow: 1, paddingLeft: '4rem' }}>
          <a
            href="https://zeit.co?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by <LogoZeit style={{ marginLeft: '0.667rem' }} />
          </a>
        </span>
        <Button
          icon={<LightDark />}
          onClick={toggleTheme}
          size="xl"
          style={{ margin: '2.5rem', marginLeft: 'auto' }}
        />
      </Footer>
    </Container>
  );
}
