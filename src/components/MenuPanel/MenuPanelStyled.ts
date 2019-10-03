import styled from 'styled-components';
import { rem } from 'polished';
import * as COLORS from '../../color';
import {
  TriggerWrapperStyledProps,
  MenuPanelStyledProps,
  WrapperStyledProps,
} from './MenuPanelTypes';

export const menuSpeed = 100;

const menuPanelSizes = {
  sm: 124,
  md: 200,
  lg: 320,
  xl: 480,
};

export const menuPanelTransitionStyles = {
  entered: {
    opacity: 1,
  },
};

const maybeFluid = props =>
  props.isFluid ? 'block' : 'inline-block';

export const MenuPanelStyled = styled.div<MenuPanelStyledProps>`
  display: ${props => (props.isShowing ? 'block' : 'none')};

  width: ${props => rem(menuPanelSizes[props.size])};

  border-radius: ${rem(5)};
  background: ${props =>
    props.theme === 'dark' ? COLORS.SovereignShadow : COLORS.White};
  box-shadow: 0 0 ${rem(1)} 0 rgba(0, 0, 0, 0.15),
    0 ${rem(4)} ${rem(8)} 0 rgba(0, 0, 0, 0.15);
  opacity: 0;
  transition: all ${menuSpeed}ms ease-in;

  ${props =>
    props.zIndexOverride && `zIndex: ${props.zIndexOverride}`};
`;

export const TriggerWrapperStyled = styled.a<
  TriggerWrapperStyledProps
>`
  display: ${maybeFluid}; /* // this ensures proper menu placement; */
  outline: none;
  position: relative;
`;

export const WrapperStyled = styled.div<WrapperStyledProps>`
  display: ${maybeFluid};
  ${props => props.isFluid && 'width: 100%;'};
`;
