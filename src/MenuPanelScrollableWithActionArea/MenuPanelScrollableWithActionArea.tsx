import React, { SFC, ReactNode } from 'react';
import { Button } from '../Button/Button';
import { OverflowTruncationWrapper } from '../OverflowTruncationWrapper/OverflowTruncationWrapper';
import { Grid } from '../Grid/Grid';
import { GridCol } from '../GridCol/GridCol';
import { GridBlock } from '../GridBlock/GridBlock';
import * as COLORS from '../Color/Color';

interface Props {
    children: ReactNode;
    className?: string;
    primaryButtonProps: { children: ReactNode };
    secondaryButtonProps?: { children: ReactNode };
    maxHeight: number;
}

export const MenuPanelScrollableWithActionArea: SFC<Props> = ({
    children,
    className,
    maxHeight,
    primaryButtonProps,
    secondaryButtonProps,
    ...props
}) => (
    <div {...props} style={{ position: 'relative' }}>
        <OverflowTruncationWrapper maxHeight={maxHeight}>
            <div style={{ padding: '1rem 1rem 0' }}>{children}</div>
        </OverflowTruncationWrapper>
        <div
            style={{
                position: 'relative',
                padding: '0.75rem 0.5rem',
                backgroundColor: COLORS.White,
            }}
        >
            <Grid isNested>
                <GridBlock>
                    <GridCol mdSpan={12} formColumn>
                        {secondaryButtonProps && (
                            <Button
                                {...secondaryButtonProps}
                                autoWidth="fluid"
                                format="secondary"
                                isInline
                                size="sm"
                                children={primaryButtonProps.children}
                            />
                        )}
                    </GridCol>
                    <GridCol mdSpan={12} formColumn>
                        <Button
                            {...primaryButtonProps}
                            autoWidth="fluid"
                            format="primary"
                            isInline
                            size="sm"
                            children={secondaryButtonProps.children}
                        />
                    </GridCol>
                </GridBlock>
            </Grid>
        </div>
    </div>
);
