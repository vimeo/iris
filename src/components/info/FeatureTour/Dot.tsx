import React, { forwardRef, Ref } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { rem, rgba, setLightness, saturate } from 'polished';
import { white, blue } from '../../../color';
import { IrisProps } from '../../../utils';

interface Props {
  beaconA11yText: string;
  mode?: 'inactive' | 'open' | 'active' | 'hidden';
  color?: string;
  beaconDelayIndex: number;
  clear: any;
}

export const Dot = forwardRef(
  (
    {
      beaconA11yText,
      mode = 'inactive',
      color,
      beaconDelayIndex,
      onClick,
      clear,
      ...props
    }: IrisProps<Props, HTMLSpanElement>,
    ref: Ref<HTMLSpanElement>,
  ) => {
    const adjustedColor = setLightness(0.4, saturate(0.1, color));

    return (
      <WrapperStyled
        ref={ref}
        {...props}
        mode={mode}
        onClick={e => {
          onClick(e);
          clear();
        }}
      >
        <HaloStyled
          isActive={mode === 'active'}
          beaconDelayIndex={beaconDelayIndex}
          color={adjustedColor}
        >
          <DotStyled mode={mode} color={adjustedColor}>
            {beaconA11yText}
          </DotStyled>
        </HaloStyled>
      </WrapperStyled>
    );
  },
);

const beaconSize = 14;
const haloSize = 30;
const wrapperSize = 46;

type mode = 'inactive' | 'open' | 'active' | 'hidden';

const WrapperStyled = styled.span<{
  mode: mode;
}>`
  display: block;
  position: relative;
  overflow: visible;
  width: ${rem(wrapperSize)};
  height: ${rem(wrapperSize)};
  padding: ${rem((wrapperSize - haloSize) / 2)};
  transition: 120ms ease-in-out;
  transform-origin: 50 50;
  cursor: pointer;

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
      background-color: ${white};
      box-shadow: 0 0 0 ${rem(2)} ${props.color},
        0 ${rem(1)} ${rem(4)} ${rem(2)} ${rgba(props.color, 0.66)};
    `};
`;

const haloAnimation = (color, delay) => css`
  animation: 2500ms infinite ${keyframes`
    0%, 30%, 100% {
      box-shadow: 0 0 0.25rem 0.25rem ${rgba(blue(500), 0.0)},
      0 0 0.5rem 0.375rem ${rgba(blue(500), 0)},
      0 0 0 0 ${rgba(0, 0, 0, 0.0)}, 0 0 0 0 ${rgba(blue(500), 0)};
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
  `} ${delay * 300}ms;
`;

const HaloStyled = styled.span<{
  isActive: boolean;
  color: string;
  beaconDelayIndex: number;
}>`
  display: inline-block;
  width: ${rem(haloSize)};
  height: ${rem(haloSize)};
  padding: ${rem((haloSize - beaconSize) / 2)};
  border-radius: ${rem(haloSize / 2)};

  ${props =>
    props.isActive &&
    css`
      background-image: radial-gradient(
        circle,
        ${white},
        ${white} ${rem(9)},
        ${rgba(props.color, 0.25)} ${rem(10)},
        ${rgba(props.color, 0.25)} ${rem(15)},
        ${rgba(white, 0)} 1rem,
        ${rgba(white, 0)}
      );

      ${haloAnimation(props.color, props.beaconDelayIndex)};
    `};
`;
