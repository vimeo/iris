// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './{{pascalCase name}}.scss';

const displayName = '{{pascalCase name}}';

type Props = {
    className?: string,
};

const  {{pascalCase name}} = ({
                        className,
                        ...filteredProps
                    }: Props): React$Element<*> => {

    // className builder
    const componentClass = classNames(
        styles.{{pascalCase name}},
        className
    );

    return (
            <div
                {...filteredProps}
                className={componentClass}
            >
                    {props.children}
            </div>
    );
};

{{pascalCase name}}.displayName = displayName;

export default {{pascalCase name}};
