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

export const CategoryCard = withIris<HTMLButtonElement, Props>(
  CategoryCardComponent,
);

type Props = IrisProps<
  {
    src?: string;
    href?: string;
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
              theme="dark"
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
