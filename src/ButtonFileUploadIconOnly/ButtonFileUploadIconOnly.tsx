import React, { SFC } from 'react';
import UploadIcon from '../icons/upload-cloud.svg';
import { ButtonFileUploadWrapper } from '../ButtonFileUploadWrapper';
import { LabelStyled, SpanStyled } from './ButtonFileUploadIconOnlyStyled';
import { ButtonFileUploadIconOnlyFocusOutline as FocusOutline } from './ButtonFileIploadIconOnlyFocusOutline';

interface Props {
    autoSpacingHorizontal?: boolean;
    format?: 'dark' | 'alternative' | 'light';
    id: string;
    name?: string;
    label: string;
    size?: 'sm' | 'md';
}

const ButtonFileUploadIconOnly: SFC<Props> = ({
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

export default ButtonFileUploadIconOnly;
