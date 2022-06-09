import { Header, Paragraph } from '@vimeo/iris/typography';
import { useRouter } from 'next/router';

import { Sidebar } from '../../src/components/Sidebar';
import { Page } from '../../src/pages/Page';

import { categories } from '.';

export default function Category({ themeSet, ...props }) {
  const router = useRouter();
  const { category } = router.query;

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
          margin: var(--space-400) auto;
          max-width: var(--layout-site-width);
          padding: var(--space-300);
        `}
      >
        <div>
          <div
            css={`
              margin-bottom: var(--space-800);
            `}
          >
            <h1
              css={`
                font-size: 3rem;
                line-height: 1.25;
                margin-bottom: var(--space-200);
              `}
            >
              {category}
            </h1>
          </div>
        </div>
      </div>
    </Page>
  );
}
