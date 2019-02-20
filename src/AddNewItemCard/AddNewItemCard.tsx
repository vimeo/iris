import React, { AnchorHTMLAttributes, SFC } from 'react';
import { Wrapper, Card, Anchor } from './AddNewItemStyled';
import { ParagraphAltMd } from '../Type';
import { CirclePlus } from '../Icons';
import { ANICFocusOutline as FocusOutline } from './AddNewItemCardFocusStyled';
import { BaseProps } from '../Utils/BaseProps';

export interface Props extends BaseProps {
  anchorProps: AnchorHTMLAttributes<HTMLAnchorElement>;
  text: string;
  fluid?: boolean;
}

export const AddNewItemCard: SFC<Props> = ({
  anchorProps,
  fluid,
  text,
  ...props
}) => (
  <Wrapper fluid={fluid} {...props}>
    <Card>
      <Anchor {...anchorProps}>
        <span>
          <CirclePlus />
        </span>
        <ParagraphAltMd>{text}</ParagraphAltMd>
        <FocusOutline />
      </Anchor>
    </Card>
  </Wrapper>
);
