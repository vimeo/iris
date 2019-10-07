import React, {
  ReactNode,
  CSSProperties,
  useState,
  useEffect,
} from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import { FeatureTourPanelContent } from '../FeatureTourPanelContent/FeatureTourPanelContent';
import { FeatureTourDot } from '../FeatureTourDot/FeatureTourDot';
import { PopOver } from '../../portals/PopOver/PopOver';

import { DarkerBlue } from '../../../color';
import { IrisComponent } from '../../../utils';

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
  children?: ReactNode;
  className?: string;
  dismissButtonA11yLabel?: string;
  dismissButtonProps?: {};
  dotZIndex?: number;
  headerText?: string;
  shouldHideOnClose?: boolean;
  isOpen?: boolean;
  onClose?: () => void;
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

const PopOverStyled = styled(PopOver)<{ options: any }>`
  border-radius: ${rem(5)};
`;

export const FeatureTourPanel: IrisComponent<
  FeatureTourPanelProps
> = ({
  actionArea,
  attachment = 'right',
  beaconDelayIndex = 0,
  beaconA11yText,
  children,
  color = DarkerBlue,
  contextualInfo,
  dismissButtonA11yLabel,
  dismissButtonProps,
  dotZIndex = 1,
  headerText,
  isOpen = false,
  onOpen,
  onClose,
  onDismissClick,
  shouldHideOnClose,
  shouldRefocusTriggerOnClose = true,
  wrapperClass,
  size = 'lg',
  ...props
}) => {
  let beaconTimer: any;

  const setDelay = (beaconDelayIndex: number) => {
    beaconTimer = setTimeout(() => {
      if (beaconMode === 'inactive') {
        setBeaconMode('active');
      }
    }, beaconDelayIndex * 300);
  };

  const chooseBeaconMode = defaultMode => {
    if (isOpen) {
      clearTimeout(beaconTimer);
      return 'open';
    } else if (beaconDelayIndex && beaconDelayIndex > 0) {
      clearTimeout(beaconTimer);
      setDelay(beaconDelayIndex);
      return 'inactive';
    }
    return defaultMode;
  };

  const [beaconMode, setBeaconMode] = useState(() =>
    chooseBeaconMode('active'),
  );

  useEffect(() => {
    return () => clearTimeout(beaconTimer);
  }, []);

  useEffect(() => {
    setBeaconMode(chooseBeaconMode(beaconMode));
  }, [isOpen]);

  const handleOpen = () => {
    clearTimeout(beaconTimer);
    setBeaconMode('open');

    if (typeof onOpen === 'function') {
      onOpen();
    }
  };

  const handleClose = () => {
    setBeaconMode(shouldHideOnClose ? 'hidden' : 'inactive');

    if (typeof onClose === 'function') {
      onClose();
    }
  };

  const handleDismissClick = (event: MouseEvent) => {
    setBeaconMode('inactive');

    if (typeof onDismissClick === 'function') {
      onDismissClick(event);
    }
  };

  const PopOverContent = (
    <FeatureTourPanelContent
      actionArea={actionArea}
      contextualInfo={contextualInfo}
      headerText={headerText}
      dismissButtonA11yLabel={dismissButtonA11yLabel}
      dismissButtonProps={dismissButtonProps}
      onDismissClick={handleDismissClick}
      children={children}
      color={color}
    />
  );

  return (
    <WrapperStyled
      className={wrapperClass}
      isHidden={beaconMode === 'hidden'}
    >
      <PopOverStyled
        {...props}
        isShowing={beaconMode === 'open'}
        menuContent={PopOverContent}
        onClose={handleClose}
        onOpen={handleOpen}
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
          mode={beaconMode}
          color={color}
        />
      </PopOverStyled>
    </WrapperStyled>
  );
};

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
