// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './Avatar.scss';

const displayName = 'Avatar';

type Props = {
    alt: string,
    className?: string,
    src: string,
    srcSet: string,
    isInline?: boolean,
    size?: 'auto'| 'xs' | 'sm' | 'md' | 'lg' | 'xl',
};

const Avatar = ({
                        alt,
                        className,
                        isInline = true,
                        size = 'auto',
                        src,
                        srcSet,
                        ...filteredProps
                    }: Props): React$Element<*> => {


    // className builder
    const componentClass = classNames(
        styles.Avatar,
        styles[size],
        (isInline ? styles.inline : null),
        className
    );

    return (
        <img src={src} srcSet={`${srcSet} 2x`} alt={alt} className={componentClass} {...filteredProps} />
    );

};

Avatar.displayName = displayName;


export default Avatar;
