import React from 'react';
import classNames from 'classnames';
import styles from './Notification.scss';
import DeleteIcon from '../../globals/svg/dismiss_iris';
import animationStyles from '../../animations/dropInOut/dropInOut.scss';

/* Note: This component is the base component for themed notifications, do not use it by itself */

const displayName = 'Notification';

const propTypes = {
    children: React.PropTypes.node.isRequired,
    className: React.PropTypes.string,
    dismissIconClassName: React.PropTypes.string,
    icon: React.PropTypes.element,
    onDismiss: React.PropTypes.func,
};

const Notification = (props) => {

    // filter out props that are not meant to be passed in as an attribute from props and store the rest as "filteredProps" to be printed into the component as attrubutes in the tag (e.g. HTML attribute pass-through, event handlers)
    const {
        className,
        children,
        dismissIconClassName,
        icon,
        onDismiss,
        ...filteredProps
    } = props;

    // className builder
    const componentClass = classNames(
        styles.Notification,
        (onDismiss ? animationStyles.measureableElement : null),
        (icon ? styles.hasIcon : null),
        className
    );


    const iconElement = (
        <span className = {styles.iconWrapper}>
            {icon}
        </span>
    );

    const dismissElement = (
            <button className = {styles.dismissButton} onClick={onDismiss}>
                <DeleteIcon title="Dismiss this notification" className={dismissIconClassName} />
            </button>
    );

    return (
        <div>
            <div
                {...filteredProps}
                className={componentClass}
                data-measureable
            >
                    {icon ? iconElement : null}
                    {children}
                    {onDismiss ? dismissElement : null}
            </div>
        </div>
    );
};

Notification.displayName = displayName;

Notification.propTypes = propTypes;


export default Notification;
