// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './Tooltip.scss';
import { ParagraphSm } from '../../../src/utility_components/Type/Type';

const displayName = 'Tooltip';

type Props = {
    className?: string,
    multiline?: boolean,
    children: string,
};

const Tooltip = ({
    className,
    multiline,
    children,
    ...filteredProps
}: Props): React$Element<*> => {

    const checkTextLength = () => {
        let size;
        if (children.length >= 45) {
            size = 'lg';
        }
        else {
            size = 'sm';
        }

        return size;
    };

    const componentClass = classNames(
        styles.Tooltip,
        styles[checkTextLength()],
        className
    );

    return (
        <div className=
            {componentClass}
            {...filteredProps}
        >
            <div className={styles.content}>
                <ParagraphSm>
                    {children}
                </ParagraphSm>
            </div>
        </div>
    );
};

Tooltip.displayName = displayName;

export default Tooltip;
