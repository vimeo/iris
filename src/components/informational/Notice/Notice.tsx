import React, { ReactNode } from 'react';

import { NoticeStyled, Icon, Dismiss } from './Notice.style';

import { Button } from '../../buttons/Button/Button';

import {
  CircleInfo,
  Checkmark,
  CircleWarning,
  DismissX,
} from '../../../icons';
import { Header, Paragraph } from '../../../typography';
import { IrisProps, withIris, onClose } from '../../../utils';

export const Notice = withIris<HTMLDivElement, Props>(
  NoticeComponent,
);

type Props = IrisProps<
  {
    format: 'primary' | 'positive' | 'negative';
    header?: string;
    icon?: ReactNode;
    onClose?: onClose;
    pill?: boolean;
  },
  HTMLDivElement
>;

function NoticeComponent({
  children,
  format,
  forwardRef,
  header,
  icon = icons[format],
  onClose,
  pill,
  ...props
}: Props) {
  return (
    <NoticeStyled
      format={format}
      icon={icon}
      pill={pill}
      ref={forwardRef}
      {...props}
    >
      {icon && (
        <Icon header={header} format={format} pill={pill}>
          {icon}
        </Icon>
      )}

      {header && <Header size="5">{header}</Header>}
      {typeof children === 'string' ? (
        <Paragraph size="2">{children}</Paragraph>
      ) : (
        children
      )}

      {onClose && (
        <Dismiss format={format} pill={pill}>
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
