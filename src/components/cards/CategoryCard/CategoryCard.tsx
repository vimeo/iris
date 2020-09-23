import React, { ReactNode } from 'react';

import {
  CategoryCard as Styled,
  Background,
  Overlay,
  CardContentWrap,
  CardContent,
  Icon,
  Wrapper,
} from './CategoryCard.style';

import { Paragraph } from '../../../typography';
import { Focus, IrisProps, withIris } from '../../../utils';
import { themes } from '../../../themes';

export const CategoryCard = withIris<HTMLButtonElement, Props>(
  CategoryCardComponent
);

type Props = IrisProps<
  {
    /**
     * The image that appears in background of card
     */
    src?: string;
    href?: string;
    /**
     * The icon that appears in center of card
     */
    icon: ReactNode;
  },
  HTMLButtonElement
>;

function CategoryCardComponent({
  src,
  children,
  forwardRef,
  icon,
  ...props
}: Props) {
  return (
    <Styled ref={forwardRef} {...props}>
      <Wrapper>
        <Background bg={src} />
        <Overlay />
        <CardContentWrap>
          <CardContent>
            <Icon>{icon}</Icon>
            <Paragraph
              size="1"
              theme={themes.dark}
              style={{ margin: 0, textShadow: '0 0 5px 1px red' }}
            >
              {children}
            </Paragraph>
          </CardContent>
        </CardContentWrap>
      </Wrapper>
      <Focus parent={Styled} />
    </Styled>
  );
}
