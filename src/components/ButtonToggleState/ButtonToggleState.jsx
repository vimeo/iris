// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../Button/Button';
import PlusIcon from '../../globals/svg/add_iris.svg';
import CheckIcon from '../../globals/svg/checkmark_iris.svg';
import DeleteIcon from '../../globals/svg/dismiss_iris.svg';

const displayName = 'ButtonToggleState';

const defaultProps = {
    format: 'primaryOutline',
};

type Props = {
    offStateText: string,
    onStateText: string,
    format?: 'primaryOutline' | 'primary';
    isActive?: boolean,
    turnOffActionText: string,
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
                    icon: 'Check',
                    children: this.props.onStateText,
                };
                break;
            case 'off':
                toggleState = {
                    format: this.props.format,
                    icon: 'Plus',
                    children: this.props.offStateText,
                };
                break;
            case 'toggleHover':
                toggleState = {
                    icon: 'Delete',
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
            offStateText,  // eslint-disable-line no-unused-vars
            onStateText, // eslint-disable-line no-unused-vars
            isActive, // eslint-disable-line no-unused-vars
            turnOffActionText, // eslint-disable-line no-unused-vars
            ...filteredProps
        } = this.props;


        let Icon;
        switch (this.state.toggleState.icon) {
            case 'Check':
                Icon = (<CheckIcon />);
                break;
            case 'Plus':
                Icon = (<PlusIcon />);
                break;
            case 'Delete':
                Icon = (<DeleteIcon />);
                break;
        }

        return (
                <Button
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
