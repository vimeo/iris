import React, { Component } from 'react';
import SlideUpDown from '../SlideUpDown/SlideUpDown';
import VerticalMenuToggleButton from '../VerticalMenuToggleButton/VerticalMenuToggleButton';
import { VerticalMenuItemContent } from '../VerticalMenuItemContent';
import { VerticalMenuItem } from '../VerticalMenuItem';
import { VerticalMenuNestedSubMenu } from '../VerticalMenuNestedSubMenu';
import { Props, State } from './VerticalMenuNestedTypes';
import {
    VerticalMenuNestedStyled,
    SubMenuToggle,
    SubMenuWrapper,
    ActionButton,
} from './VerticalMenuNestedStyled';

class VerticalMenuNested extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            subMenuOpen: props.isOpen || false,
        };
    }

    componentWillUpdate = (nextProps: Props) => {
        if (nextProps.isOpen !== this.props.isOpen) {
            if (nextProps.isOpen) {
                this.setState({ subMenuOpen: true });
            } else {
                this.setState({ subMenuOpen: false });
            }
        }
    };

    componentDidUpdate(_, prevState: State) {
        if (prevState.subMenuOpen !== this.state.subMenuOpen) {
            if (this.props.onOpen && this.state.subMenuOpen) {
                this.props.onOpen();
            } else if (this.props.onClose && !this.state.subMenuOpen) {
                this.props.onClose();
            }
        }
    }

    private handleClick = (e: React.MouseEvent<any>) =>
        this.props.onClick && this.props.onClick(e);

    private handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) =>
        this.suppressLink()
            ? (this.handleToggleClick(e as any), this.handleClick(e))
            : this.handleClick(e);

    private suppressLink = () =>
        (!this.props.href && !this.props.to) ||
        this.props.href === '#' ||
        this.props.to === '#';

    private handleToggleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        this.toggleMenu();
    };

    private toggleMenu = () => {
        this.setState({
            subMenuOpen: !this.state.subMenuOpen,
        });
    };

    render() {
        const {
            actionButton,
            className,
            label,
            labelIcon,
            labelId,
            labelIconTheme = 'default',
            isActive,
            isOpen,
            nestedButtonLabel = 'toggle sub-menu',
            render,
            subMenuItems,
            onClick,
            onClose,
            onOpen,
            ...filteredProps
        } = this.props;

        const Link = (render as any) || (props => <a {...props} />);

        return (
            <VerticalMenuNestedStyled>
                <SubMenuToggle isOpen={this.state.subMenuOpen}>
                    <VerticalMenuToggleButton
                        nestedButtonLabel={nestedButtonLabel}
                        onClick={this.handleToggleClick}
                    />
                </SubMenuToggle>

                {actionButton && <ActionButton>{actionButton}</ActionButton>}

                <VerticalMenuItem
                    id={labelId}
                    label={label}
                    isActive={isActive}
                    hasRightSideContent={actionButton ? true : false}
                >
                    <Link
                        {...filteredProps}
                        aria-haspopup="true"
                        aria-expanded={
                            this.state.subMenuOpen ? 'true' : 'false'
                        }
                        onClick={this.handleLinkClick}
                        children={
                            <VerticalMenuItemContent
                                hasSubMenu
                                isActive={isActive}
                                label={label}
                                labelIcon={labelIcon}
                                labelIconTheme={labelIconTheme}
                            />
                        }
                    />
                </VerticalMenuItem>

                <SlideUpDown isHidden={!this.state.subMenuOpen}>
                    <SubMenuWrapper>
                        <VerticalMenuNestedSubMenu
                            labeledById={labelId}
                            subMenuItems={subMenuItems}
                        />
                    </SubMenuWrapper>
                </SlideUpDown>
            </VerticalMenuNestedStyled>
        );
    }
}

export default VerticalMenuNested;
