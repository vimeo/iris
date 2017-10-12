// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './NotificationSuccess.scss';
import Notification from '../Notification/Notification';
import SuccessIcon from '../icons/checkmark.svg';

const displayName = 'NotificationSuccess';

type Props = {
    children: string,
    className?: string,
    hasIcon?: boolean,
    headerText?: string,
    onDismiss?: any,
};

const NotificationSuccess = ({
                        children,
                        className,
                        hasIcon = true,
                        headerText,
                        onDismiss,
                        ...filteredProps
                    }: Props): React$Element<*> => {

    // className builder
    const componentClass = classNames(
            styles.NotificationSuccess,
            className
        );

    return (
            <Notification
                {...filteredProps}
                headerText={headerText}
                icon={hasIcon ? <SuccessIcon className={styles.iconColor} /> : null}
                onDismiss={onDismiss}
                dismissIconClassName = {styles.dismissIconColor}
                className={componentClass}
            >
                    {children}
            </Notification>
    );
};

NotificationSuccess.displayName = displayName;

export default NotificationSuccess;
