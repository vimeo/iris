import { Header, Paragraph } from '@vimeo/iris/typography';

import { CardAlt } from '../src/components/CardAlt';
import { Sidebar } from '../src/components/Sidebar'
import { Page } from '../src/pages/Page';

export default function Components({
  components,
  themeSet,
  ...props
}) {
  return (
    <Page themeSet={themeSet}>
      <div
        css={`
          display: flex;
        `}
      >
        <Sidebar header="Components" items={components} active='' />

        <div
          css={`
            margin: var(--space-400) auto;
            max-width: var(--layout-site-width);
            padding: 0 var(--space-300);
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
            {components.map((component) => (
              <CardAlt
                name={component.name}
                path="/component"
              />
            ))}
          </div>
        </div>
      </div>
    </Page>
  );
}

export const components = [
  {
    name: 'Avatar',
    path: '/component/avatar'
  },
  {
    name: 'Button',
    path: '/component/button'
  },
  {
    name: 'Badge',
    path: '/component/badge'
  },
  {
    name: 'Card',
    path: '/component/card'
  },
  {
    name: 'Checkbox',
    path: '/component/checkbox'
  },
  {
    name: 'Input',
    path: '/component/input'
  },
  {
    name: 'Modal',
    path: '/component/modal'
  },
  {
    name: 'Notice',
    path: '/component/notice'
  },
  {
    name: 'Radio',
    path: '/component/radio'
  },
  {
    name: 'Sidebar',
    path: '/component/sidebar'
  },
  {
    name: 'Tag',
    path: '/component/tag'
  },
  {
    name: 'Tip',
    path: '/component/tip'
  },
  {
    name: 'Toggle',
    path: '/component/toggle'
  },
] as const;

export const disabled = [
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
