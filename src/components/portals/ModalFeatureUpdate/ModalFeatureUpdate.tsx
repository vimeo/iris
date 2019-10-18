import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { Transition } from 'react-transition-group';

import { ModalWrapper } from '../ModalWrapper/ModalWrapper';
import { ButtonDialogClose } from '../../buttons/ButtonDialogClose/ButtonDialogClose';

import { COLORS } from '../../../legacy';

export const ModalFeatureUpdateStyleSettings = {
  borderRadius: 8,
  modalMargin: 24,
};

const MODAL_SPEED = 175;
export interface ModalFeatureUpdateProps {
  /**
   * A translated string describing what what the dismiss button does. (e.g. 'close modal')
   */
  dismissButtonLabel: string;
  /**
   * Pass an object of props to be spread across the dismiss button.
   */
  dismissButtonProps?: {};
  /**
   * a querySelectorString passed to `querySelector()` that will find the DOM element that should receive first focus on open, defaults to the dismiss button.
   */
  firstFocusSelector?: string;
  /**
   * This prop controls the modal's visibility.
   */
  isOpen?: boolean;
  /**
   * Choose this if the modal cannot be dismissed (anti-pattern but sometimes necessary)
   */
  noDismiss?: boolean;
  /**
   * This callback fires whenever an event happens in the modal that should cause it to close. Map this to the state that controls `isOpen`, Event will be the event that triggere the call to close. **Required if the modal is dismissible**.
   */
  onCloseEvent: (event?: Event) => void;
  /**
   * Need to override the Z-index? Enter a new z-index and it will be applied to the modal wrapper
   */
  zIndexStartingPoint?: number;
}

export interface ModalFeatureUpdateStyledProps {
  isOpen?: boolean;
  noDismiss?: boolean;
}

const ModalFeatureUpdateStyled = styled.div<
  ModalFeatureUpdateStyledProps
>`
  box-shadow: 0 ${rem(6)} ${rem(10)} 0 rgba(0, 0, 0, 0.12);
  position: fixed;
  right: ${rem(ModalFeatureUpdateStyleSettings.modalMargin)};
  bottom: ${rem(ModalFeatureUpdateStyleSettings.modalMargin)};
  background: ${COLORS.White};
  border-radius: ${rem(ModalFeatureUpdateStyleSettings.borderRadius)};
  max-width: ${rem(380)};
  width: calc(
    100% - ${rem(ModalFeatureUpdateStyleSettings.modalMargin * 2)}
  );
  max-height: calc(
    100% - ${rem(ModalFeatureUpdateStyleSettings.modalMargin * 2)}
  );
  overflow: auto;
  transition: all ${MODAL_SPEED}ms linear;
  opacity: 0;
  transform: translateY(0%);
`;

const transitionStyles = {
  entering: {
    opacity: 0.1,
  },
  entered: {
    opacity: 1,
  },
  exiting: {
    transform: 'translateY(80%)',
    opacity: 0,
  },
};

const ButtonDialogCloseStyled = styled(ButtonDialogClose)<{
  dismissButtonLabel?: string;
  onClick?: (e?: Event) => void;
}>`
  position: absolute;
  top: ${rem(6)};
  right: ${rem(6)};
  z-index: 1;
`;

// ==================== ModalFeatureUpdate

export class ModalFeatureUpdate extends React.Component<
  ModalFeatureUpdateProps
> {
  _handleDismissButtonClick = e => {
    if (typeof this.props.onCloseEvent === 'function') {
      this.props.onCloseEvent(e);
    }
  };

  public render() {
    const {
      children,
      dismissButtonLabel,
      dismissButtonProps,
      firstFocusSelector = '[data-modal-close]',
      isOpen,
      noDismiss,
      onCloseEvent,
      zIndexStartingPoint,
      ...filteredProps
    } = this.props;

    return (
      <ModalWrapper
        backgroundOpacity="lighter"
        firstFocusSelector={firstFocusSelector}
        isOpen={isOpen}
        noDismiss={noDismiss}
        onCloseEvent={onCloseEvent}
        modalSpeed={MODAL_SPEED}
        mountOnEnter={true}
        unmountOnExit={true}
        zIndexStartingPoint={zIndexStartingPoint}
      >
        <Transition in={isOpen} timeout={MODAL_SPEED}>
          {state => (
            <ModalFeatureUpdateStyled
              {...filteredProps}
              style={{
                ...transitionStyles[state],
              }}
            >
              {!noDismiss && (
                <ButtonDialogCloseStyled
                  {...dismissButtonProps}
                  buttonTitle={dismissButtonLabel}
                  format="basic"
                  onClick={this._handleDismissButtonClick}
                  size="sm"
                  data-modal-close
                  type="button"
                />
              )}
              {children}
            </ModalFeatureUpdateStyled>
          )}
        </Transition>
      </ModalWrapper>
    );
  }
}
