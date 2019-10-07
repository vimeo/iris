import React, { Component } from 'react';
import { KEY_CODES } from '../../legacy';
import { ButtonIconOnly } from '../../components/ButtonIconOnly/ButtonIconOnly';
import { VerticalMenuContextualPopOver } from '../VerticalMenuContextualPopOver/VerticalMenuContextualPopOver';
import {
  VerticalMenuItemProps as Props,
  VerticalMenuItemState as State,
} from './VerticalMenuItemTypes';
import {
  showNestedInteraction,
  nestedMenuOpen,
  linkIsHovered,
  linkIsNotHovered,
  panelClose,
  panelOpen,
} from './VerticalMenuItemState';
import {
  DotsMenuIconStyled,
  LinkWrapper,
  NestedMenu,
  Wrapper,
} from './VerticalMenuItemStyled';

export class VerticalMenuItem extends Component<Props, State> {
  static defaultProps = {
    nestedInteractionMenuSize: 'md',
    showNestedByDefault: false,
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      nestedMenuOpen: false,
      showNestedInteraction: props.showNestedByDefault,
      subMenuOpen: false,
    };
  }

  componentDidMount() {
    if (this.props.nestedInteractionContent) {
      // if touch device or keyboard nav, unhide the menu options
      document.addEventListener('touchstart', this.setToNoHover);
      document.addEventListener('keydown', this.checkForTab);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('touchstart', this.setToNoHover);
    document.removeEventListener('keydown', this.checkForTab);
  }

  private setToNoHover = () => {
    this.setState(showNestedInteraction);
    document.removeEventListener('touchstart', this.setToNoHover);
    document.removeEventListener('keydown', this.checkForTab);
  };

  private checkForTab = (event: KeyboardEvent) =>
    event.keyCode === KEY_CODES.tab && this.setToNoHover();

  private handleWrapperMouseOver = () =>
    this.setState(showNestedInteraction);
  private handleWrapperMouseOut = () => this.setState(nestedMenuOpen);
  private handleLinkMouseOver = () => this.setState(linkIsHovered);
  private handleLinkMouseOut = () => this.setState(linkIsNotHovered);
  private handlePanelClose = () => this.setState(panelClose);
  private handlePanelOpen = () => this.setState(panelOpen);

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

    const NestedMenuButton = (
      <ButtonIconOnly
        icon={<DotsMenuIconStyled />}
        format="dark"
        size="sm"
        isButtonElement={false}
      />
    );

    const NestedInteractionComponent = nestedInteractionContent && (
      <NestedMenu
        isShowing={this.state.showNestedInteraction}
        isActive={isActive}
        isHovered={this.state.linkIsHovered}
      >
        <VerticalMenuContextualPopOver
          tooltipText={menuPanelTooltip}
          onClose={this.handlePanelClose}
          onOpen={this.handlePanelOpen}
          buttonElement={NestedMenuButton}
          onClick={onNestedItemClick}
          size={nestedInteractionMenuSize}
        >
          {nestedInteractionContent}
        </VerticalMenuContextualPopOver>
      </NestedMenu>
    );

    return (
      <Wrapper
        {...filteredProps}
        onMouseEnter={this.handleWrapperMouseOver}
        onMouseLeave={this.handleWrapperMouseOut}
      >
        <LinkWrapper
          onMouseEnter={this.handleLinkMouseOver}
          onMouseLeave={this.handleLinkMouseOut}
          hasRightSideContent={hasRightSideContent}
          isActive={isActive}
        >
          {children}
        </LinkWrapper>
        {NestedInteractionComponent}
      </Wrapper>
    );
  }
}
