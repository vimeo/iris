import React, { ReactNode } from 'react';

import {
  BreadcrumbContainer,
  Wrapper,
  Label,
  Arrow,
  Current,
} from './Breadcrumb.style';

import { IrisProps, withIris } from '../../../utils';

export const Breadcrumb = withIris<HTMLDivElement, Props>(
  BreadcrumbComponent,
);

type Props = IrisProps<
  {
    crumbs?: ReactNode[];
    currentPageLabel: ReactNode;
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
  const childrenLength = crumbs ? crumbs.length + 1 : 1;
  return (
    // This div sets display: block around the inline-grid BreadcrumbContainer so it doesn't inline with siblings
    <div>
      <BreadcrumbContainer
        gridColumns={childrenLength}
        ref={forwardRef}
        {...props}
      >
        {crumbs &&
          crumbs.map((crumb, i) => (
            <Wrapper
              key={`crumb-${i}`}
              showOnSmall={i === crumbs.length - 1}
              theme={theme}
            >
              <Label size="2" theme={theme}>
                {crumb}
              </Label>
              <Arrow />
            </Wrapper>
          ))}

        <Current size="2" theme={theme}>
          {currentPageLabel}
        </Current>
      </BreadcrumbContainer>
    </div>
  );
}
