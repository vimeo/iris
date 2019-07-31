import React, { ReactNode } from 'react';
import { ParagraphLg } from '../Type';
import {
  Anchor,
  CategoryCardStyled,
  Background,
  Overlay,
  CardContentWrap,
  CardContent,
  Icon,
} from './CategoryCardStyled';
import { CCFocusOutline as FocusOutline } from './CategoryCardFocus';
import { withDeprecateProps } from '../Utils/Deprecated';
import { splitStyleProps } from '../Utils/splitProps';

interface Props {
  backgroundImageURL?: string;
  src?: string;
  icon: ReactNode;
  href?: string;
}

export const CategoryCard = withDeprecateProps<Props>(
  {
    backgroundImageURL:
      '`backgroundImageURL` is deprecated and will no longer be available in Iris 8. Please use `src`.',
  },
  ({
    backgroundImageURL,
    src,
    children,
    icon,
    href,
    className,
    style,
    ...props
  }) => {
    if (href) {
      const [layoutStyle, styles] = splitStyleProps(className, style);
      return (
        <Anchor href={href} {...layoutStyle}>
          <CategoryCardStyled {...props} {...styles}>
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
          <FocusOutline />
        </Anchor>
      );
    }
    return (
      <CategoryCardStyled
        {...props}
        className={className}
        style={style}
      >
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
    );
  },
);
