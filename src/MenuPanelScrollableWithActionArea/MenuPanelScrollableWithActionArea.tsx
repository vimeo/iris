import React, { SFC, ReactNode } from 'react';
import Button from '../Button';
import { OverflowTruncationWrapper } from '../OverflowTruncationWrapper';
import Grid from '../Grid';
import GridCol from '../GridCol';
import GridBlock from '../GridBlock';
import COLORS from '../globals/js/constants/COLORS';

interface Props {
    children: ReactNode;
    className?: string;
    primaryButtonProps: { children: ReactNode };
    secondaryButtonProps?: { children: ReactNode };
    maxHeight: number;
}

const MenuPanelScrollableWithActionArea: SFC<Props> = ({
    children,
    className,
    maxHeight,
    primaryButtonProps,
    secondaryButtonProps,
    ...filteredProps
}) => (
    <div {...filteredProps} style={{ position: 'relative' }}>
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

export default MenuPanelScrollableWithActionArea;
