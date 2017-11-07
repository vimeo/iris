// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './MenuPanelScrollableWithActionArea.scss';
import Button from '../Button/Button';
import OverflowTruncationWrapper from '../OverflowTruncationWrapper/OverflowTruncationWrapper';
import { GridBlock, GridCol, Grid } from '../Grid/Grid';

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
                        maxHeight,
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
                    <div className={styles.ContentWrapper}>
                        {children}
                    </div>
                </OverflowTruncationWrapper>
                <div className={styles.ActionArea}>
                    <Grid
                        isNested
                    >
                        <GridBlock>
                            <GridCol
                                mdSpan={12}
                                formColumn
                            >
                            {secondaryButtonProps ? (
                                <Button
                                    {...secondaryButtonProps}
                                    autoWidth="fluid"
                                    format="secondary"
                                    isInline
                                    size="md"
                                />
                            ) : null}
                            </GridCol>
                            <GridCol
                                mdSpan={12}
                                formColumn
                            >
                                <Button
                                    {...primaryButtonProps}
                                    autoWidth="fluid"
                                    format="primary"
                                    isInline
                                    size="md"
                                />
                            </GridCol>
                        </GridBlock>
                    </Grid>
                </div>
            </div>
    );
};

MenuPanelScrollableWithActionArea.displayName = displayName;

export default MenuPanelScrollableWithActionArea;
