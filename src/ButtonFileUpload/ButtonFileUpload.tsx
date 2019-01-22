import React, { SFC } from 'react';
import UploadIcon from '../icons/upload-cloud.svg';
import { ButtonFileUploadWrapper } from '../ButtonFileUploadWrapper/ButtonFileUploadWrapper';
import { ButtonFileUploadProps as Props } from './ButtonFileUploadTypes';
import { LabelStyled, IconWrapper } from './ButtonFileUploadStyled';

export const ButtonFileUpload: SFC<Props> = ({
    autoMargins = true,
    autoWidth = 'sm',
    disabled,
    format = 'primary',
    id,
    isInline,
    label,
    name,
    showIcon = true,
    size = 'md',
    ...props
}) => (
    <ButtonFileUploadWrapper id={id} name={name} inputElementProps={props}>
        <LabelStyled
            autoMargins={autoMargins}
            disabled={disabled}
            format={format}
            htmlFor={id}
            isInline={isInline}
            size={size}
        >
            {showIcon && (
                <IconWrapper size={size}>
                    <UploadIcon />
                </IconWrapper>
            )}
            {label}
        </LabelStyled>
    </ButtonFileUploadWrapper>
);
