import { Header, Paragraph } from '@vimeo/iris/typography';

import { CardAlt } from '../src/components/CardAlt';
import { Page } from '../src/pages/Page';

export default function Components({
  components,
  themeSet,
  ...props
}) {
  return (
    <Page themeSet={themeSet}>
      <main
        css={`
          padding: 2rem 0;
        `}
      >
        <div
          css={`
            max-width: 70rem;
            margin: 2rem auto 5rem;
          `}
        >
          <Header>Components</Header>
          <Paragraph size="1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Architecto deleniti omnis fugiat officia qui nobis error
            distinctio quam dignissimos ad quos eum reiciendis
            consequatur ipsam accusamus animi sequi, magni inventore
            ratione ipsum!
          </Paragraph>
        </div>
        <div
          css={`
            display: grid;
            gap: 2rem;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: auto;
            max-width: 70rem;
            margin: 1rem auto;
          `}
        >
          {components.map((component) => (
            <CardAlt name={component} path="/component" />
          ))}
        </div>
      </main>
    </Page>
  );
}

export const components = [
  'Avatar',
  'Button',
  'Badge',
  'Card',
  'Checkbox',
  'Input',
  'Modal',
  'Notice',
  'Radio',
  'Sidebar',
  'Tag',
  'Tip',
  'Toggle',
] as const;

export function getStaticProps() {
  return { props: { components } };
}
