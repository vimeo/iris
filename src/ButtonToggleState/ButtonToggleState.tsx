import React, {
  ReactNode,
  Component,
  MouseEventHandler,
  CSSProperties,
} from 'react';
import { Button } from '../Button/Button';
import { buttonFormats } from '../Button/ButtonProps';

interface Props {
  autoWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'fluid';
  className?: string;
  format?: 'primaryOutline' | 'primary';
  isActive?: boolean;
  offIcon: ReactNode;
  offStateText: string;
  onClick?: MouseEventHandler;
  onIcon: ReactNode;
  onStateText: string;
  style?: { margins?: string };
  turnOffActionText: string;
  turnOffIcon: ReactNode;
}

interface State {
  children: ReactNode;
  format: buttonFormats;
  icon: 'on' | 'off' | 'turnOff';
}

export class ButtonToggleState extends Component<Props, State> {
  static defaultProps = {
    autoWidth: 'sm',
    format: 'primaryOutline',
  };

  readonly state: Readonly<State> = this.props.isActive
    ? on({}, this.props)
    : off({}, this.props);

  private handleOnMouseEnter = () =>
    this.props.isActive && this.setState(hovering);

  private handleOnMouseLeave = () =>
    this.props.isActive ? this.setState(on) : this.setState(off);

  componentWillReceiveProps = (nextProps: Props) =>
    nextProps.isActive ? this.setState(on) : this.setState(off);

  render() {
    const {
      className,
      offStateText,
      offIcon,
      onStateText,
      onIcon,
      isActive,
      style,
      turnOffActionText,
      turnOffIcon,
      ...props
    } = this.props;

    const Icon = {
      on: onIcon,
      off: offIcon,
      turnOff: turnOffIcon,
    }[this.state.icon];

    return (
      <Button
        {...props}
        style={style as CSSProperties}
        icon={Icon}
        format={this.state.format}
        children={this.state.children}
        className={className}
        onMouseEnter={this.handleOnMouseEnter}
        onMouseLeave={this.handleOnMouseLeave}
      />
    );
  }
}

const on = (
  _,
  { format = 'primaryOutline', onStateText }: Props,
): State => ({
  children: onStateText,
  format: format === 'primaryOutline' ? 'successOutline' : 'success',
  icon: 'on',
});

const off = (
  _,
  { format = 'primaryOutline', offStateText }: Props,
): State => ({
  children: offStateText,
  format,
  icon: 'off',
});

const hovering = (_, { turnOffActionText }): State => ({
  children: turnOffActionText,
  format: 'secondary',
  icon: 'turnOff',
});
