// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './FeatureTourDot.scss';

const displayName = 'FeatureTourDot';

type Props = {
    beaconText: string,
    className?: string,
    mode?: 'inactive' | 'open' |'active';
};

const FeatureTourDot = ({
    beaconText,
    className,
    mode = 'inactive',
    ...filteredProps
}: Props): React$Element<*> => {

    // className builder
    const componentClass = classNames(
        styles.FeatureTourDot,
        styles[mode],
        (mode === 'active' ? 'FeatureTourDot_beaconIsActive' : null),
        className
    );

    return (
        <span className={componentClass}>{beaconText}</span>
    );
};

FeatureTourDot.displayName = displayName;

export default FeatureTourDot;
