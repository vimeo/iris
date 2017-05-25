import React from 'react';
import classNames from 'classnames';
import styles from './Avatar.scss';

const displayName = 'Avatar';


const propTypes = {
    className: React.PropTypes.string,
    src: React.PropTypes.string.isRequired,
    srcSet: React.PropTypes.string.isRequired,
    alt: React.PropTypes.string.isRequired,
    size: React.PropTypes.oneOf(['auto', 'xs', 'sm', 'md', 'lg', 'xl']),
    inline: React.PropTypes.bool,
};

const defaultProps = {
    size: 'auto',
    inline: true,
};

const Avatar = (props) => {

    // filter out props that are not meant to be passed in as an attribute from props and store the rest as "filteredProps" to be printed into the component as attrubutes in the tag (e.g. HTML attribute pass-through, event handlers)
    const {
        className,
        src,
        srcSet,
        alt,
        size,
        inline,
        ...filteredProps
    } = props;

    // className builder
    const componentClass = classNames(
        styles.Avatar,
        styles[size],
        (inline ? styles.inline : null),
        className
    );

    return (
        <img src={src} srcSet={`${srcSet} 2x`} alt={alt} className={componentClass} {...filteredProps} />
    );

};

Avatar.displayName = displayName;

Avatar.propTypes = propTypes;

Avatar.defaultProps = defaultProps;


export default Avatar;
