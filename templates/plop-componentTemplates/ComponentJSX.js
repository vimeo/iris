import React from 'react';
import classNames from 'classnames';
import styles from './{{pascalCase name}}.css';

const displayName = '{{pascalCase name}}';


const propTypes = {
};

const defaultProps = {
};

const {{pascalCase name}} = (props) => {

    // filter out props that are not meant to be passed in as an attribute from props and store the rest as "filteredProps" to be printed into the component as attrubutes in the tag (e.g. HTML attribute pass-through, event handlers)
    const {
        className,
        ...filteredProps
    } = props;

    // className builder
    const componentClass = classNames(
        styles.{{pascalCase name}},
        className
    );

    return (
            <{{pascalCase name}}
                {...filteredProps}
                className={componentClass}
            >
                    {props.children}
            </{{pascalCase name}}>
    );
};

{{pascalCase name}}.displayName = displayName;

{{pascalCase name}}.propTypes = propTypes;

{{pascalCase name}}.defaultProps = defaultProps;


export default {{pascalCase name}};
