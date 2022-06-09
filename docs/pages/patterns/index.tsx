import { Header, Paragraph } from '@vimeo/iris/typography';
import { Page } from '../../src/pages/Page';

export default function Component({ component, themeSet, ...props }) {
  return (
    <Page themeSet={themeSet}>
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
              Patterns
            </h1>
          </div>
        </div>
      </div>
    </Page>
  );
}
