// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './Tooltip.scss';
import { ParagraphMd } from '../../../src/utility_components/Type';

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
                <ParagraphMd>
                    {children}
                </ParagraphMd>
            </div>
        </div>
    );
};

Tooltip.displayName = displayName;

export default Tooltip;
