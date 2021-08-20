import styled from 'styled-components';

export const Hidden = styled.input`
  overflow: hidden;
  position: absolute;
  z-index: -1;
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  outline: none;
`;
