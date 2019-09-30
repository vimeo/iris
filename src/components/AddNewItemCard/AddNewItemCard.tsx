import React, { AnchorHTMLAttributes, SFC } from 'react';

import { Wrapper, Card, Anchor } from './AddNewItemStyled';
import { ANICFocusOutline as FocusOutline } from './AddNewItemCardFocusStyled';

import { ParagraphAltMd } from '../../legacy';
import { CirclePlus } from '../../icons';
import { BaseProps } from '../../utils';

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
