import { shade } from 'polished';
import styled from 'styled-components';

import { slate } from '../../../color';
import { core } from '../../../tokens';
import { Text } from '../../../typography';

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
`;

export const Steps = styled(Text)`
  color: ${slate(500)};
  margin-right: auto;
  font-size: 0.75rem;
  letter-spacing: -0.05px;
`;

const rainbowColors = [
  '#ffb21e',
  '#ff4d4d',
  '#6447b6',
  '#45c3ff',
  '#0088cc',
  '#7fc400',
  '#ffc86c',
  '#ffb21e',
];

const rainbow = {
  light: rainbowColors.join(', '),
  dark: rainbowColors.map((color) => shade(0.125, color)).join(', '),
};

export const TourPointStyled = styled.div`
  position: relative;
  padding: 1rem;
  background: ${core.color.background(600)};
  color: ${core.color.text(0)};
  width: 320px;
  border-radius: 0.5rem;
  background-clip: padding-box;
  border: 0.25rem solid transparent;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    margin: -0.25rem;
    border-radius: 0.5rem;
    background: conic-gradient(${(p) => rainbow[p.theme.name]});
  }

  > img {
    width: 100%;
    border-radius: 0.1875rem;
    margin-bottom: 1rem;
    background-color: black;
  }
`;

export const CaretStyled = styled.div`
  position: absolute;
  width: 1rem;
  height: 1rem;
  transform: rotate(-45deg);
  background: ${core.color.background(600)};
  border: 0.25rem solid ${core.color.text(0)};
`;
