// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './VerticalMenuNested.scss';
import SlideUpDown from '../SlideUpDown/SlideUpDown';
import VerticalMenuItemContent from '../VerticalMenuItemContent';
import VerticalMenuItem from '../VerticalMenuItem';
import VerticalMenuNestedSubMenu from '../VerticalMenuNestedSubMenu/VerticalMenuNestedSubMenu';


type Props = {
    className?: string,
    isOpen?: Boolean,
    label: string,
    labelIcon?: React$Element<*>,
    labelIconTheme?: 'default' | 'subtle',
    labelId: string,
    isOpen: boolean,
    nestedButtonLabel?: string,
    onClick?: Function,
    onOpen?: Function,
    onClose?: Function,
    render: Function,
    subMenuItems: Array<React$Element<'VerticalMenuItem'>>,
    href: string,
};

type State = {
    subMenuOpen: boolean,
}

class VerticalMenuNested extends React.Component {
    constructor(props: Props) {
        super(props);
        this.state = {
            subMenuOpen: props.isOpen || false,
        };
    }

    state: State;

    componentWillUpdate = (nextProps: Props, nextState: State) => {

        // Open and Close SubMenu based on isOpen prop

        if (nextProps.isOpen !== this.props.isOpen) {
            if (nextProps.isOpen) {
                this.setState({
                    subMenuOpen: true,
                });
            }
            else {
                this.setState({
                    subMenuOpen: false,
                });
            }
        }
    }

    componentDidUpdate(prevProps: Props, prevState: State) {
        if (prevState.subMenuOpen !== this.state.subMenuOpen) {
            if (this.state.subMenuOpen && typeof this.props.onOpen === 'function') {
                this.props.onOpen();
            }
            else if (!this.state.subMenuOpen && typeof this.props.onClose === 'function') {
                this.props.onClose();
            }
        }
    }

    props: Props;

    _handleLinkClick = (e: Event) => {
            // links are only followed if the "to" value has been defined otherwise they just toggle the menu
        if (!this.props.href || this.props.href === '#') {
            e.preventDefault();
            this._toggleMenu();
        }

        if (typeof this.props.onClick === 'function') {
            this.props.onClick();
        }

    };

    _handleToggleClick = (e: Event) => {
        e.preventDefault();
        this._toggleMenu();
    }

    _toggleMenu = () => {
        this.setState({
            subMenuOpen: !this.state.subMenuOpen,
        });
    }

    render() {
        const {
                className,
                label,
                labelIcon,
                labelId,
                labelIconTheme = 'default',
                isOpen, // eslint-disable-line no-unused-vars
                nestedButtonLabel = 'toggle sub-menu',
                render,
                subMenuItems,
                onClick, // eslint-disable-line no-unused-vars
                onClose, // eslint-disable-line no-unused-vars
                onOpen, // eslint-disable-line 
                ...filteredProps
            } = this.props;

            // className builder
        const componentClass = classNames(
                styles.VerticalMenuNested,
                className
            );

        const iconClass = classNames(
                styles.ArrowIcon,
                (this.state.subMenuOpen ? styles.isOpen : null),
            );

        const AnchorTag = (props) => {
            return (
                <a {...props} />
            );
        };

        const WrappedComponent = render || AnchorTag;

        return (
                    <div
                        className={componentClass}
                    >
                        <VerticalMenuItem
                            hasSubMenu
                            id={labelId}

                            onNestedItemClick={this._handleToggleClick}
                            nestedButtonClass={iconClass}
                            nestedButtonLabel={nestedButtonLabel}
                        >
                            <WrappedComponent
                                {...filteredProps}
                                aria-haspopup = "true"
                                aria-expanded = {this.state.subMenuOpen ? 'true' : 'false'}
                                onClick={this._handleLinkClick}
                                children = {(
                                    <VerticalMenuItemContent
                                        label={label}
                                        labelIcon={labelIcon}
                                        labelIconTheme={labelIconTheme}
                                    />
                                )}
                            />
                        </VerticalMenuItem>
                        <SlideUpDown
                            animateOpenOnMount={false}
                            isHidden={!this.state.subMenuOpen}
                            speed={300}
                        >
                            <div
                                className={styles.SubMenuWrapper}
                            >
                                <VerticalMenuNestedSubMenu
                                    labeledById={labelId}
                                    subMenuItems={subMenuItems}
                                />
                            </div>
                        </SlideUpDown>
                    </div>
        );
    }

}


export default VerticalMenuNested;
