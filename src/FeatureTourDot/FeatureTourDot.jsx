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
        styles[mode],
        (mode === 'active' ? 'FeatureTourDot_beaconIsActive' : null),
        className
    );

    return (
        <span className={componentClass}>{beaconA11yText}</span>
    );
};

FeatureTourDot.displayName = displayName;

export default FeatureTourDot;
