import styled from 'styled-components';
import { rem } from 'polished';

import { ButtonStyled as Button } from './ButtonStyled';
import { LinkElementStyled as ButtonFocusWrapper } from './ButtonFocusWrapper';
import { TriggerWrapperStyled } from '../portals/PopOver/PopOverStyled';
import {
  FocusOutline,
  FocusOutlineFocused,
} from '../FocusOutline/FocusOutline';

export const ButtonFocus = styled.div<any>`
    ${FocusOutline}

    ${Button}:focus &,
    ${TriggerWrapperStyled}:focus &,
    ${ButtonFocusWrapper} a:focus &,
    ${ButtonFocusWrapper}:focus-within & {
        ${FocusOutlineFocused}
    }

    ${props =>
      props.size === 'xs' &&
      `
        border-radius: ${rem(4)}`}
`;
