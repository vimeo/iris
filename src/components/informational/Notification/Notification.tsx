import React, { ReactNode, useEffect, useState } from 'react';
import {
  ActionLink,
  Content,
  InfoIconStyled,
  NotificationStyled,
  Wrapper,
} from './NotificationStyled';
import { IrisComponent } from '../../../utils';

interface Props {
  actionLabel?: string;
  children: ReactNode;
  format?: 'warning' | 'neutral';
  isShowing?: boolean;
  onActionClick?: React.MouseEventHandler;
  onComplete?: () => void;
}

export const Notification: IrisComponent<Props> = ({
  actionLabel,
  children = null,
  format = 'warning',
  isShowing,
  onActionClick = () => null,
  onComplete = () => null,
  ...props
}) => {
  const [showing, setShowing] = useState(
    isShowing ? isShowing : false,
  );

  let timeout: ReturnType<typeof window.setTimeout>;

  const clearTimeout = () => {
    window.clearTimeout(timeout);
  };

  const setNotificationTimeout = duration => {
    timeout = window.setTimeout(() => {
      onComplete();
      setShowing(false);
    }, duration);
  };

  useEffect(() => {
    isShowing ? setShowing(true) : setShowing(false);
  }, [isShowing]);

  useEffect(() => {
    if (showing) {
      setNotificationTimeout(actionLabel ? 6000 : 3000);
    } else {
      clearTimeout();
    }
  }, [showing]);

  useEffect(() => {
    return () => clearTimeout();
  }, []);

  const handleActionClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onActionClick(e);
    setShowing(false);
  };

  const handleNotificationMouseEnter = () => clearTimeout();
  const handleNotificationMouseLeave = () =>
    setNotificationTimeout(750);

  return (
    showing && (
      <Wrapper>
        <NotificationStyled
          {...props}
          format={format}
          actionLabel={actionLabel}
          onMouseEnter={handleNotificationMouseEnter}
          onMouseLeave={handleNotificationMouseLeave}
        >
          <Content format="white">
            {format === 'warning' && (
              <span>
                <InfoIconStyled />
              </span>
            )}
            {children}
            {actionLabel && (
              <span>
                &nbsp;
                <ActionLink href="#" onClick={handleActionClick}>
                  {actionLabel}
                </ActionLink>
              </span>
            )}
          </Content>
        </NotificationStyled>
      </Wrapper>
    )
  );
};
