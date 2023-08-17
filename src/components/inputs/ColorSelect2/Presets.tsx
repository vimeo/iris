import React, { useState } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import { Paragraph } from '../../../typography';
import { Focus } from '../../../utils';
import { Pencil } from '../../../icons';
import { Button } from '../../Button/Button';

export type Props = {
  selectedColor: string;
  palette: string[];
  label?: string;
  onSelect: (color: string) => void;
  onEdit?: () => void;
};

export function Presets({
  selectedColor,
  palette,
  label,
  onSelect,
  onEdit,
}: Props) {
  const [index, setIndex] = useState(0);

  const onKeyUp = ({ key }) => {
    if (key !== 'ArrowRight' && key !== 'ArrowLeft') return;

    let indexNext;
    if (key === 'ArrowRight')
      indexNext = index === palette.length - 1 ? 0 : index + 1;
    if (key === 'ArrowLeft')
      indexNext = index === 0 ? palette.length - 1 : index - 1;

    setIndex(indexNext);
    onSelect(palette[indexNext]);
  };

  return (
    <PresetsContainer>
      {label && (
        <Paragraph size="1" style={{ margin: 0, fontWeight: 700 }}>
          {label}
        </Paragraph>
      )}
      <Swabs>
        {palette.map((color: string) => (
          <SwabRing
            selected={
              selectedColor.toLowerCase() === color.toLowerCase()
            }
            key={color}
            onClick={() => onSelect(color)}
          >
            <Swab
              aria-label={color}
              color={color}
              onClick={(event) => {
                event.stopPropagation();
                onSelect(color);
              }}
              onKeyUp={onKeyUp}
            >
              <Focus parent={Swab} radius={24} />
            </Swab>
          </SwabRing>
        ))}
        {onEdit && (
          <Button
            icon={<Pencil />}
            size="sm"
            variant="minimalTransparent"
            format="basic"
            onClick={onEdit}
          />
        )}
      </Swabs>
    </PresetsContainer>
  );
}

const PresetsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: 1rem;
`;

const Swabs = styled.div`
  margin-left: auto;
  display: flex;
  gap: ${rem(4)};
`;

const Swab = styled.button<{ color: string }>`
  height: ${rem(24)};
  width: ${rem(24)};
  border: ${rem(1)} solid rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  background-color: ${(p) => p.color};
  position: relative;
  outline: none;
  cursor: pointer;
`;

const SwabRing = styled.div<{ selected: boolean }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${rem(30)};
  height: ${rem(30)};
  border-radius: ${rem(24)};
  border: ${(p) =>
    `${
      p.selected ? p.theme.formats.primary : 'transparent'
    } solid ${rem(2)}`};
  transition: 150ms ease-in-out;

  &:hover {
    border-color: ${(p) => p.theme.content.color};
  }
`;
