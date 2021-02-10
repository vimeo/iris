import React, {
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
  PropsWithoutRef,
  useContext,
  useEffect,
  createContext,
  FC,
} from 'react';
import { ThemeContext } from 'styled-components';

const version = '9.2.0';

type IrisMeta =
  | true
  | {
      version: string;
      component: string;
      dev: unknown;
    };

export type IrisComponent<
  DOMElement,
  Props
> = ForwardRefExoticComponent<
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
  path = null,
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

    console.log({ props });
    props = useAnalytics({ $$iris, props });

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

    const RefComponentWithIris = {
      $$iris: { version, component, dev },
      ...forwardRef<DOMElement, Props>((props: any, ref) => {
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
      }),
    };

    return (RefComponentWithIris as unknown) as IrisComponent<
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

const BigPictureContext = createContext({});

export function BigPicture({ children, config, ...props }) {
  return (
    <BigPictureContext.Provider value={config}>
      {children}
    </BigPictureContext.Provider>
  );
}

function useAnalytics({ $$iris, props: { children, ...props } }) {
  const {
    location: { href },
  } = window;
  const { area } = useContext(BigPictureContext);
  const { component, version } = $$iris;

  const now = new Date();
  const date = now.toDateString();
  const time = now.toTimeString();

  const dataProps = props;
  if (typeof children === 'string') dataProps.children = children;

  const data = {
    component,
    props: dataProps,
    iris: version,
    location: href,
    trackingArea: area,
    date,
    time,
  };

  const onClick = (event) => {
    props.onClick && props.onClick(event);
    console.log({ trigger: 'click', ...data });
  };

  return { ...props, onClick };
}

function cleanProps({ children, ...props }) {
  console.log({ props });
  children = children === 'string' ? children : null;
  // console.log({ props });
  // Object.entries(props).map((prop) => {
  //   console.log({ prop });
  //   prop[1] === null && delete props[prop[0]];
  // });
  return { children, ...props };
}
