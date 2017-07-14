// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './NotificationWarning.scss';
import Notification from '../Notification/Notification';
import InfoIcon from '../../globals/svg/info_iris.svg';

const displayName = 'NotificationWarning';

type Props = {
    children: string,
    className?: string,
    hasIcon?: boolean,
    onDismiss?: any,
};

const NotificationWarning = ({
                        children,
                        className,
                        hasIcon = true,
                        onDismiss,
                        ...filteredProps
                    }: Props): React$Element<*> => {

    // className builder
    const componentClass = classNames(
            styles.NotificationWarning,
            className
        );

    return (
            <Notification
                {...filteredProps}
                icon={hasIcon ? <InfoIcon className={styles.iconColor} /> : null}
                onDismiss={onDismiss}
                dismissIconClassName = {styles.dismissIconColor}
                className={componentClass}
            >
                    {children}
            </Notification>
    );
};

NotificationWarning.displayName = displayName;

export default NotificationWarning;
