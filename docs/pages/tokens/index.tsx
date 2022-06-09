import Link from 'next/link';

import { CardAlt } from '../../src/components/CardAlt';
import { Sidebar } from '../../src/components/Sidebar';
import { Page } from '../../src/pages/Page';

export default function Tokens({ themeSet, ...props }) {
  return (
    <Page
      themeSet={themeSet}
      sidebar={
        <Sidebar
          header="Tokens"
          items={categories}
          active={categories[0]}
        />
      }
    >
      <div
        css={`
          display: flex;
        `}
      >
        <div
          css={`
            display: grid;
            gap: 2rem;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-template-rows: auto;
            max-width: var(--layout-site-width);
            margin: 1rem auto;
          `}
        >
          {categories.map((category) => (
            <CardAlt name={category.name} path="/token" />
          ))}
        </div>
      </div>
    </Page>
  );
}

export const categories = [
  {
    name: 'color',
    path: '/tokens/color',
  },
  {
    name: 'edge',
    path: '/tokens/edge',
  },
  {
    name: 'size',
    path: '/tokens/size',
  },
  {
    name: 'typography',
    path: '/tokens/typography',
  },
] as const;
