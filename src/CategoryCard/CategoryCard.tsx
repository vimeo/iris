import React, { SFC, HTMLProps } from 'react';

import { ParagraphLg } from '../Type';
import { CategoryCardProps } from './CategoryCardTypes';
import {
    CategoryCardStyled,
    BackgroundStyled,
    OverlayStyled,
    CardContentWrapStyled,
    CardContentStyled,
    IconWrapperStyled,
} from './CategoryCardStyled';

export const CategoryCard: SFC<
    CategoryCardProps & HTMLProps<HTMLDivElement>
> = ({ backgroundImageURL, children, icon, ref: _, ...props }) => (
    <CategoryCardStyled {...props}>
        <BackgroundStyled
            style={{
                backgroundImage: `url(${backgroundImageURL})`,
            }}
        />
        <OverlayStyled />
        <CardContentWrapStyled>
            <CardContentStyled>
                <IconWrapperStyled>{icon}</IconWrapperStyled>
                <ParagraphLg format="white" element="div" noMargin>
                    {children}
                </ParagraphLg>
            </CardContentStyled>
        </CardContentWrapStyled>
    </CategoryCardStyled>
);
