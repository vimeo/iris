import React, { SFC, ReactNode, MouseEventHandler } from 'react';

import { ButtonDialogClose } from '../../buttons/ButtonDialogClose/ButtonDialogClose';
import { NoticeStyled, Icon, Dismiss } from './NoticeStyled';

import { Header5 } from '../../../legacy';
import { CircleInfo, Checkmark, CircleWarning } from '../../../icons';

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

export const Notice: SFC<Props> = ({
  children,
  header,
  icon = true,
  onDismiss,
  variant,
  ...props
}) => (
  <NoticeStyled icon={icon} variant={variant} {...props}>
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
          buttonTitle="Dismiss this Notice"
          format="lightTransparent"
        />
      </Dismiss>
    )}
  </NoticeStyled>
);

const defaultIcons = {
  neutral: <CircleInfo />,
  success: <Checkmark />,
  warning: <CircleWarning />,
};

const getIcon = (icon, variant) =>
  icon === true ? defaultIcons[variant] : icon;
