import React, { SFC } from 'react';
import { ParagraphLg } from '../Type';
import {
  CategoryCardStyled,
  BackgroundStyled,
  OverlayStyled,
  CardContentWrapStyled,
  CardContentStyled,
  IconWrapperStyled,
} from './CategoryCardStyled';

interface CategoryCardProps {
  /**
   * a URL for a backgroundImage to represent the category
   */
  backgroundImageURL: string;
  /**
   * Should be a string of the category title
   */
  children: React.ReactNode;
  /**
   * Category Icon SVG
   */
  icon: React.ReactNode;
}

export const CategoryCard: SFC<CategoryCardProps> = ({
  backgroundImageURL,
  children,
  icon,
  ...props
}) => (
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
