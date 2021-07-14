import { Header } from '@vimeo/iris/typography';

import { Page } from '../../src/pages/Page';

import { components } from '../components';

export default function Component({ component, themeSet, ...props }) {
  // const router = useRouter();
  // const { component } = router.query;

  const componentName = component || null;

  const componentData = useComponent(componentName);

  // if (!componentData) {
  //   return (
  //     <>
  //       <Header>component not found!</Header>
  //     </>
  //   );
  // }

  return (
    <Page themeSet={themeSet}>
      <div
        css={`
          padding: 2rem;
        `}
      >
        <Header>{componentName}</Header>
        {/* <Button>Button</Button> */}
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

export async function getStaticProps(context) {
  const { params } = context;
  const component = params.component;

  return {
    props: {
      component,
    },
  };
}
export async function getStaticPaths() {
  const paths = components.map((component) => ({
    params: { component: component.toLowerCase() },
  }));

  return {
    paths,
    fallback: false,
  };
}
