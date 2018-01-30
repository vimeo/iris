// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './FeatureTourDot.scss';

const displayName = 'FeatureTourDot';

type Props = {
    beaconA11yText: string,
    className?: string,
    mode?: 'inactive' | 'open' |'active';
};

const FeatureTourDot = ({
    beaconA11yText,
    className,
    mode = 'inactive',
    ...filteredProps
}: Props): React$Element<*> => {

    // className builder
    const componentClass = classNames(
        styles.FeatureTourDot,
        styles[mode]
    );

    const haloClass = classNames(
        styles.halo,
        (mode === 'active' ? 'FeatureTourDot_beaconIsActive' : null),
        className
    );

    const wrapperClass = classNames(
        styles.Wrapper,
        styles[mode],
        className
    );

    return (
        <span className={wrapperClass}>
            <span className={haloClass}>
                <span className={componentClass}>{beaconA11yText}</span>
            </span>
        </span>
    );
};

FeatureTourDot.displayName = displayName;

export default FeatureTourDot;
