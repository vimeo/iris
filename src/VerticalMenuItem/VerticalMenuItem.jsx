// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './VerticalMenuItem.scss';
import KEY_CODES from '../globals/js/constants/KEY_CODES';
// $FlowFixMe
import ButtonIconOnly from '../ButtonIconOnly/ButtonIconOnly';
import VerticalMenuContextualMenuPanel from '../VerticalMenuContextualMenuPanel/VerticalMenuContextualMenuPanel';
import DotsMenuIcon from '../icons/dots-menu.svg';


type Props = {
    className?: string,
    children: React$Element<*>,
    hasRightSideContent?: boolean,
    href?: string,
    isActive?: boolean,
    to?: string,
    nestedInteractionContent?: React$Element<*>,
    nestedInteractionMenuSize?: 'sm' | 'md' | 'lg',
    label: React$Element<*> | string,
    menuPanelTooltip?: string,
    onClick?: Function,
    onNestedItemClick?: Function,
    showNestedByDefault?: boolean,
    nestedButtonClass?: string,
    nestedButtonLabel?: string,
    truncateLabel?: boolean,
};

class VerticalMenuItem extends React.Component {
    static defaultProps = {
        nestedInteractionMenuSize: 'md',
    };

    constructor(props: Props) {
        super(props);
        this.state = {
            nestedMenuOpen: false,
            showNestedInteraction: props.showNestedByDefault || false,
            subMenuOpen: false,
        };
    }

    state: Object;

    componentDidMount() {
        if (this.props.nestedInteractionContent) {
            this._bindListeners();
        }
    }

    props: Props;

    _bindListeners = () => {
        // if a user is using a touch device or keyboard nav, we unhide the menu options.

        document.addEventListener(
                'touchstart',
                this._setToNoHover
            );

        document.addEventListener(
                'keydown',
                this._checkForTab
            );
    }

    _checkForTab = (e: Event) => {
        if (e.keyCode === KEY_CODES.tab) {
            this._setToNoHover();
        }
    }

    _setToNoHover = () => {
        this.setState({
            showNestedInteraction: true,
        });

        document.removeEventListener(
                'touchstart',
                this._setToNoHover
            );

        document.removeEventListener(
                'keydown',
                this._checkForTab
            );
    }

    _handleWrapperMouseOut = () => {
        this.setState({
            showNestedInteraction: this.state.nestedMenuOpen,
        });
    }

    _handleWrapperMouseOver = () => {
        this.setState({
            showNestedInteraction: true,
        });
    }
    _handleLinkMouseOut = () => {
        this.setState({
            linkIsHovered: false,
        });
    }

    _handleLinkMouseOver = () => {
        this.setState({
            linkIsHovered: true,
        });
    }

    _handlePanelOpen = () => {
        this.setState({
            nestedMenuOpen: true,
            showNestedInteraction: true,
        });
    }

    _handlePanelClose = () => {
        this.setState({
            nestedMenuOpen: false,
            showNestedInteraction: false,
        });
    }


    render() {
        const {
            children,
            className,
            hasRightSideContent,
            isActive,
            menuPanelTooltip,
            nestedButtonClass,
            nestedButtonLabel,
            nestedInteractionContent,
            nestedInteractionMenuSize,
            onNestedItemClick,
            ...filteredProps
        } = this.props;

            // className builder
        const componentClass = classNames(
            styles.Wrapper,
            styles.textOverrides,
            className
        );

        const linkWrapperClass = classNames(
            styles.LinkStyleWrapper,
            (hasRightSideContent ? styles.hasRightSideContent : null),
            (isActive ? styles.isActive : null),
        );

        const nestedMenuClass = classNames(
            styles.NestedInteractionWrapper,
            styles.nestedMenuOffset,
            (isActive ? styles.isActive : null),
            (this.state.linkIsHovered ? styles.isHovered : null),
            (this.state.showNestedInteraction ? styles.isShowing : null),
        );

        const nestedMenuCombinedClass = classNames(
            styles.NestedInteractionButton,
            nestedButtonClass,
        );

        const NestedMenuButton = (
                <ButtonIconOnly
                    icon={<DotsMenuIcon title={nestedButtonLabel} className={styles.DotIcon} />}
                    format="dark"
                    size="sm"
                    isButtonElement={false}
                    className={nestedMenuCombinedClass}
                />
            );

        const NestedInteractionComponent = nestedInteractionContent ? (
                <div
                    className={nestedMenuClass}

                >
                    <VerticalMenuContextualMenuPanel
                        tooltipText={menuPanelTooltip}
                        onClose={this._handlePanelClose}
                        onOpen={this._handlePanelOpen}
                        buttonElement={NestedMenuButton}
                        onClick={onNestedItemClick}
                        size={nestedInteractionMenuSize}
                    >
                    {nestedInteractionContent}
                </VerticalMenuContextualMenuPanel>
                </div>
            ) : null;

        return (
                <div
                    {...filteredProps}
                    className={componentClass}
                    onMouseEnter={this._handleWrapperMouseOver}
                    onMouseLeave={this._handleWrapperMouseOut}
                >
                    <div
                        className={linkWrapperClass}
                        onMouseEnter={this._handleLinkMouseOver}
                        onMouseLeave={this._handleLinkMouseOut}
                    >
                        {children}
                    </div>
                    {NestedInteractionComponent}
                </div>
        );
    }
}

export default VerticalMenuItem;
