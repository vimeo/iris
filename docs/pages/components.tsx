import { Button } from '@vimeo/iris/components';

import { Card } from '../src/components/Card';
import { Page } from '../src/pages/Page';

export default function Components({ themeSet, ...props }) {
  return (
    <Page themeSet={themeSet}>
      <a href="/component/button">
        <Card>
          <div>
            Button
            <br />
            <Button>Button</Button>
          </div>
        </Card>
      </a>
    </Page>
  );
}