import React, { ReactNode } from 'react';

import {
  Dismiss,
  Icon,
  NoticeChildren,
  NoticeStyled,
} from './Notice.style';

import {
  Checkmark,
  CircleInfo,
  CircleWarning,
  DismissX,
} from '../../icons';
import { Header, Paragraph } from '../../typography';
import { IrisProps, onClose, useClose, withIris } from '../../utils';
import { Button } from '../Button/Button';

export const Notice = withIris<HTMLDivElement, Props>(
  NoticeComponent
);

export type Props = IrisProps<
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
  const { reject: onCloseReject, complete: onCloseComplete } =
    useClose(onClose);

  const doClick = (event) => {
    event.preventDefault();
    if (onCloseReject) {
      onCloseReject(event);
    }
    if (onCloseComplete) {
      onCloseComplete(event);
    }
  };

  return (
    <NoticeStyled
      format={format}
      icon={icon}
      onClose={onClose}
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
        <NoticeChildren>{children}</NoticeChildren>
      )}

      {onClose && (
        <Dismiss format={format} pill={pill}>
          <Button
            title="Dismiss this notification"
            variant="minimal"
            format="basic"
            size="sm"
            icon={<DismissX />}
            onClick={doClick}
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
