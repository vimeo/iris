import React, {
  useEffect,
  useReducer,
  MouseEventHandler,
  useCallback,
  ReactElement,
} from 'react';

import {
  Action,
  Content,
  Icon,
  Notification as Styled,
  Wrapper,
} from './Notification.style';
import { reducer } from './Notification.state';

import { withIris, IrisProps } from '../../utils';

export const Notification = withIris<HTMLDivElement, Props>(
  NotficationComponent
);

export type Props = IrisProps<{
  actionLabel?: string;
  content: ReactElement | string;
  status?: 'negative' | 'neutral';
  duration?: number;
  automatic?: boolean;
  showing?: boolean;
  action?: { label: string; onClick: MouseEventHandler };
  onComplete?: () => void;
}>;

function NotficationComponent({
  automatic = false,
  action,
  actionLabel,
  children = null,
  status = 'negative',
  forwardRef,
  duration = 4000,
  content,
  onComplete,
  ...props
}: Props) {
  const controlled = typeof props.showing !== 'undefined';

  const initialState = {
    active: automatic,
    showing: automatic,
    time: duration,
  };

  useEffect(() => {
    if (controlled) {
      dispatch(props.showing ? 'SHOW' : 'HIDE');
      dispatch(props.showing ? 'RESUME' : 'PAUSE');
      dispatch('RESET');
    }
  }, [controlled, props.showing]);

  const [{ showing, time, active }, dispatch] = useReducer(
    reducer(duration),
    initialState
  );

  const toggle = useCallback(() => {
    if (active) dispatch('PAUSE');
    if (!active) dispatch('RESUME');

    if (showing) dispatch('HIDE');
    if (!showing) dispatch('SHOW');

    dispatch('RESET');
  }, [active, showing]);

  const pause = () => dispatch('PAUSE');
  const resume = () => dispatch('RESUME');

  const finish = useCallback(() => {
    dispatch('PAUSE');
    dispatch('HIDE');
    onComplete && onComplete();
  }, [onComplete]);

  useEffect(() => {
    const timer = setInterval(() => dispatch('TICK'), 100);

    if (time <= 0) finish();

    if (!active) clearInterval(timer);
    return () => clearInterval(timer);
  }, [active, time, finish]);

  const icon = status === 'negative' &&
    typeof content === 'string' && (
      <span>
        <Icon />
      </span>
    );

  return (
    <>
      {children && <div onClick={toggle}>{children}</div>}
      {(showing || props.showing) && (
        <Wrapper>
          <Styled
            icon={icon}
            status={status}
            duration={duration}
            actionLabel={actionLabel}
            onMouseEnter={pause}
            onMouseLeave={resume}
            ref={forwardRef}
            {...props}
          >
            <Content>
              {icon}
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
