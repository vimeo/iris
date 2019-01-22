import React, { SFC } from 'react';
import UploadIcon from '../Icons/upload-cloud.svg';
import { ButtonFileUploadWrapper } from '../ButtonFileUploadWrapper/ButtonFileUploadWrapper';
import { LabelStyled, SpanStyled } from './ButtonFileUploadIconOnlyStyled';
import { BFUIOFocus as FocusOutline } from './ButtonFileIploadIconOnlyFocus';

interface Props {
    autoSpacingHorizontal?: boolean;
    format?: 'dark' | 'alternative' | 'light';
    id: string;
    name?: string;
    label: string;
    size?: 'sm' | 'md';
}

export const ButtonFileUploadIconOnly: SFC<Props> = ({
    autoSpacingHorizontal = true,
    format = 'dark',
    id,
    name,
    label,
    size = 'sm',
    ...props
}) => (
    <ButtonFileUploadWrapper id={id} name={name} inputElementProps={props}>
        <LabelStyled htmlFor={id} size={size} inputElementProps={props}>
            <SpanStyled>
                <UploadIcon title={label} />
            </SpanStyled>
        </LabelStyled>
        <FocusOutline />
    </ButtonFileUploadWrapper>
);
