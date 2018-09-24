// @flow
import React from 'react';
import ReactDOM from 'react-dom';
// $FlowFixMe
import Button from '../Button/Button';

const displayName = 'ButtonToggleState';

const defaultProps = {
    autoMargins: true,
    autoWidth: 'sm',
    format: 'primaryOutline',
};

type Props = {
    autoMargins?: boolean,
    autoWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'fluid',
    offIcon: React$Element<*>,
    offStateText: string,
    onIcon: React$Element<*>,
    onStateText: string,
    format?: 'primaryOutline' | 'primary';
    isActive?: boolean,
    turnOffActionText: string,
    turnOffIcon: React$Element<*>,
    onClick?: Function,
};

class ButtonToggleState extends React.Component {
    static defaultProps: Object;

    constructor(props: Props) {
        super(props);
        this.state = { blockTurnOffState: false };
    }

    state: Object;

    componentWillMount() {
        const isActive = this.props.isActive;
        if (typeof isActive === 'boolean') {
            const activeState = isActive ? 'on' : 'off';
            this._setToggleState(activeState);
        }

    }

    componentDidMount() {
        const el = ReactDOM.findDOMNode(this);
        this.thisEl = el;

        if (el instanceof HTMLElement) {
            el.addEventListener(
                'mouseover',
                this._toggleOffMouseOver.bind(this)
            );
        }
    }

    componentWillReceiveProps(nextProps: Props) {
        if (this.props.isActive !== nextProps.isActive && typeof nextProps.isActive === 'boolean') {
            const activeState = nextProps.isActive ? 'on' : 'off';
            this._setToggleState(activeState);
        }
    }

    props: Props;
    allowTurnOff = this._allowTurnOff.bind(this);
    turnOffMouseLeave = this._turnOffMouseLeave.bind(this);
    handleClick = this._handleClick.bind(this);
    thisEl: any;

    _allowTurnOff() {
        this.setState({ blockTurnOffState: false });
        this.thisEl.removeEventListener(
                    'mouseleave',
                    this.allowTurnOff
        );
    }

    _handleClick(event: Event) {
        if (!this.props.isActive) {
            this.setState({ blockTurnOffState: true });

            this.thisEl.addEventListener(
                    'mouseleave',
                    this.allowTurnOff
            );
        }

        if (typeof this.props.onClick === 'function') {
            this.props.onClick(event);
        }
    }

    _setToggleState(mode: string) {
        let toggleState;
        let OnFormat;
        if (this.props.format === 'primaryOutline') {
            OnFormat = 'successOutline';
        }
        else if (this.props.format === 'primary') {
            OnFormat = 'success';
        }

        switch (mode) {
            case 'on':
                toggleState = {
                    format: OnFormat,
                    icon: 'On',
                    children: this.props.onStateText,
                };
                break;
            case 'off':
                toggleState = {
                    format: this.props.format,
                    icon: 'Off',
                    children: this.props.offStateText,
                };
                break;
            case 'toggleHover':
                toggleState = {
                    icon: 'TurnOff',
                    format: 'secondary',
                    children: this.props.turnOffActionText,
                };
                break;
        }

        this.setState({ toggleState });
    }

    _toggleOffMouseOver() {
        if (this.props.isActive && !this.state.blockTurnOffState) {
            this._setToggleState('toggleHover');
            this.thisEl.addEventListener(
                'mouseleave',
                this.turnOffMouseLeave
            );
        }
    }

    _turnOffMouseLeave() {
        const isActive = this.props.isActive;

        if (typeof isActive === 'boolean') {
            const activeState = isActive ? 'on' : 'off';
            this._setToggleState(activeState);
        }

        this.thisEl.removeEventListener(
                'mouseleave',
                this.turnOffMouseLeave
        );
    }

    render() {
        const {
            autoMargins,
            autoWidth,
            offStateText, // eslint-disable-line no-unused-vars
            offIcon,
            onStateText, // eslint-disable-line no-unused-vars
            onIcon,
            isActive, // eslint-disable-line no-unused-vars
            turnOffActionText, // eslint-disable-line no-unused-vars
            turnOffIcon,
            ...filteredProps
        } = this.props;

        let Icon;
        switch (this.state.toggleState.icon) {
            case 'On':
                Icon = onIcon;
                break;
            case 'Off':
                Icon = offIcon;
                break;
            case 'TurnOff':
                Icon = turnOffIcon;
                break;
        }


        return (
                <Button
                    autoMargins={autoMargins}
                    autoWidth={autoWidth}
                    {...filteredProps}
                    format={this.state.toggleState.format}
                    children={this.state.toggleState.children}
                    icon={Icon}
                    onClick={this.handleClick}
                />
        );
    }
}

ButtonToggleState.displayName = displayName;
ButtonToggleState.defaultProps = defaultProps;
export default ButtonToggleState;
