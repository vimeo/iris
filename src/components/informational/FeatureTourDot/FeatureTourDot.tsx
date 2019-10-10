import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { rem, rgba, setLightness, saturate } from 'polished';
import { White, VimeoBlue } from '../../../legacy';
import { IrisComponent } from '../../../utils';

export interface FeatureDotProps {
  beaconA11yText: string;
  mode?: 'inactive' | 'open' | 'active' | 'hidden';
  color?: string;
}

export const FeatureTourDot: IrisComponent<FeatureDotProps> = ({
  beaconA11yText,
  mode = 'inactive',
  color,
  ...props
}) => {
  const adjustedColor = setLightness(0.4, saturate(0.1, color));

  return (
    <WrapperStyled {...props} mode={mode}>
      <HaloStyled isActive={mode === 'active'} color={adjustedColor}>
        <DotStyled mode={mode} color={adjustedColor}>
          {beaconA11yText}
        </DotStyled>
      </HaloStyled>
    </WrapperStyled>
  );
};

const beaconSize = 14;
const haloSize = 30;
const wrapperSize = 46;

type mode = 'inactive' | 'open' | 'active' | 'hidden';

const WrapperStyled = styled.span<{
  mode: mode;
}>`
  display: inline-block;
  overflow: visible;
  width: ${rem(wrapperSize)};
  height: ${rem(wrapperSize)};
  padding: ${props =>
    props.mode === 'active'
      ? rem((wrapperSize - haloSize) / 2)
      : rem((wrapperSize - beaconSize) / 2)};

  &:hover {
    transform: scale(1.14);
  }
`;

const DotStyled = styled.span<{
  color: string;
  mode: mode;
}>`
  display: inline-block;
  width: ${rem(beaconSize)};
  height: ${rem(beaconSize)};
  border-radius: ${rem(beaconSize / 2)};
  transition: all 0.1s ease-in-out;
  text-indent: -9999px;
  background-color: ${props => props.color};

  ${props =>
    props.mode === 'open' &&
    css`
      background-color: ${White};
      box-shadow: 0 0 0 ${rem(2)} ${props.color},
        0 ${rem(1)} ${rem(4)} ${rem(2)} ${rgba(props.color, 0.66)};
    `};
`;

const haloAnimation = color => css`
  animation: 2500ms infinite ${keyframes`
    0%, 30%, 100% {
      box-shadow: 0 0 0.25rem 0.25rem ${rgba(VimeoBlue, 0.0)},
      0 0 0.5rem 0.375rem ${rgba(VimeoBlue, 0)},
      0 0 0 0 ${rgba(0, 0, 0, 0.0)}, 0 0 0 0 ${rgba(VimeoBlue, 0)};
    }

    10% {
      box-shadow: 0 0 ${rem(8)} ${rem(6)} ${rgba(color, 0.4)},
      0 0 ${rem(12)} ${rem(10)} rgba(0,0,0,0.0),
      0 0 ${rem(12)} ${rem(14)} ${rgba(color, 0.4)};
    }

    25% {
      box-shadow: 0 0 0 ${rem(8)} ${rem(6)} ${rgba(color, 0)},
      0 0 0 ${rem(80)} rgba(0,0,0,0.0),
      0 0 0 ${rem(80)} ${rgba(color, 0)};
    }
  `};
`;

const HaloStyled = styled.span<{
  isActive: boolean;
  color: string;
}>`
  display: inline-block;
  ${props =>
    props.isActive &&
    css`
      width: ${rem(haloSize)};
      height: ${rem(haloSize)};
      padding: ${rem((haloSize - beaconSize) / 2)};
      border-radius: ${rem(haloSize / 2)};
      background-image: radial-gradient(
        circle,
        ${White},
        ${White} ${rem(9)},
        ${rgba(props.color, 0.25)} ${rem(10)},
        ${rgba(props.color, 0.25)} ${rem(15)},
        ${rgba(White, 0)} 1rem,
        ${rgba(White, 0)}
      );

      ${haloAnimation(props.color)};
    `};
`;
