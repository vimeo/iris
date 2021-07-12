import Link from 'next/link';

import { Card } from '../src/components/Card';
import { Page } from '../src/pages/Page';

export default function Tokens({ themeSet, ...props }) {
  return (
    <Page themeSet={themeSet}>
      <div
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
      </div>
    </Page>
  );
}
