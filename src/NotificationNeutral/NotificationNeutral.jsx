// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './NotificationNeutral.scss';
import Notification from '../Notification/Notification';
import InfoIcon from '../icons/circle-info.svg';

const displayName = 'NotificationNeutral';

type Props = {
    children: string,
    className?: string,
    hasIcon?: boolean,
    headerText?: string,
    onDismiss?: any,
};

const NotificationNeutral = ({
                        children,
                        className,
                        hasIcon = true,
                        headerText,
                        onDismiss,
                        ...filteredProps
                    }: Props): React$Element<*> => {

    // className builder
    const componentClass = classNames(
            styles.NotificationNeutral,
            className
        );

    return (
            <Notification
                {...filteredProps}
                headerText={headerText}
                icon={hasIcon ? <InfoIcon className={styles.iconColor} /> : null}
                onDismiss={onDismiss}
                dismissButtonClassName={styles.dismissButton}
                className={componentClass}
            >
                    {children}
            </Notification>
    );
};

NotificationNeutral.displayName = displayName;

export default NotificationNeutral;
