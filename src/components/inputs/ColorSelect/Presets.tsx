import React, { useState } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import { Header } from '../../../typography';
import { Focus } from '../../../utils';

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

export type PresetsProps = {
  palette: string[];
  label: string;
  onColorClick: (color: string) => void;
};

export const Presets = ({
  palette,
  label,
  onColorClick,
}: PresetsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleKeyUp = ({ key }) => {
    if (key === 'ArrowRight') {
      const newIndex = activeIndex === 3 ? 0 : activeIndex + 1;
      setActiveIndex(newIndex);
      onColorClick(palette[newIndex]);
    }
    if (key === 'ArrowLeft') {
      const newIndex = activeIndex === 0 ? 3 : activeIndex - 1;
      setActiveIndex(newIndex);
      onColorClick(palette[newIndex]);
    }
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
          onKeyUp={handleKeyUp}
        >
          <Focus parent={Swab} radius={12} />
        </Swab>
      ))}
    </Swabs>
  );
};
