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
        <a href="/token/core/color/blue">
          <Card>
            <div>blue</div>
          </Card>
        </a>
        <a href="/token/core/color/blue/500">
          <Card>
            <div>blue-500</div>
          </Card>
        </a>
      </div>
    </Page>
  );
}
