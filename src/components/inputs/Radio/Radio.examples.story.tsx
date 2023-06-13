import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { rgba } from 'polished';

import { Radio as R } from './Radio';
import { RadioSet } from './RadioSet';
import { Eye, EyeOff, Pencil } from '../../../icons';
import { Button } from '../../Button/Button';

export default { title: 'components/Radio/examples' };

const Radio = styled(R)`
  margin: 1rem;
`;

export function Controlled({ args }) {
  const [checked, setChecked] = useState('2');

  return (
    <>
      <Button onClick={() => setChecked(checked === '1' ? '2' : '1')}>
        Radio is {checked}
      </Button>
      <RadioSet
        {...args}
        defaultValue={checked}
        onChange={(e) => setChecked(e.currentTarget.value)}
      >
        <Radio value="1" label="Radio 1" />
        <Radio value="2" label="Radio 2" />
      </RadioSet>
    </>
  );
}

export function Horizontal({ args }) {
  const style = { display: 'inline-flex' };

  return (
    <>
      <RadioSet {...args}>
        <Radio style={style} />
        <Radio style={style} />
        <Radio style={style} />
      </RadioSet>
    </>
  );
}

export function CustomElement({ args }) {
  return (
    <>
      <RadioSet {...args}>
        <Radio checked>
          <Custom />
        </Radio>
        <Radio>
          <Custom />
        </Radio>
        <Radio>
          <Custom />
        </Radio>
        <Radio disabled>
          <Custom />
        </Radio>
      </RadioSet>
    </>
  );
}

export function Buttons({ args }) {
  return (
    <>
      <RadioSet {...args}>
        <Radio>
          <Button pill format="secondary" icon={<Pencil />}>
            Hello
          </Button>
        </Radio>
        <Radio>
          <Button pill format="secondary" icon={<Pencil />} />
        </Radio>
        <Radio>
          <Button pill format="secondary" icon={<Pencil />} />
        </Radio>
        <Radio disabled>
          <Button pill format="secondary" icon={<Pencil />} />
        </Radio>
      </RadioSet>
    </>
  );
}

function Custom({ checked = null, ...props }) {
  return (
    <CustomStyled checked={checked} {...props}>
      {!checked && <Eye />}
      {checked && <EyeOff />}
    </CustomStyled>
  );
}

const customCSS =
  (n) =>
  ({ theme }) =>
    css`
      border: 3px solid ${rgba(theme.formats.soft, n)};
      svg * {
        fill: ${rgba(theme.formats.soft, n)};
        transition: 120ms ease-in-out;
      }
    `;

const CustomStyled = styled.div<{
  disabled?: boolean;
  checked?: boolean;
}>`
  width: 3rem;
  height: 3rem;
  padding: 0.25rem;
  border-radius: 0.5rem;
  transition: 120ms ease-in-out;
  ${(p) => p.checked && customCSS(1)(p)};
  ${(p) => !p.checked && customCSS(0.5)(p)};
  &:hover {
    ${(p) =>
      !p.disabled &&
      css`
        background: rgba(p.theme.formats.soft, 0.1);
      `};
    ${(p) => !p.checked && !p.disabled && customCSS(0.75)(p)};
  }
`;
