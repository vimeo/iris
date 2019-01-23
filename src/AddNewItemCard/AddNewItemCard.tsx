import React, { SFC, HTMLProps } from 'react';
import { AddNewItemCardProps as Props } from './AddNewItemCardTypes';
import { Wrapper, Card, Anchor } from './AddNewItemStyled';
import { ParagraphAltMd } from '../Type';
import { CirclePlus } from '../Icons';
import { ANICFocusOutline as FocusOutline } from './AddNewItemCardFocusStyled';

export const AddNewItemCard: SFC<Props & HTMLProps<HTMLDivElement>> = ({
    anchorProps,
    fluid,
    text,
}) => (
    <Wrapper fluid={fluid}>
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
