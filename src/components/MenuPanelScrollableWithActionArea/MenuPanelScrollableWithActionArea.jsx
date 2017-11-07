// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './MenuPanelScrollableWithActionArea.scss';
import Button from '../Button/Button';
import OverflowTruncationWrapper from '../OverflowTruncationWrapper/OverflowTruncationWrapper';

const displayName = 'MenuPanelScrollableWithActionArea';

type Props = {
    children: React$Element<*>,
    className?: string,
    primaryButtonProps: Object,
    secondaryButtonProps?: Object,
    maxHeight: number,
};

const MenuPanelScrollableWithActionArea = ({
                        children,
                        className,
                        maxHeight = 50,
                        primaryButtonProps,
                        secondaryButtonProps,
                        ...filteredProps
                    }: Props): React$Element<*> => {

    // className builder
    const componentClass = classNames(
        styles.MenuPanelScrollableWithActionArea,
        className
    );

    return (
            <div
                {...filteredProps}
                className={componentClass}
            >
                <OverflowTruncationWrapper
                maxHeight={maxHeight}
                >
                    {children}
                </OverflowTruncationWrapper>
                <div className={styles.ActionArea}>
                    {secondaryButtonProps ? (
                    <Button
                            {...secondaryButtonProps}
                            autoWidth="sm"
                            format="secondary"
                            isInline
                            size="md"
                        />
                    ) : null}
                    <Button
                        {...primaryButtonProps}
                        autoWidth="sm"
                        format="primary"
                        isInline
                        size="md"
                    />
                </div>
            </div>
    );
};

MenuPanelScrollableWithActionArea.displayName = displayName;

export default MenuPanelScrollableWithActionArea;
