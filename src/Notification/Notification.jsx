// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './Notification.scss';
import ButtonDialogClose from '../ButtonDialogClose/ButtonDialogClose';
// $FlowFixMe
import { Header5 } from '../Type';


/* Note: This component is the base component for themed notifications, do not use it by itself */

const displayName = 'Notification';

type Props = {
    children: string,
    className?: string,
    dismissButtonClassName?: string,
    headerText?: string,
    icon?: any,
    onDismiss?: any,
};

const Notification = ({
            className,
            children,
            dismissButtonClassName,
            headerText,
            icon,
            onDismiss,
            ...filteredProps
        }: Props): React$Element<*> => {


        // className builder
    const componentClass = classNames(
            styles.Notification,
            (icon ? styles.hasIcon : null),
            (headerText ? styles.hasHeader : null),
            className
        );


    const iconElement = (
            <span className = {styles.iconWrapper}>
                {icon}
        </span>
    );

    const dismissElement = (
            <div className={styles.dismissButtonWrapper}>
                <ButtonDialogClose
                    className={dismissButtonClassName}
                    onClick={onDismiss}
                    buttonTitle="Dismiss this notification"
                    format="lightTransparent"
                />
            </div>
    );

    const headerTextElement = (
        <Header5>
            {headerText}
        </Header5>
    );

    return (
            <div
                {...filteredProps}
                className={componentClass}
            >
                {icon ? iconElement : null}
                {headerText ? headerTextElement : null}
                {children}
                {onDismiss ? dismissElement : null}
            </div>
    );
};

Notification.displayName = displayName;

export default Notification;
