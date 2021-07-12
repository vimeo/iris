import { useRouter } from 'next/router';
import { parseToRgb, parseToHsl } from 'polished';

import { Button } from '@vimeo/iris/components';
import { Header } from '@vimeo/iris/typography';
import { blue } from '@vimeo/iris/color';

import { Card } from '../../src/components/Card';
import { Page } from '../../src/pages/Page';

export default function Component({ themeSet, ...props }) {
  const router = useRouter();
  const { component } = router.query;

  const componentName = component || null;

  const componentData = useComponent(componentName);
  console.log(componentData);

  if (!componentData) {
    return (
      <>
        <Header>component not found!</Header>
      </>
    );
  }

  return (
    <Page themeSet={themeSet}>
      <div
        css={`
          padding: 2rem;
        `}
      >
        <Header>{componentName}</Header>
        <Button>Button</Button>
      </div>
    </Page>
  );
}

function useComponent(componentName) {
  const match = findComponentData(componentName);
  if (match) return match;
  return false;
}

function findComponentData(componentName) {
  switch (componentName) {
    case 'button':
      return { name: componentName, type: 'button' };
    default:
      return false;
  }
}
