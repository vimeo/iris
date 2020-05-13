import React, {
  ReactNode,
  CSSProperties,
  useState,
  EventHandler,
} from 'react';
import { adjustHue, setSaturation } from 'polished';

import { FeatureTourPanelContent } from './FeatureTourPanelContent';
import { Dot } from './Dot';

import { PopOver } from '../../portals/PopOver/PopOver';
import { blue } from '../../../color';
import { withIris, IrisProps, useClose } from '../../../utils';

const BLUE = adjustHue(30, setSaturation(0.9, blue(600)));

export const FeatureTourPanel = withIris<HTMLDivElement, Props>(
  FeatureTourPanelComponent,
);

type Props = IrisProps<
  {
    actionArea?: ReactNode;
    attach?: 'top' | 'left' | 'right' | 'bottom';
    beaconA11yText: string;
    beaconDelayIndex?: number;
    children: ReactNode;
    className?: string;
    color?: string;
    contextualInfo?: ReactNode;
    dismissButtonA11yLabel: string;
    dismissButtonProps?: {};
    dotZIndex?: number;
    headerText?: string;
    isOpen?: boolean;
    onClose?: EventHandler<any>;
    onOpen?: EventHandler<any>;
    shouldHideOnClose?: boolean;
    shouldRefocusTriggerOnClose?: boolean;
    size?: 'md' | 'lg' | 'xl';
    style?: CSSProperties;
    wrapperClass?: string;
  },
  HTMLDivElement
>;

type BeaconModes = 'active' | 'inactive' | 'hidden' | 'open';

function FeatureTourPanelComponent({
  actionArea,
  attach = 'right',
  beaconDelayIndex = 0,
  beaconA11yText,
  children,
  color = BLUE,
  contextualInfo,
  dismissButtonA11yLabel,
  dismissButtonProps,
  dotZIndex = 1,
  forwardRef,
  headerText,
  isOpen = false,
  onOpen,
  onClose,
  shouldHideOnClose,
  shouldRefocusTriggerOnClose = true,
  wrapperClass,
  size = 'md',
  style,
  ...props
}: Props) {
  const [mode, setMode] = useState<BeaconModes>('active');
  const { reject, complete } = useClose(onClose);

  function doOpen(e) {
    setMode('open');
    onOpen && onOpen(e);
  }

  const doClose = event => {
    event.preventDefault();
    setMode('inactive');

    if (reject) reject(event);
    if (complete) complete(event);
  };

  return (
    <PopOver
      onClose={doClose}
      onOpen={doOpen}
      attach={attach}
      style={{ background: 'transparent' }}
      content={
        <FeatureTourPanelContent
          actionArea={actionArea}
          children={children}
          color={color}
          contextualInfo={contextualInfo}
          dismissButtonA11yLabel={dismissButtonA11yLabel}
          dismissButtonProps={dismissButtonProps}
          headerText={headerText}
          onClose={doClose}
          size={size}
          {...props}
        />
      }
    >
      <Dot
        style={{ zIndex: dotZIndex, ...style }}
        beaconA11yText={beaconA11yText}
        beaconDelayIndex={beaconDelayIndex}
        mode={mode}
        color={color}
        clear={() => setMode('inactive')}
      />
    </PopOver>
  );
}
