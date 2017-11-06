// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './VerticalMenuItem.scss';
import KEY_CODES from '../../globals/js/constants/KEY_CODES';
import ButtonIconOnly from '../ButtonIconOnly/ButtonIconOnly';
import VerticalMenuItemContent from '../VerticalMenuItemContent/VerticalMenuItemContent';
import VerticalMenuContextualMenuPanel from '../VerticalMenuContextualMenuPanel/VerticalMenuContextualMenuPanel';
import DotsMenuIcon from '../../globals/svg/dots-menu.svg';
import RightArrow from '../../globals/svg/chevron-right.svg';
import { Link } from 'react-router-dom';

const displayName = 'VerticalMenuItem';


type Props = {
    className?: string,
    to?: string,
    hasSubMenu?: boolean,
    isActive?: boolean,
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
            showNestedInteraction: this.state.subMenuOpen,
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
            className,
            label,
            hasSubMenu,
            isActive,
            labelIcon,
            labelIconActive,
            labelIconTheme = 'default',
            linkActionIcon,
            menuPanelTooltip,
            nestedButtonClass,
            nestedButtonLabel,
            nestedInteractionContent,
            onClick,
            onNestedItemClick,
            to = '#',
            truncateLabel,
            ...filteredProps
        } = this.props;

        // className builder
        const componentClass = classNames(
            styles.Wrapper,
            styles.textOverrides,
            (isActive ? styles.isActive : null),
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
                onMouseOver={this._handleMouseOver}
                onMouseOut={this._handleMouseOut}
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
            <div className={componentClass}>
                <Link
                    {...filteredProps}
                    className={styles.Link}
                    to={to}
                    onClick={onClick}
                    onMouseOver={this._handleMouseOver}
                    onMouseOut={this._handleMouseOut}
                >
                    <VerticalMenuItemContent
                        label={label}
                        labelIcon={labelIcon}
                        linkActionIcon={linkActionIcon}
                        labelIconActive={labelIconActive}
                        labelIconTheme={labelIconTheme}
                        isActive={isActive}
                        truncateLabel={truncateLabel}
                        onClose={this._handlePanelClose}
                    />
                </Link>
                {NestedInteractionComponent}
                {SubMenuToggleComponent}
            </div>
        );

    }
}

VerticalMenuItem.displayName = displayName;

export default VerticalMenuItem;
