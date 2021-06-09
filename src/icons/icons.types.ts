import {
  ForwardRefExoticComponent,
  RefAttributes,
  SVGAttributes,
} from 'react';

export type IrisIcon = ForwardRefExoticComponent<
  SVGAttributes<SVGSVGElement> & RefAttributes<SVGSVGElement>
> & { tags?: string[] };
