import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

import { Toggle } from '../../components';

export default { title: 'Labs/Storyshots' };

export function ShowcaseToggleRow() {
  return (
    <>
      <Div>
        <ToggleRow label="Hide Vimeo navigation" id="A1" mirror />
        <ToggleRow label="Custom logo" id="A2" mirror />
        <ToggleRow label="Accent color" id="A3" mirror />
        <ToggleRow label="Allow share button" id="A4" mirror />
        <ToggleRow
          label="Allow video downloads"
          id="A5"
          mirror
          disabled
        />
      </Div>
      <Div>
        <ToggleRow label="Hide Vimeo navigation" id="B1" />
        <ToggleRow label="Custom logo" id="B2" />
        <ToggleRow label="Accent color" id="B3" />
        <ToggleRow label="Allow share button" id="B4" />
        <ToggleRow label="Allow video downloads" id="B5" disabled />
      </Div>
    </>
  );
}

const Div = styled.div`
  margin: 5rem;
  width: 25rem;
  border: 1px solid ${({ theme }) => rgba(theme.content.color, 0.5)};
  padding: 1rem;
  border-radius: 0.2rem;
`;

interface Props {
  label?: string;
  id: string;
  disabled?: boolean;
  form?: any; // will be required once all fields have been added to API
  opposite?: boolean;
  hidden?: boolean;
  onClick?: VoidFunction;
  subContent?: string | null;
  labelComponent?: React.ReactNode;
  mirror?: boolean;
}

const ToggleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ToggleStyled = styled(Toggle)`
  z-index: 0;
`;

function ToggleRow({
  label,
  id,
  disabled,
  hidden = false,
  mirror,
}: Props) {
  if (hidden) return null;

  return (
    <ToggleWrapper>
      <ToggleStyled
        style={{ width: '100%' }}
        label={label}
        name={id}
        id={id}
        size="md"
        mirror={mirror}
        disabled={disabled}
      />
    </ToggleWrapper>
  );
}
