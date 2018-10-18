import React, { SFC, HTMLProps } from 'react';
import { AddNewItemCardProps as Props } from './AddNewItemCardTypes';
import { Wrapper, Card, Anchor } from './AddNewItemStyled';
import { ParagraphAltMd } from '../Type';
import CirclePlusIcon from '../icons/circle-plus.svg';
import { FocusOutline } from './AddNewItemCardFocusStyled';

const AddNewItemCard: SFC<Props & HTMLProps<HTMLDivElement>> = ({
    anchorProps,
    text,
}) => (
    <Wrapper>
        <Card>
            <Anchor {...anchorProps}>
                <span>
                    <CirclePlusIcon />
                </span>
                <ParagraphAltMd>{text}</ParagraphAltMd>
                <FocusOutline />
            </Anchor>
        </Card>
    </Wrapper>
);

export default AddNewItemCard;
