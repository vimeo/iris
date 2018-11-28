import React, { ReactNode, SFC } from 'react';
import InputMessageArea from '../InputMessageArea/InputMessageArea';
import styled from 'styled-components';

interface Props {
    children: ReactNode;
    errorMsg?: ReactNode;
    helperMsg?: ReactNode;
    theme: 'default' | 'dark';
}

const InputWrapperInline: SFC<Props> = ({
    children,
    errorMsg,
    helperMsg,
    theme,
    ...props
}) => (
    <InputWrapperInlineStyled {...props}>
        {children}
        <InputMessageArea
            errorMsg={errorMsg}
            helperMsg={helperMsg}
            theme={theme}
        />
    </InputWrapperInlineStyled>
);

export default InputWrapperInline;

const InputWrapperInlineStyled = styled.div`
    margin-bottom: 1rem;
`;
