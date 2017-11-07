// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './OverflowTruncationWrapper.scss';

const displayName = 'OverflowTruncationWrapper';

type Props = {
    className?: string,
    children: React$Element<*>,
    maxHeight: number,
};

class OverflowTruncationWrapper extends React.Component {
    state: Object;

    constructor(props: Props) {
        super(props);
        this.state = {
            isTruncated: false,
            maxHeight: props.maxHeight,
        };
    }

    componentDidMount() {
        this._checkIfTruncated();

        window.addEventListener(
            'resize',
            this._checkIfTruncated
        );
    }

    componentWillUnmount() {
        window.removeEventListener(
            'resize',
            this._checkIfTruncated
        );
    }

    wrapperEl: any;
    innerEl: any;

    _checkIfTruncated = () => {
        const innerElHeight = this.innerEl.clientHeight;

        const isTruncated = this.wrapperEl.clientHeight < innerElHeight;

        console.log(isTruncated);

        this.setState({
            isTruncated,
            maxHeight: innerElHeight < this.props.maxHeight ? innerElHeight : this.props.maxHeight,
        });
    }

    render() {
        const {
            children,
            className,
            ...filteredProps
        } = this.props;

        const componentClass = classNames(
            styles.OverflowTruncationWrapper,
            className,
        );

        const PositionalWrapperClass = classNames(
            styles.PositionalWrapper,
            (this.state.isTruncated ? styles.isTruncated : null),
        );

        return (
                <div
                    {...filteredProps}
                    className={componentClass}
                    ref={(wrapper) => {
                        this.wrapperEl = wrapper;
                    }}
                    style={{
                        height: `${this.state.maxHeight}px`,
                    }}
                >
                    <div className={PositionalWrapperClass}>
                        <div
                            className={styles.OverflowWrapper}
                            style={{
                                maxHeight: `${this.state.maxHeight}px`,
                            }}
                        >
                            <div
                                ref= {(innerEl) => {
                                    this.innerEl = innerEl;
                                }}
                            >
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

OverflowTruncationWrapper.displayName = displayName;

export default OverflowTruncationWrapper;
