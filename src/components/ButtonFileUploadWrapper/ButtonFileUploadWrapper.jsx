// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './ButtonFileUploadWrapper.scss';

const displayName = 'ButtonFileUploadWrapper';

type Props = {
    children: React$Element<*>,
    id: string,
    inputElementProps?: Object,
    name?: string,
};

const ButtonFileUploadWrapper = ({
                        children,
                        id,
                        inputElementProps,
                        name,
                        ...filteredProps
                    }: Props): React$Element<*> => {

    const wrapperClass = classNames(
        styles.Wrapper
    );

    return (
        <div className={wrapperClass}>
                <input
                    {...filteredProps}
                    {...inputElementProps}
                    className={styles.ButtonFileUpload}
                    name={name}
                    type="file"
                    id={id}
                />
                {children}
        </div>
    );
};

ButtonFileUploadWrapper.displayName = displayName;

export default ButtonFileUploadWrapper;
