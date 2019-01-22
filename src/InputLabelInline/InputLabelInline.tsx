import React, { ReactNode, SFC } from 'react';
import { InputLabelStateIcon } from '../InputLabelStateIcon/InputLabelStateIcon';
import { ParagraphMd } from '../Type';
import styled from 'styled-components';
import * as COLORS from '../Color/Color';

export interface Props {
    children: ReactNode;
    disabled?: boolean;
    format?: 'negative' | 'positive' | 'neutral';
    fieldLevelErrors?: boolean;
    hideLabel?: boolean;
    theme?: 'default' | 'dark';
}

export const InputLabelInline: SFC<Props & { htmlFor: string }> = ({
    children,
    disabled,
    fieldLevelErrors,
    format = 'neutral',
    hideLabel,
    theme = 'default',
    ...props
}) => (
    <StyledP {...props} element="label">
        <span>
            {children}
            {format !== 'neutral' && fieldLevelErrors && (
                <InputLabelStateIcon format={format} />
            )}
        </span>
    </StyledP>
);

const StyledP = styled<Props, any>(ParagraphMd)`
    display: inline-flex;
    width: ${props => (props.hideLabel ? 'auto' : '100%')};
    margin: 0;
    margin-bottom: 0 !important;
    ${props => props.theme === 'dark' && `color: ${COLORS.Porcelain}`}
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
    opacity: ${props => (props.disabled ? '0.5' : '1')};
    align-items: center;
    flex-wrap: wrap;
`;
