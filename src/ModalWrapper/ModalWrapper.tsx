import React from 'react';
import styled, { keyframes } from 'styled-components';

export interface ModalWrapperProps extends React.HTMLProps<HTMLDivElement> {
    isOpen?: boolean;
    modalPosition?: 'bottomRight' | 'bottomLeft' | 'center';
    noDismiss?: boolean;
    onCloseClick?: (e?: Event) => void;
}

// ==================== ModalWrapper Styled Thing

const modalOpenKeyframes = keyframes`
    0% {
        left: 50%;
        top: 50%;
        width: 0%;
        height: 0%;
        opacity: 0;
    }

    100% {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 1;
    }
`;

const ModalWrapperStyled = styled<ModalWrapperProps, 'div'>('div')`
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 9997;
    top: 0px;
    left: 0px;
    justify-content: center;
`;

const ModalOverlayStyled = styled<ModalWrapperProps, 'div'>('div')`
    position: fixed;
    z-index: 900;
    top: 0;
    left: 0;

    animation: ${modalOpenKeyframes} 300ms ease forwards;
    background-color: rgba(0, 0, 0, 0.6);
    overflow: hidden;
    cursor: pointer;
`;

interface ModalContentProps extends React.HTMLProps<HTMLDivElement> {
    modalPosition?: 'bottomRight' | 'bottomLeft' | 'center';
}

const ModalContentStyled = styled<ModalContentProps, 'div'>('div')``;

// ==================== ModalWrapper

class ModalWrapper extends React.Component<any, any> {
    static defaultProps = {
        modalPosition: 'center',
    };

    constructor(props: ModalWrapperProps) {
        super(props);
    }

    props: ModalWrapperProps;

    _closeModal = e => {
        if (typeof this.props.onCloseClick === 'function') {
            this.props.onCloseClick(e);
        }
    };

    _contentClick = e => {
        e.stopPropagation();
    };

    _overlayClick = e => {
        if (this.props.noDismiss) {
            this._closeModal(e);
        }
    };

    public render() {
        const {
            children,
            isOpen,
            modalPosition,
            //@ts-ignore
            noDismiss,
            //@ts-ignore
            onCloseClick,
        } = this.props;

        return (
            <div>
                {isOpen && (
                    <ModalWrapperStyled isOpen={isOpen}>
                        <ModalOverlayStyled onClick={this._overlayClick}>
                            <ModalContentStyled
                                modalPosition={modalPosition}
                                onClick={this._contentClick}
                            >
                                {children}
                            </ModalContentStyled>
                        </ModalOverlayStyled>
                    </ModalWrapperStyled>
                )}
            </div>
        );
    }
}

export default ModalWrapper;
