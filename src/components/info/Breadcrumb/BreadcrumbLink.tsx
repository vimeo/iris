import React from 'react';
import {
  ArrowLeftWrapper,
  LinkLabel,
  ARROWLEFT_CLASSNAME,
} from './Breadcrumb.style';

import { Link } from '../../../typography';
import { IrisProps } from '../../../utils';
import { ArrowLeft } from '../../../icons';

type Props = IrisProps<{
  format?: 'lightTheme' | 'darkTheme';
  href: string;
}>;

export function BreadcrumbLink({
  children,
  format = 'lightTheme',
  href,
  ...props
}: Props) {
  return (
    <Link href={href} decoration="silent" format="primary" {...props}>
      <Content>{children}</Content>
    </Link>
  );
}

export function Content(props: IrisProps) {
  return (
    <span>
      <ArrowLeftWrapper className={ARROWLEFT_CLASSNAME}>
        <ArrowLeft />
      </ArrowLeftWrapper>
      <LinkLabel>{props.children}</LinkLabel>
    </span>
  );
}
