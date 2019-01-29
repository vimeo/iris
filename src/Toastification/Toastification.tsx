import React, { ReactNode, Component } from 'react';
import {
  ActionLink,
  Content,
  InfoIconStyled,
  ToastStyled,
  Wrapper,
} from './ToastificationStyled';

interface Props {
  actionLabel?: string;
  children: ReactNode;
  format?: 'warning' | 'neutral';
  isShowing?: boolean;
  onActionClick?: React.MouseEventHandler;
  onComplete?: () => void;
}

interface State {
  showing: boolean;
}

const defaultProps: Props = {
  children: null,
  format: 'warning',
  onActionClick: () => null,
  onComplete: () => null,
};

export class Toastification extends Component<Props, State> {
  readonly state: Readonly<State>;
  static defaultProps = defaultProps;
  timeout?: ReturnType<typeof window.setTimeout>;

  componentWillMount = () => this.setState(toggle(this.props));
  componentWillUnmount = () => this.clearTimeout();
  componentDidMount = () => this.delayedHide();

  componentDidUpdate = (prevP: Props) => this.delayedHide(prevP);
  componentWillReceiveProps = (nextP: Props) =>
    this.setState(toggle(nextP));

  private handleToastMouseEnter = () => this.clearTimeout();
  private handleToastMouseLeave = () => this.setTimeout(750);

  private handleActionClick = (e: React.MouseEvent) => {
    e.preventDefault();
    this.props.onActionClick(e);
    this.setState(hide);
  };

  private delayedHide = (prevP: any = {}) =>
    !prevP.isShowing &&
    this.state.showing &&
    this.setTimeout(this.props.actionLabel ? 6000 : 3000);

  private clearTimeout = () => window.clearTimeout(this.timeout);

  private setTimeout = duration => {
    this.timeout = window.setTimeout(() => {
      this.setState(hide);
      setTimeout(() => this.props.onComplete(), 200);
    }, duration);
  };

  render() {
    const {
      actionLabel,
      children,
      format,
      isShowing,
      onActionClick,
      onComplete,
      ...props
    } = this.props;

    return (
      this.state.showing && (
        <Wrapper>
          <ToastStyled
            {...props}
            format={format}
            actionLabel={actionLabel}
            onMouseEnter={this.handleToastMouseEnter}
            onMouseLeave={this.handleToastMouseLeave}
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
                  <ActionLink
                    href="#"
                    onClick={this.handleActionClick}
                  >
                    {actionLabel}
                  </ActionLink>
                </span>
              )}
            </Content>
          </ToastStyled>
        </Wrapper>
      )
    );
  }
}

const show = (): State => ({ showing: true });
const hide = (): State => ({ showing: false });
const toggle = ({ isShowing }: Props) => (isShowing ? show : hide);
