import React, { Component, ReactNode } from 'react';
import throttle from 'lodash.throttle';
import styled, { css } from 'styled-components';
import { rem } from 'polished';

interface Props {
    className?: string;
    children: ReactNode;
    maxHeight: number;
}

interface State {
    isTruncated: boolean;
    maxHeight: number;
}

export class OverflowTruncationWrapper extends Component<Props, State> {
    wrapperEl: HTMLElement;
    innerEl: HTMLElement;

    state: State = {
        isTruncated: false,
        maxHeight: this.props.maxHeight,
    };

    constructor(props) {
        super(props);
        this.truncate = throttle(this.truncate, 200);
    }

    componentDidMount() {
        this.truncate();
        window.addEventListener('resize', this.truncate);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.truncate);
    }

    private truncate = () =>
        this.setState({
            isTruncated:
                this.wrapperEl.clientHeight < this.innerEl.clientHeight,
            maxHeight:
                this.innerEl.clientHeight < this.props.maxHeight
                    ? this.innerEl.clientHeight
                    : this.props.maxHeight,
        });

    render() {
        const { children, maxHeight, ...props } = this.props;

        return (
            <div
                {...props}
                style={{
                    position: 'relative',
                    height: `${this.state.maxHeight}px`,
                }}
                ref={wrapper => {
                    this.wrapperEl = wrapper;
                }}
            >
                <Position isTruncated={this.state.isTruncated}>
                    <div
                        style={{
                            overflow: 'scroll',
                            maxHeight: `${this.state.maxHeight}px`,
                        }}
                    >
                        <div
                            ref={el => {
                                this.innerEl = el;
                            }}
                        >
                            {children}
                        </div>
                    </div>
                </Position>
            </div>
        );
    }
}

const Position = styled.div<{ isTruncated: boolean }>`
    position: absolute;
    top: 0;
    width: 100%;

    ${props =>
        props.isTruncated &&
        css`
            &:before {
                content: '';
                display: block;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 1rem;
                background: linear-gradient(
                    to bottom,
                    rgba(255, 255, 255, 1) 10%,
                    rgba(255, 255, 255, 0) 100%
                );
            }

            &:after {
                content: '';
                display: block;
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: ${rem(6)};
                background: linear-gradient(
                        to top,
                        rgba(0, 0, 0, 0.08) 0%,
                        rgba(0, 0, 0, 0)
                    )
                    0 100%;
            }
        `};
`;
