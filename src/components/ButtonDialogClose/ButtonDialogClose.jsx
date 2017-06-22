// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './ButtonDialogClose.scss';
import DeleteIcon from '../../globals/svg/dismiss_iris.svg';

const displayName = 'ButtonDialogClose';

type Props = {
    buttonTitle?: string,
    className?: string,
};

const ButtonDialogClose = ({
                        buttonTitle = 'Close',
                        className,
                        ...filteredProps
                    }: Props): React$Element<*> => {

    // className builder
    const componentClass = classNames(
        styles.ButtonDialogClose,
        className
    );

    return (
            <button
                {...filteredProps}
                className = {componentClass}
            >
                <DeleteIcon title={buttonTitle} />
            </button>
    );
};

ButtonDialogClose.displayName = displayName;

export default ButtonDialogClose;
