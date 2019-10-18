import React, { ReactNode, MouseEventHandler } from 'react';

import { NoticeStyled, Icon, Dismiss } from './Notice.style';

import { Button } from '../../buttons/Button/Button';

import {
  CircleInfo,
  Checkmark,
  CircleWarning,
  DismissX,
} from '../../../icons';
import { Header } from '../../../typography';
import { IrisProps, withIris } from '../../../utils';

export const Notice = withIris<HTMLDivElement, Props>(
  NoticeComponent,
);

type Props = IrisProps<
  {
    dismissButtonClassName?: string;
    header?: string;
    icon?: ReactNode;
    onDismiss?: MouseEventHandler;
    format: 'primary' | 'positive' | 'negative';
  },
  HTMLDivElement
>;

function NoticeComponent({
  children,
  header,
  onDismiss,
  format,
  forwardRef,
  icon = icons[format],
  ...props
}: Props) {
  return (
    <NoticeStyled
      icon={icon}
      format={format}
      ref={forwardRef}
      {...props}
    >
      {icon && (
        <Icon header={header} format={format}>
          {icon}
        </Icon>
      )}

      {header && <Header size="5">{header}</Header>}
      {children}

      {onDismiss && (
        <Dismiss format={format}>
          {/* Needs Iris 8 Button
          <Button
            title="Dismiss this notification"
            variant="minimal"
            format="basic"
            size="xs"
            icon={<DismissX />}
          />
          */}
          <Button icon={<DismissX />} variant="minimalTransparent" />
        </Dismiss>
      )}
    </NoticeStyled>
  );
}

const icons = {
  primary: <CircleInfo />,
  positive: <Checkmark />,
  negative: <CircleWarning />,
};
