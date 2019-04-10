import React, { ReactNode } from 'react';
import { ParagraphLg } from '../Type';
import {
  CategoryCardStyled,
  Background,
  Overlay,
  CardContentWrap,
  CardContent,
  Icon,
} from './CategoryCardStyled';
import { withDeprecateProps } from '../Utils/Deprecated';

interface Props {
  backgroundImageURL?: string;
  src?: string;
  icon: ReactNode;
}

export const CategoryCard = withDeprecateProps<Props>(
  {
    backgroundImageURL:
      '`backgroundImageURL` is deprecated and will no longer be available in Iris 8. Please use `src`.',
  },
  ({ backgroundImageURL, src, children, icon, ...props }) => (
    <CategoryCardStyled {...props}>
      <Background bg={backgroundImageURL || src} />
      <Overlay />
      <CardContentWrap>
        <CardContent>
          <Icon>{icon}</Icon>
          <ParagraphLg format="white" element="div" noMargin>
            {children}
          </ParagraphLg>
        </CardContent>
      </CardContentWrap>
    </CategoryCardStyled>
  ),
);
