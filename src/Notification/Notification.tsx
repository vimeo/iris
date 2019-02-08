import React, { SFC, ReactNode, MouseEventHandler } from 'react';
import { ButtonDialogClose } from '../ButtonDialogClose/ButtonDialogClose';
import { Header5 } from '../Type';
import {
  NotificationStyled,
  Icon,
  Dismiss,
} from './NotificationStyled';
import { CircleInfo, Checkmark, CircleWarning } from '../Icons';

export type Variant = 'neutral' | 'success' | 'warning';

interface Props {
  className?: string;
  dismissButtonClassName?: string;
  header?: string;
  icon?: ReactNode;
  id?: string;
  onDismiss?: MouseEventHandler;
  variant: Variant;
}

export const Notification: SFC<Props> = ({
  children,
  header,
  icon = true,
  onDismiss,
  variant,
  ...props
}) => (
  <NotificationStyled icon={icon} variant={variant} {...props}>
    {icon && (
      <Icon header={header} variant={variant}>
        {getIcon(icon, variant)}
      </Icon>
    )}

    {header && <Header5>{header}</Header5>}
    {children}

    {onDismiss && (
      <Dismiss variant={variant}>
        <ButtonDialogClose
          onClick={onDismiss}
          buttonTitle="Dismiss this notification"
          format="lightTransparent"
        />
      </Dismiss>
    )}
  </NotificationStyled>
);

const defaultIcons = {
  neutral: <CircleInfo />,
  success: <Checkmark />,
  warning: <CircleWarning />,
};

const getIcon = (icon, variant) =>
  icon === true ? defaultIcons[variant] : icon;
