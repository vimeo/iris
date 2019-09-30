import React, { ReactNode, useEffect, useState } from 'react';
import {
  ActionLink,
  Content,
  InfoIconStyled,
  ToastStyled,
  Wrapper,
} from './ToastificationStyled';
import { IrisComponent } from '../../utils';

interface Props {
  actionLabel?: string;
  children: ReactNode;
  format?: 'warning' | 'neutral';
  isShowing?: boolean;
  onActionClick?: React.MouseEventHandler;
  onComplete?: () => void;
}

export const Toastification: IrisComponent<Props> = ({
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

  const setToastTimeout = duration => {
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
      setToastTimeout(actionLabel ? 6000 : 3000);
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

  const handleToastMouseEnter = () => clearTimeout();
  const handleToastMouseLeave = () => setToastTimeout(750);

  return (
    showing && (
      <Wrapper>
        <ToastStyled
          {...props}
          format={format}
          actionLabel={actionLabel}
          onMouseEnter={handleToastMouseEnter}
          onMouseLeave={handleToastMouseLeave}
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
        </ToastStyled>
      </Wrapper>
    )
  );
};
