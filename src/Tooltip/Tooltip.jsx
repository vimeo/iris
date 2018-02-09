// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './Tooltip.scss';
import { ParagraphMd } from '../Type';

const displayName = 'Tooltip';

type Props = {
    className?: string,
    multiline?: boolean,
    children: string,
    size?: 'sm' | 'lg',
};

const Tooltip = ({
    className,
    multiline,
    children,
    size,
    ...filteredProps
}: Props): React$Element<*> => {

    const checkTextLengthForTooltipSize = () => {
        let sizeFromLength;
        if (children.length >= 45) {
            sizeFromLength = 'lg';
        }
        else {
            sizeFromLength = 'sm';
        }

        return sizeFromLength;
    };

    const componentClass = classNames(
        styles.Tooltip,
        styles[size || checkTextLengthForTooltipSize()],
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
