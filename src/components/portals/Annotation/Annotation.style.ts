import styled from 'styled-components';
import { CircleInfo } from '../../../icons';
import { slate, blue } from '../../../color';

export const Annotation = styled.div`
  display: inline-block;
  position: relative;
  color: ${slate(500)};

  &:hover {
    color: ${blue(500)};
  }

  * {
    fill: currentColor;
  }
`;

export const Icon = styled(CircleInfo)`
  position: absolute;
  top: 0;
  right: -1.25rem;
  width: 1rem;
  height: 1rem;
`;
