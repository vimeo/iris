import React, { Component, ReactNode, CSSProperties } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { FeatureTourPanelContent } from '../FeatureTourPanelContent/FeatureTourPanelContent';
import { FeatureTourDot } from '../FeatureTourDot/FeatureTourDot';
import { MenuPanel } from '../MenuPanel/MenuPanel';
import { DarkerBlue } from '../Color/Color';

export interface FeatureTourPanelProps {
  actionArea?: ReactNode;
  attachment?: 'top' | 'left' | 'right' | 'bottom';
  beaconDelayIndex?: number;
  beaconA11yText: string;
  children: ReactNode;
  className?: string;
  contextualInfo?: ReactNode;
  dismissButtonA11yLabel: string;
  dismissButtonProps?: {};
  dotZIndex?: number;
  headerText?: string;
  shouldHideOnClose?: boolean;
  isOpen?: boolean;
  onClose?: () => void;
  onDismissClick?: (event?: MouseEvent) => void;
  onOpen?: () => void;
  shouldRefocusTriggerOnClose?: boolean;
  wrapperClass?: string;
  style?: CSSProperties;
  color?: string;
  size?: 'lg' | 'xl';
}

export interface FeatureTourPanelState {
  beaconMode?: 'inactive' | 'open' | 'active' | 'hidden';
  beaconDelayIndex?: number;
  beaconA11yText?: string;
  children: ReactNode;
  className?: string;
  dismissButtonA11yLabel: string;
  dismissButtonProps?: {};
  dotZIndex?: number;
  headerText?: string;
  shouldHideOnClose?: boolean;
  isOpen?: boolean;
  onClose: () => void;
  onDismissClick?: (e: Event) => void;
  onOpen?: () => void;
  shouldRefocusTriggerOnClose?: boolean;
  wrapperClass?: string;
}

interface WrapperStyledProps extends React.HTMLProps<HTMLDivElement> {
  beaconMode?: 'inactive' | 'open' | 'active' | 'hidden';
  isHidden: boolean;
}
const WrapperStyled = styled.div<WrapperStyledProps>`
    display: ${props => (props.isHidden ? 'none' : 'block')}
    overflow: visible;

    * {
        overflow: visible;
    }
`;

const MenuPanelStyled = styled(MenuPanel)<{ options: any }>`
  border-radius: ${rem(5)};
`;

export class FeatureTourPanel extends Component<
  FeatureTourPanelProps,
  FeatureTourPanelState
> {
  static defaultProps = {
    attachment: 'right',
    beaconDelayIndex: 0,
    shouldRefocusTriggerOnClose: true,
  };

  constructor(props: FeatureTourPanelProps) {
    super(props);

    let initialBeaconMode: 'inactive' | 'open' | 'active' | 'hidden' =
      'active';

    if (props.isOpen) {
      initialBeaconMode = 'open';
    } else if (props.beaconDelayIndex && props.beaconDelayIndex > 0) {
      initialBeaconMode = 'inactive';
    }

    // @ts-ignore
    this.state = {
      isOpen: props.isOpen ? true : false,
      beaconMode: initialBeaconMode,
    };
  }

  state: FeatureTourPanelState;

  componentDidMount() {
    if (this.props.beaconDelayIndex) {
      this._setDelay(this.props.beaconDelayIndex);
    }
  }

  componentWillUpdate(
    nextProps: FeatureTourPanelProps,
    nextState: FeatureTourPanelState,
  ) {
    if (nextProps.isOpen !== this.props.isOpen) {
      this.setState({
        isOpen: nextProps.isOpen,
        beaconMode: this._chooseBeaconState(nextProps),
      });
    }

    if (
      this.state.beaconMode === 'active' &&
      nextState.beaconMode !== 'active'
    ) {
      clearTimeout(this.beaconTimer);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.beaconTimer);
  }

  props: FeatureTourPanelProps;
  beaconTimer: any;

  _chooseBeaconState = (choiceProps: FeatureTourPanelProps) => {
    if (choiceProps.beaconDelayIndex && !choiceProps.isOpen) {
      this._setDelay(choiceProps.beaconDelayIndex);
      return 'inactive';
    } else if (choiceProps.isOpen) {
      return 'open';
    }

    return this.state.beaconMode;
  };

  _handleClose = () => {
    this.setState({
      isOpen: false,
      beaconMode: this.props.shouldHideOnClose
        ? 'hidden'
        : 'inactive',
    });

    if (typeof this.props.onClose === 'function') {
      this.props.onClose();
    }
  };

  _handleDismissClick = (event: MouseEvent) => {
    this.setState({
      isOpen: false,
      beaconMode: 'inactive',
    });

    if (typeof this.props.onDismissClick === 'function') {
      this.props.onDismissClick(event);
    }
  };

  _handleOpen = () => {
    this.setState({
      isOpen: true,
      beaconMode: 'open',
    });

    if (typeof this.props.onOpen === 'function') {
      this.props.onOpen();
    }
  };

  _setDelay = (beaconDelayIndex: number) => {
    this.beaconTimer = setTimeout(() => {
      if (this.state.beaconMode === 'inactive') {
        this.setState({
          beaconMode: 'active',
        });
      }
    }, beaconDelayIndex * 300);
  };

  render() {
    const {
      actionArea,
      attachment,
      beaconDelayIndex, // eslint-disable-line no-unused-vars
      beaconA11yText,
      children,
      color = DarkerBlue,
      contextualInfo,
      dismissButtonA11yLabel,
      dismissButtonProps,
      dotZIndex = 1,
      headerText,
      isOpen, // eslint-disable-line no-unused-vars
      onOpen, // eslint-disable-line no-unused-vars
      onClose, // eslint-disable-line no-unused-vars
      onDismissClick, // eslint-disable-line no-unused-vars
      shouldHideOnClose,
      shouldRefocusTriggerOnClose,
      wrapperClass,
      size = 'lg',
      ...filteredProps
    } = this.props;

    const MenuPanelContent = (
      <FeatureTourPanelContent
        actionArea={actionArea}
        contextualInfo={contextualInfo}
        headerText={headerText}
        dismissButtonA11yLabel={dismissButtonA11yLabel}
        dismissButtonProps={dismissButtonProps}
        onDismissClick={this._handleDismissClick}
        children={children}
        color={color}
      />
    );

    return (
      <WrapperStyled
        className={wrapperClass}
        isHidden={this.state.beaconMode === 'hidden'}
      >
        <MenuPanelStyled
          {...filteredProps}
          isShowing={this.state.isOpen}
          menuContent={MenuPanelContent}
          onClose={this._handleClose}
          onOpen={this._handleOpen}
          shouldRefocusTriggerOnClose={
            shouldHideOnClose ? false : shouldRefocusTriggerOnClose
          }
          size={size}
          options={attachmentConfig(attachment)}
        >
          <FeatureTourDot
            style={{
              zIndex: dotZIndex,
            }}
            beaconA11yText={beaconA11yText}
            mode={this.state.beaconMode}
            color={color}
          />
        </MenuPanelStyled>
      </WrapperStyled>
    );
  }
}

const attachmentConfig = attachment =>
  ({
    top: {
      attachment: 'bottom center',
      offset: `48px 0`,
      TargetAttachment: 'bottom center',
    },
    right: {
      attachment: 'top left',
      offset: '36px -24px',
      TargetAttachment: 'top right',
    },
    bottom: {
      attachment: 'top center',
      offset: `0 0`,
      TargetAttachment: 'top center',
    },
    left: {
      attachment: 'top right',
      offset: '36px 24px',
      TargetAttachment: 'top left',
    },
  }[attachment]);
