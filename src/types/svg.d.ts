declare module '*.svg' {
    import { ComponentType, SVGProps } from 'react';

    const SVGComponent: ComponentType<
        SVGProps<SVGElement> & { title?: string }
    >;

    export default SVGComponent;
}
