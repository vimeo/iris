// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './NotificationWarning.scss';
import Notification from '../Notification/Notification';
import WarningIcon from '../../globals/svg/circle-warning.svg';

const displayName = 'NotificationWarning';

type Props = {
    children: string,
    className?: string,
    hasIcon?: boolean,
    headerText?: string,
    onDismiss?: any,
};

const NotificationWarning = ({
                        children,
                        className,
                        hasIcon = true,
                        headerText,
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
                headerText={headerText}
                icon={hasIcon ? <WarningIcon className={styles.iconColor} /> : null}
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
