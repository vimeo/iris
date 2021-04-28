import styled, { css } from 'styled-components';
import { rem } from 'polished';

import { inputColors } from '../Shared';

import { slate, red } from '../../../color';
import { CircleInfoSmall } from '../../../icons';

export const TextAreaStyled = styled.textarea<any>`
  display: block;
  width: 100%;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  padding: 1rem;
  font-size: ${rem(14)};
  line-height: 1.25rem;
  height: auto;
  border-radius: 0.2rem;
  ${inputColors};

  &:placeholder {
    color: ${slate(200)};
  }

  &:focus {
    outline: none;
  }

  ${(props) =>
    props.hasIcon &&
    css`
      padding-left: 2.25rem;
    `};
`;

export const InfoIcon = styled(CircleInfoSmall)`
  position: absolute;
  top: ${rem(18)};
  left: ${rem(10)};
  width: ${rem(20)};
  height: ${rem(20)};

  * {
    fill: ${red(500)};
  }
`;
