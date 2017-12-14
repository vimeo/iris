// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './VerticalMenuItem.scss';
import KEY_CODES from '../globals/js/constants/KEY_CODES';
import ButtonIconOnly from '../ButtonIconOnly/ButtonIconOnly';
import VerticalMenuContextualMenuPanel from '../VerticalMenuContextualMenuPanel/VerticalMenuContextualMenuPanel';
import DotsMenuIcon from '../icons/dots-menu.svg';
import RightArrow from '../icons/chevron-right.svg';

type Props = {
    className?: string,
    children: React$Element<*>,
    href?: string,
    to?: string,
    hasSubMenu?: boolean,
    linkActionIcon?: React$Element<*>,
    labelIcon?: React$Element<*>,
    labelIconActive?: React$Element<*>,
    labelIconTheme?: 'default' | 'subtle';
    nestedInteractionContent?: React$Element<*>,
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

    constructor(props: Props) {
        super(props);
        this.state = {
            showNestedInteraction: props.showNestedByDefault || false,
            nestedMenuOpen: false,
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

    _handleMouseOut = () => {
        this.setState({
            showNestedInteraction: this.state.nestedMenuOpen,
        });
    }

    _handleMouseOver = () => {
        this.setState({
            showNestedInteraction: true,
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
                hasSubMenu,
                menuPanelTooltip,
                nestedButtonClass,
                nestedButtonLabel,
                nestedInteractionContent,
                onNestedItemClick,
                ...filteredProps
            } = this.props;

            // className builder
        const componentClass = classNames(
                styles.Wrapper,
                styles.textOverrides,
                className
            );

        const nestedMenuClass = classNames(
                styles.NestedInteractionWrapper,
                styles.nestedMenuOffset,
                (this.state.showNestedInteraction ? styles.isShowing : null),
            );

        const subMenuToggleClass = classNames(
                styles.NestedInteractionWrapper,
                styles.isShowing,
            );

        const NestedMenuButton = (
                <ButtonIconOnly
                    icon={<DotsMenuIcon />}
                    format="dark"
                    size="sm"
                    isButtonElement={false}
                    className={nestedButtonClass}
                    title={nestedButtonLabel}
                />
            );

        const NestedInteractionComponent = nestedInteractionContent && !hasSubMenu ? (
                <div
                    className={nestedMenuClass}

                >
                    <VerticalMenuContextualMenuPanel
                        tooltipText={menuPanelTooltip}
                        onClose={this._handlePanelClose}
                        onOpen={this._handlePanelOpen}
                        buttonElement={NestedMenuButton}
                        onClick={onNestedItemClick}
                    >
                    {nestedInteractionContent}
                </VerticalMenuContextualMenuPanel>
                </div>
            ) : null;

        const SubMenuToggleComponent = hasSubMenu ? (
                <div
                    className={subMenuToggleClass}
                >
                    <ButtonIconOnly
                        title={nestedButtonLabel}
                        icon={<RightArrow />}
                        format="dark"
                        size="sm"
                        isButtonElement={false}
                        className={nestedButtonClass}
                        onClick={onNestedItemClick}
                    />
                </div>
            ) : null;

        return (
                <div
                    {...filteredProps}
                    className={componentClass}
                    onMouseOver={this._handleMouseOver}
                    onMouseOut={this._handleMouseOut}
                >
                    <div className={styles.LinkStyleWrapper}>
                        {children}
                    </div>
                    {NestedInteractionComponent}
                    {SubMenuToggleComponent}
                </div>
        );
    }
}

export default VerticalMenuItem;
