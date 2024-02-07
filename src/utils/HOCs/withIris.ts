import {
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
  PropsWithoutRef,
  useContext,
  useEffect,
  FC,
} from 'react';
import { ThemeContext } from 'styled-components';

const version = '0.151.0';

type IrisMeta =
  | true
  | {
      version: string;
      component: string;
      dev: unknown;
    };

export type IrisComponent<DOMElement, Props> =
  ForwardRefExoticComponent<
    PropsWithoutRef<Props> & RefAttributes<DOMElement>
  > & {
    $$iris: IrisMeta;
  };

export function withIris<
  DOMElement,
  Props = unknown,
  Minors = unknown
>(
  Component: FC<any>,
  $$iris: IrisMeta = true,
  path: null | string = null,
  debug = false
): IrisComponent<DOMElement, Props> & Minors {
  const { name } = Component;

  const component = name?.replace('Component', '');
  const dev = { path };

  if ($$iris === true && process.env.NODE_ENV === 'development') {
    $$iris = { version, component, dev };
  }

  // Universal Iris Hooks
  const ComponentWithIris: FC<any> = ({ theme, ...props }) => {
    // const errors = useIrisError(props);
    const themeFromContext = useContext(ThemeContext);
    theme = theme || themeFromContext;

    // props = withAnalytics({ $$iris, props });

    return Component({
      // errors,
      theme,
      ...props,
    });
  };

  if (process.env.NODE_ENV === 'development') {
    const { name } = Component;

    const component = name?.replace('Component', '');
    const dev = { path, debug };

    const RefComponentWithIris = forwardRef<DOMElement, Props>(
      (props: any, ref) => {
        useEffect(() => {
          if (debug || (props && props.debug)) {
            if (ref) console.log({ Component, ref });
            if (!ref)
              console.warn('@vimeo/iris: bad ref\n\n', {
                $$iris,
                Component,
                ref,
                path,
              });
          }
        });

        return ComponentWithIris({
          forwardRef: ref,
          ...props,
        });
      }
    );

    RefComponentWithIris['$$iris'] = { version, component, dev };

    return RefComponentWithIris as unknown as IrisComponent<
      DOMElement,
      Props
    > &
      Minors;
  } else {
    return forwardRef<DOMElement, Props>((props, ref) =>
      ComponentWithIris({
        forwardRef: ref,
        ...props,
      })
    ) as IrisComponent<DOMElement, Props> & Minors;
  }
}

const soPretty = `
  background: linear-gradient(to right, red, yellow, cyan, blue, violet, pink);
  font-size: 1.25rem;
  font-weight: 800;
  padding: 0.25rem 1.25rem 0.3rem 0.5rem;
  color: white;
  text-shadow:
  -1px -1px 0 rgba(0,0,0,0.334),
  1px -1px 0 rgba(0,0,0,0.334),
  -1px 2px 5px rgba(0,0,0,0.334),
  1px 2px 5px rgba(0,0,0,0.334);
  border-radius: 0.25rem;
  font-family: 'Helvetica Neue', Helvetica, sans-serif;
`;

if (process.env.NODE_ENV === 'development')
  console.log(`\n\n%c @vimeo/iris: ${version}`, soPretty, '\n\n\n');
