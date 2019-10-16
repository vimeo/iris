import React, {
  useEffect,
  useReducer,
  MouseEventHandler,
} from 'react';

import {
  Action,
  Content,
  Icon,
  Notification as Styled,
  Wrapper,
} from './Notification.style';
import { reducer } from './Notification.state';

import { withIris, IrisProps } from '../../../utils';

export const Notification = withIris<HTMLDivElement, Props>(
  NotficationComponent,
);

type Props = IrisProps<{
  actionLabel?: string;
  content: string;
  format?: 'warning' | 'neutral';
  duration?: number;
  automatic?: boolean;
  showing?: boolean;
  action?: { label: string; onClick: MouseEventHandler };
  onComplete?: () => void;
}>;

function NotficationComponent({
  automatic = false,
  showing: controlled = false,
  action,
  actionLabel,
  children = null,
  format = 'warning',
  forwardRef,
  duration = 4000,
  content,
  onComplete,
  ...props
}: Props) {
  console.log({ automatic });

  const initialState = {
    active: automatic,
    showing: automatic,
    time: duration,
  };

  const [{ showing, time, active }, dispatch] = useReducer(
    reducer(duration),
    initialState,
  );

  function toggle() {
    if (active) dispatch('PAUSE');
    if (!active) dispatch('RESUME');

    if (showing) dispatch('HIDE');
    if (!showing) dispatch('SHOW');

    dispatch('RESET');
  }

  const pause = () => dispatch('PAUSE');
  const resume = () => dispatch('RESUME');

  function finish() {
    dispatch('PAUSE');
    dispatch('HIDE');
    onComplete && onComplete();
  }

  useEffect(() => {
    const timer = setInterval(() => dispatch('TICK'), 100);

    if (time <= 0) finish();

    if (!active) clearInterval(timer);
    return () => clearInterval(timer);
  }, [active, time]);

  return (
    <>
      {children && <div onClick={toggle}>{children}</div>}
      {(controlled || showing) && (
        <Wrapper>
          <Styled
            format={format}
            duration={duration}
            actionLabel={actionLabel}
            onMouseEnter={pause}
            onMouseLeave={resume}
            ref={forwardRef}
            {...props}
          >
            <Content>
              {format === 'warning' && (
                <span>
                  <Icon />
                </span>
              )}
              {content}

              {actionLabel && (
                <span>
                  &nbsp;
                  <Action href="#" onClick={action.onClick}>
                    {actionLabel}
                  </Action>
                </span>
              )}
            </Content>
          </Styled>
        </Wrapper>
      )}
    </>
  );
}
