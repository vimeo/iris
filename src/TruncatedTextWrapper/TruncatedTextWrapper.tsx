import React, { SFC } from 'react';
import styled from 'styled-components';

export interface TruncatedTextWrapperProps {
  /**
   * sets a CSS display attribute on the span that creates the truncation
   */
  displayCSSType?: 'inline-block' | 'inline-flex' | 'flex' | 'block';
}

const TruncatedTextWrapperStyled = styled.span<any>`
  display: ${props => props.displayCSSType};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TruncatedTextWrapper: SFC<TruncatedTextWrapperProps> = ({
  ...props
}) => <TruncatedTextWrapperStyled {...props} />;
