import React from 'react';
import throttle from 'lodash.throttle';
import styled, { css } from 'styled-components';
import { rem } from 'polished';
import { Transition } from 'react-transition-group';

import { ModalWrapper } from '../ModalWrapper/ModalWrapper';

import { Button } from '../../buttons/Button/Button';

import { mediaQuery } from '../../../layout';
import { Header4 } from '../../../legacy';
import { COLORS } from '../../../legacy';
import { DismissX } from '../../../icons';

const MODAL_SPEED = 300;
const MODAL_MAX_HEIGHT = '86vh';
const MODAL_HEIGHT_SM_SCREEN = 134;
const MODAL_HEIGHT_LG_SCREEN = 80;

export interface ModalProps {
  /**
   * The Content of the modal
   */
  children: React.ReactNode;
  className?: string;
  /**
   * Defaults to "dark". Choose "light" to get a white dismiss button for overlaying over an dark background
   */
  dismissButtonFormat: 'light' | 'dark';
  /**
   * Pass a CSS selector to force which element get focus when the modal opens
   */
  firstFocusSelector: string;
  /**
   * Remove default content padding
   */
  fullBleed?: boolean;
  /**
   * Controls if modal is showing or closed
   */
  isShowing?: boolean;
  /**
   *  Assign a unique ID to the Title or pass the ID of the element that labels the modal.
   */
  modalLabelId: string;
  /**
   *  Pass the ID of an element that describes the modal (may be hidden)
   */
  modalDescriptionId: string;
  /**
   *  Pass a translated string representing "dismiss" or "close"
   */
  modalCloseLabel: string;
  /**
   * Set a modal title in the default format
   */
  modalTitle?: string;
  /**
   * Fires when modal dismisses, should change the state that is controlling `isShowing`
   */
  onDismiss?: (e?: Event) => void;
  /**
   * Pass an object of Button Props to get an Action Area
   */
  primaryButtonProps?: any;
  /**
   * Pass an object of Button Props to get a secondary button in the ActionArea
   */
  secondaryButtonProps?: any;
  /**
   * Hides the dismiss button (Use with Caution!)
   */
  hideDismissButton?: boolean;
  /**
   * Allows buttons to stretch to 50% width (Use with Caution!)
   */
  fluidButtons?: boolean;
  /**
   * Choose Modal width mode (Default: md)
   */
  size?: 'sm' | 'md' | 'lg' | 'fluid';
  /**
   * Override the z-index of the modal
   */
  zIndexStartingPoint?: number;
}

export interface ModalState {
  isTruncated: boolean;
}

const modalTransitionStyles = {
  entering: {
    opacity: '0',
  },
  entered: {
    opacity: '1',
  },
  exiting: {
    opacity: '0',
  },
};

const modalWidths = {
  sm: 340,
  md: 440,
  lg: 660,
};

const ModalStyled = styled.div<{
  modalSize?: 'sm' | 'md' | 'lg' | 'fluid';
}>`
  position: relative;
  width: 76%;
  margin: 0 auto;
  min-height: ${MODAL_MAX_HEIGHT};

  border-radius: ${rem(3)};
  background: ${COLORS.White};
  box-shadow: 0 ${rem(6)} ${rem(10)} 0 rgba(0, 0, 0, 0.12);
  transition: all ${MODAL_SPEED}ms ease-in;
  opacity: 0;

  @media (min-height: ${rem(300)}) {
    min-height: ${rem(180)};
    max-height: ${MODAL_MAX_HEIGHT};
  }

  ${props => {
    if (props.modalSize === 'sm') {
      return mediaQuery.sm(css`
        width: ${rem(modalWidths.sm)};
      `);
    } else if (props.modalSize === 'fluid') {
      return `
                width: auto;
                overflow: auto;
            `;
    } else {
      return mediaQuery.md(css`
        width: ${rem(modalWidths[props.modalSize])};
      `);
    }
  }};
`;

interface ContentStyledProps {
  fullBleed?: boolean;
  hasActionArea?: boolean;
}

const ContentStyled = styled.div<ContentStyledProps>`
  max-height: ${MODAL_MAX_HEIGHT};
  overflow: auto;
  padding: ${props => (props.fullBleed ? 0 : rem(20))};

  opacity: 1;
  border-radius: ${rem(3)};

  ${props =>
    props.hasActionArea
      ? css`
        ${mediaQuery.sm(css`
          max-height: calc(
            ${MODAL_MAX_HEIGHT} - ${rem(MODAL_HEIGHT_LG_SCREEN)}
          );
        `)}

        max-height: calc(${MODAL_MAX_HEIGHT} - ${rem(
          MODAL_HEIGHT_SM_SCREEN,
        )});
    `
      : ''};
`;

const ModalCloseButtonWrapperStyled = styled.div`
  position: absolute;
  top: ${rem(16)};
  right: ${rem(16)};
`;

const ActionAreaStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: ${rem(MODAL_HEIGHT_SM_SCREEN)};
  padding: ${rem(20)} ${rem(20)} ${rem(12)};
  box-shadow: 0 ${rem(4)} ${rem(10)} ${rem(6)} rgba(0, 0, 0, 0.1);
  z-index: 10;
  position: relative;

  ${mediaQuery.sm(css`
    height: ${rem(MODAL_HEIGHT_LG_SCREEN)};
    flex-wrap: nowrap;
  `)}
