import Link from 'next/link';

import { CardAlt } from '../src/components/CardAlt';
import { Page } from '../src/pages/Page';

export default function Tokens({ themeSet, ...props }) {
  return (
    <Page themeSet={themeSet}>
      {/* <div
        css={`
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        `}
      >
        <Link href="/token/core/color/blue">
          <a>
            <Card>
              <div>blue</div>
            </Card>
          </a>
        </Link>
        <Link href="/token/core/color/blue/500">
          <a>
            <Card>
              <div>blue-500</div>
            </Card>
          </a>
        </Link>
      </div> */}
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
          <CardAlt name={category} path="/token" />
        ))}
      </div>
    </Page>
  );
}

const categories = ['color', 'edge', 'size', 'typography'];
