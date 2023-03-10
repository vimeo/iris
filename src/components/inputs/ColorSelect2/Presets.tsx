import React, { useState } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import { Header } from '../../../typography';
import { Focus } from '../../../utils';

export type Props = {
  palette: string[];
  label: string;
  onColorClick: (color: string) => void;
};

/*
  Presets is a UI for displaying color circles.
  Example for changing the ColorSelect value using Presets:
      const [color, setColor] = useState('#FFFFFF');
      
      <ColorSelect2
        label={
          <div>
            <ColorSelect2.Presets
              onColorClick={(color) => {
                setColor(color);
              }}
            />
          </div>
        }
        width={300}
        height={150}
        onChange={(color) => {
          setColor(color);
        }}
        value={color}
      />
*/
export function Presets({ palette, label, onColorClick }: Props) {
  const [index, indexSet] = useState(0);

  const onKeyUp = ({ key }) => {
    if (key !== 'ArrowRight' && key !== 'ArrowLeft') return;

    let indexNext;
    if (key === 'ArrowRight') indexNext = index === 3 ? 0 : index + 1;
    if (key === 'ArrowLeft') indexNext = index === 0 ? 3 : index - 1;

    indexSet(indexNext);
    onColorClick(palette[indexNext]);
  };

  return (
    <Swabs>
      {label && (
        <Header size="6" style={{ margin: '0 auto 0 0' }}>
          {label}
        </Header>
      )}
      {palette.map((color: string) => (
        <Swab
          aria-label={color}
          color={color}
          key={color}
          onClick={(event) => {
            event.stopPropagation();
            onColorClick(color);
          }}
          onKeyUp={onKeyUp}
        >
          <Focus parent={Swab} radius={12} />
        </Swab>
      ))}
    </Swabs>
  );
}

const Swabs = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const Swab = styled.button<{ color: string }>`
  height: 1.125rem;
  width: 1.125rem;
  border: ${rem(1)} solid rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  margin: 0 0 0 0.75rem;
  background-color: ${(p) => p.color};
  position: relative;
  outline: none;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }

  &:active {
    transform: scale(1);
  }
`;
