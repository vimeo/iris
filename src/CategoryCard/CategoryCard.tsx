import React from 'react';

import { ParagraphLg } from '../Type/';
import { CategoryCardProps } from './CategoryCardTypes';
import {
    CategoryCardStyled,
    BackgroundStyled,
    OverlayStyled,
    CardContentWrapStyled,
    CardContentStyled,
    IconWrapperStyled
 } from './CategoryCardStyled';

 
const CategoryCard = ({
    backgroundImageURL,
    children,
    icon,
    ref:_,
    ...filteredProps
}: CategoryCardProps ) => {
    return (
        <CategoryCardStyled {...filteredProps}>
            <BackgroundStyled
                style={{ backgroundImage: `url(${backgroundImageURL})` }}
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
};

export default CategoryCard;
