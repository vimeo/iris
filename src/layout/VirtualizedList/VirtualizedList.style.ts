import styled from 'styled-components';

export const Container = styled.div`
  height: ${(props: { height: number }) => props.height}px;
  box-sizing: border-box;
  position: relative;
`;

export const Scrollable = styled.div`
  height: 100%;
  overflow: scroll;
`;
