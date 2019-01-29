import styled from 'styled-components';
import { rem } from 'polished';

export const ListItemStyled = styled.li`
  margin-bottom: ${rem(12)};
  margin-left: ${rem(18)}; //fixes default list outside margin

  font-size: inherit;
  font-weight: 500;

  list-style-position: outside;

  color: currentColor;

  span {
    font-weight: normal;
  }

  &:first-of-type {
    margin-top: ${rem(6)};
  }
`;