`;

const $Button = styled(Button)`
  margin: 0.25rem;

  ${mediaQuery.md`
    margin: 0 0.5rem 0.5rem;
  `}
`;

const ModalTitleStyled = styled.div`
  margin-bottom: ${rem(12)};
  padding-right: ${rem(8)};
`;

const ModalTitleTruncationStyled = styled.span`
  display: inline-block;
  width: calc(100% - ${rem(40)});
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export class Modal extends React.Component<ModalProps, ModalState> {
  static defaultProps = {
    size: 'md',
    dismissButtonFormat: 'dark',
  };

  constructor(props: ModalProps) {
    super(props);
    this.state = {
      isTruncated: false,
    };
    this._setOverflowScroll = throttle(this._setOverflowScroll, 200);
  }

  state: ModalState;

  componentDidMount() {
    if (this.props.isShowing) {
      this._openModal();
    }
  }

  componentDidUpdate(prevProps: ModalProps) {
    if (this.props.isShowing && !prevProps.isShowing) {
      this._openModal();
    } else if (!this.props.isShowing && prevProps.isShowing) {
      this._closeModal();
    } else if (this.props.isShowing && prevProps.isShowing) {
      this._resetModal();
    }
  }

  componentWillUnmount() {
    if (this.props.isShowing) {
      this._closeModal();
    }
  }

  props: ModalProps;
  thisEl: HTMLElement;
  scrollDistance: number;
  ContentOuterDiv: HTMLDivElement;
  ContentInnerDiv: HTMLDivElement;

  _bindEvents() {
    window.addEventListener('resize', this._setOverflowScroll);
  }

  _unbindEvents() {
    window.removeEventListener('resize', this._setOverflowScroll);
  }

  _handleModalClose = () => {
    if (typeof this.props.onDismiss === 'function') {
      this.props.onDismiss();
    }
  };

  _closeModal() {
    this._unbindEvents();
  }
  _openModal() {
    // initial check to see if content is overflowing
    this._setOverflowScroll();
    this._bindEvents();
  }

  _resetModal() {
    this._unbindEvents();
    this._bindEvents();
  }

  _setOverflowScroll = () => {
    // checks if content is triggering overflow scroll
    if (
      this.ContentOuterDiv instanceof HTMLDivElement &&
      this.ContentInnerDiv instanceof HTMLDivElement
    ) {
      this.setState({
        isTruncated:
          this.ContentOuterDiv.offsetHeight <
          this.ContentInnerDiv.offsetHeight,
      });
    }
  };

  render() {
    const {
      children,
      dismissButtonFormat,
      firstFocusSelector,
      fullBleed,
      hideDismissButton,
      isShowing,
      modalCloseLabel,
      modalDescriptionId,
      modalLabelId,
      modalTitle,
      onDismiss,
      primaryButtonProps,
      secondaryButtonProps,
      fluidButtons,
      size,
      zIndexStartingPoint,
      ...filteredProps
    } = this.props;

    // const buttonWidth = fluidButtons ? 12 : 8;
    // const buttonOffset = fluidButtons ? 0 : 8;

    const actionAreaElement = (
      <ActionAreaStyled>
        {secondaryButtonProps && (
          <$Button
            {...secondaryButtonProps}
            autoWidth="fluid"
            format="secondary"
            size="md"
          />
        )}
        <$Button
          {...primaryButtonProps}
          autoWidth="fluid"
          format="primary"
          size="md"
        />
      </ActionAreaStyled>
    );

    const ModalTitleElement = (
      <ModalTitleStyled>
        <Header4 id={modalLabelId} element="h2" noMargin>
          <ModalTitleTruncationStyled>
            {modalTitle}
          </ModalTitleTruncationStyled>
        </Header4>
      </ModalTitleStyled>
    );

    const CloseButton = (
      <ModalCloseButtonWrapperStyled>
        <Button
          onClick={this._handleModalClose}
          format="basic"
          variant="minimalTransparent"
          icon={<DismissX />}
          data-js-modalCloseButton
        />
      </ModalCloseButtonWrapperStyled>
    );

    const ModalComponent = (
      <Transition
        in={isShowing}
        timeout={MODAL_SPEED}
        mountOnEnter
        unmountOnExit
      >
        {state => (
          <ModalStyled
            {...filteredProps}
            role="dialog"
            aria-labelledby={modalLabelId}
            aria-describedby={modalDescriptionId}
            modalSize={size}
            style={{
              ...modalTransitionStyles[state],
            }}
          >
            <ContentStyled
              ref={div => {
                this.ContentOuterDiv = div;
              }}
              hasActionArea={primaryButtonProps ? true : false}
              fullBleed={fullBleed}
            >
              <div
                ref={div => {
                  this.ContentInnerDiv = div;
                }}
              >
                {modalTitle ? ModalTitleElement : null}
                {children}
              </div>
            </ContentStyled>
            {primaryButtonProps ? actionAreaElement : null}
            {onDismiss && !hideDismissButton ? CloseButton : null}
          </ModalStyled>
        )}
      </Transition>
    );

    return (
      <ModalWrapper
        backgroundOpacity="darker"
        firstFocusSelector={firstFocusSelector}
        onCloseEvent={onDismiss}
        isOpen={isShowing}
        modalPosition="center"
        modalSpeed={MODAL_SPEED}
        noDismiss={onDismiss ? false : true}
        zIndexStartingPoint={zIndexStartingPoint}
      >
        {ModalComponent}
      </ModalWrapper>
    );
  }
}
