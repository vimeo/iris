import { Header, Paragraph } from '@vimeo/iris/typography';
import * as COMPONENTS from '@vimeo/iris/components';

import { Page } from '../../src/pages/Page';
import { data } from '../../src/data';

import { components } from '../components';

const { Tag } = COMPONENTS;

export default function Component({ component, themeSet, ...props }) {
  // const router = useRouter();
  // const { component } = router.query;

  const componentName = component || null;

  // const componentData = useComponent(componentName);
  const componentData = data[componentName];

  // if (!componentData) {
  //   return (
  //     <>
  //       <Header>component not found!</Header>
  //     </>
  //   );
  // }

  const sections = componentData?.sections;

  return (
    <Page themeSet={themeSet}>
      <div
        css={`
          padding: 0.5rem 0rem;
          max-width: var(--layout-site-width);
          margin: 2rem auto;
        `}
      >
        <header
          css={`
            margin: 2rem auto 5rem;
          `}
        >
          <Header
            css={`
              text-transform: capitalize;
            `}
          >
            {componentName}
          </Header>
          <Paragraph size="1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Eos assumenda consequuntur odio labore magni dicta at,
            unde ex doloremque et! Lorem ipsum dolor sit amet
            consectetur adipisicing.
          </Paragraph>
          <div
            css={`
              display: flex;
              gap: 2rem;
              align-items: center;
              padding: 2rem 0;
            `}
          >
            <Tag>Production</Tag>
            <span>
              Updated{' '}
              {new Date()
                .toDateString()
                .split(' ')
                .slice(1)
                .join(' ')}
            </span>
          </div>
        </header>
        {sections &&
          sections.map((section) => {
            const { name } = componentData;

            return (
              <div
                css={`
                  display: block;
                  + div {
                    margin: 7rem 0;
                  }
                `}
              >
                <h1>{section.title}</h1>
                {section.items.map((item) => {
                  const Component = COMPONENTS[name];

                  return (
                    <div
                      css={`
                        display: flex;
                        gap: 1rem;

                        border-bottom: 1px solid
                          rgba(150, 150, 150, 0.5);
                      `}
                    >
                      <div
                        css={`
                          padding: 3rem 2rem;
                          margin: 0 1rem 0 0;
                          min-width: 12rem;
                        `}
                      >
                        <Component {...item.demoProps} />
                      </div>
                      <div
                        css={`
                          padding: 2rem 0;
                          margin: 0 1rem 0 0;
                        `}
                      >
                        <Header size="2" variant="thin">
                          {item.value}
                        </Header>
                        <Paragraph
                          size="1"
                          css={`
                            line-height: 1.5;
                          `}
                        >
                          {item.description}
                        </Paragraph>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
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
