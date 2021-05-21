import styled, { FlattenInterpolation, ThemeProps } from 'styled-components';

import { Format } from '../color/format/format';
import { Status } from '../color/status/status';

interface Props {
  grade?: number;
  format?: Format;
  status?: Status;
  styles?: (props: any) => FlattenInterpolation<ThemeProps<any>>;
}

export const Card = styled.div<Props>`
  position: relative;
  padding: 1rem;
  margin: 1rem;
  min-width: 15rem;
  min-height: 15rem;
  border-radius: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  ${(p) => p?.styles};
`;

export const Canvas = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
