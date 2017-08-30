// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './Notification.scss';
import ButtonDialogClose from '../ButtonDialogClose/ButtonDialogClose';
import { Header5 } from '../../utility_components/Type/Type';


/* Note: This component is the base component for themed notifications, do not use it by itself */

const displayName = 'Notification';

type Props = {
    children: string,
    className?: string,
    dismissIconClassName?: string,
    headerText?: string,
    icon?: any,
    onDismiss?: any,
};

const Notification = ({
            className,
            children,
            dismissIconClassName,
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

    const dismissElementClass = classNames(
        styles.dismissButton,
        (dismissIconClassName ? dismissIconClassName : null)
        );

    const dismissElement = (
            <ButtonDialogClose
                className={dismissElementClass}
                onClick={onDismiss}
                buttonTitle="Dismiss this notification"
            />
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
