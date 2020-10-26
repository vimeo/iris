import styled from 'styled-components';
import { slate, blue } from '../../../color';

export const Annotation = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  color: ${slate(500)};

  &:hover {
    color: ${blue(500)};
  }

  * {
    fill: currentColor;
  }
`;
