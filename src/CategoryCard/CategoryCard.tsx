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

const CategoryCard: SFC<CategoryCardProps & HTMLProps<HTMLDivElement>> = ({
    backgroundImageURL,
    children,
    icon,
    ref: _,
    ...filteredProps
}) => (
    <CategoryCardStyled {...filteredProps}>
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

export default CategoryCard;
