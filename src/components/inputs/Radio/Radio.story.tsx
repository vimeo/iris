import React from 'react';
import styled, { css } from 'styled-components';

import { Radio as R } from './Radio';
import { RadioSet } from './RadioSet';
import { Eye, EyeOff } from '../../../icons';
import { rgba } from 'polished';

export default { title: 'Components/inputs/Radio' };

const Radio = styled(R)`
  margin: 1rem;
`;

export function Common() {
  return <Radio label="Sample Radio 1" name="r" id="r1" value="r1" />;
}

export function RadioSetStory() {
  return (
    <>
      <RadioSet>
        <Radio />
        <Radio />
        <Radio />
      </RadioSet>
    </>
  );
}
RadioSetStory.story = { name: 'RadioSet' };

export function Labels() {
  return (
    <>
      <RadioSet>
        <Radio label="Radio 1" />
        <Radio label="Radio 2" />
        <Radio label="Radio 3" />
      </RadioSet>
    </>
  );
}

export function Horizontal() {
  const style = { display: 'inline-flex' };

  return (
    <>
      <RadioSet>
        <Radio style={style} />
        <Radio style={style} />
        <Radio style={style} />
      </RadioSet>
    </>
  );
}

export function CustomElement() {
  return (
    <>
      <RadioSet>
        <Radio>
          <Custom />
        </Radio>
        <Radio>
          <Custom />
        </Radio>
        <Radio>
          <Custom />
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

const customCSS = (n) => ({ theme }) => css`
  border: 3px solid ${rgba(theme.formats.soft, n)};

  svg * {
    fill: ${rgba(theme.formats.soft, n)};
    transition: 120ms ease-in-out;
  }
`;

const CustomStyled = styled.div`
  width: 3rem;
  height: 3rem;
  padding: 0.25rem;
  border-radius: 0.5rem;
  transition: 120ms ease-in-out;

  ${(p) => p.checked && customCSS(1)(p)};
  ${(p) => !p.checked && customCSS(0.5)(p)};

  &:hover {
    background: ${(p) => rgba(p.theme.formats.soft, 0.1)};
    ${(p) => !p.checked && customCSS(0.75)(p)};
  }
`;
