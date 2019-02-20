import React, { SFC, ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
  className?: string;
  id: string;
  inputElementProps?: {};
  name?: string;
}

export const ButtonFileUploadWrapper: SFC<Props> = ({
  children,
  className,
  id,
  inputElementProps,
  name,
  ...props
}) => (
  <Wrapper className={className}>
    <InputStyled
      {...props}
      {...inputElementProps}
      name={name}
      type="file"
      id={id}
    />
    {children}
  </Wrapper>
);

export const Wrapper = styled.div`
  display: inline-block;
  position: relative;
`;

export const InputStyled = styled.input`
  overflow: hidden;
  position: absolute;
  z-index: -1;
  width: 0.1px;
  height: 0.1px;
  opacity: 0;

  &:focus {
    outline: none;
  }
`;
