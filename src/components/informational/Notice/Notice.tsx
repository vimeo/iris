import React, { ReactNode } from 'react';

import { NoticeStyled, Icon, Dismiss } from './Notice.style';

import { Button } from '../../buttons/Button/Button';

import {
  CircleInfo,
  Checkmark,
  CircleWarning,
  DismissX,
} from '../../../icons';
import { Header } from '../../../typography';
import { IrisProps, withIris, onClose } from '../../../utils';

export const Notice = withIris<HTMLDivElement, Props>(
  NoticeComponent,
);

type Props = IrisProps<
  {
    dismissButtonClassName?: string;
    header?: string;
    icon?: ReactNode;
    onClose?: onClose;
    format: 'primary' | 'positive' | 'negative';
  },
  HTMLDivElement
>;

function NoticeComponent({
  children,
  header,
  onClose,
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

      {onClose && (
        <Dismiss format={format}>
          <Button
            title="Dismiss this notification"
            variant="minimal"
            format="basic"
            size="sm"
            icon={<DismissX />}
          />
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
