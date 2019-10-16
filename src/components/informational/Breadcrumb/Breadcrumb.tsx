import React, { ReactNode } from 'react';

import { Wrapper, Label, Arrow, Current } from './Breadcrumb.style';

import { IrisProps, withIris } from '../../../utils';

export const Breadcrumb = withIris<HTMLDivElement, Props>(
  BreadcrumbComponent,
);

type Props = IrisProps<
  {
    crumbs?: ReactNode[];
    currentPageLabel: string;
    noMargin?: boolean;
  },
  HTMLDivElement
>;

function BreadcrumbComponent({
  crumbs,
  currentPageLabel,
  forwardRef,
  noMargin,
  theme,
  ...props
}: Props) {
  const crumbWidth = crumbs
    ? `${100 / (crumbs.length + 1)}%`
    : '100%';

  return (
    <div ref={forwardRef} style={{ width: '100%' }} {...props}>
      {crumbs &&
        crumbs.map((crumb, i) => (
          <Wrapper
            key={`crumb-${i}`}
            showOnSmall={i === crumbs.length - 1}
            style={{ maxWidth: crumbWidth }}
            theme={theme}
          >
            <Label
              // element="span"
              // noMargin={noMargin}
              size="2"
              theme={theme}
            >
              {crumb}
            </Label>
            <Arrow />
          </Wrapper>
        ))}

      <Current
        // element="span"
        // noMargin={noMargin}
        size="2"
        style={{ maxWidth: crumbWidth }}
        theme={theme}
      >
        {currentPageLabel}
      </Current>
    </div>
  );
}
