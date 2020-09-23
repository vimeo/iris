import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import { Props } from './Pagination.types';

// Iris submodule organization needs to be reconsidered.
// This creates a circular dependency.
// import { Button as B, Input as I } from '../../components';
import { Button as B } from '../../components/buttons/Button/Button';
import { Input as I } from '../../components/inputs/Input/Input';
import { ChevronRight } from '../../icons';
import { withIris } from '../../utils';

export const Pagination = withIris<HTMLDivElement, Props>(
  PaginationComponent
);

function PaginationComponent({
  active = 1,
  format = 'secondary',
  forwardRef,
  onChange,
  pageSize,
  total,
  variant = 'solid',
  ...props
}: Props) {
  const ref = useRef(null);
  const lastPage = Math.ceil(total / pageSize);

  function onBlur() {
    const focused = ref.current === document.activeElement;
    if (!focused) ref.current.value = active;
  }

  useEffect(onBlur);

  const style = { width: active.toString().length * 8 + 25 };

  const doChange = (paging) => (event) =>
    onChange({ paging, ...event });
  const next = doChange({ type: 'next' });
  const prev = doChange({ type: 'prev' });

  function onKeyUp(event) {
    const { value } = event.target;

    const page = !isNaN(value) && parseInt(value, 10);
    const paging = { type: 'goto', page };

    if (event.key === 'Enter') doChange(paging)(event);
  }

  return (
    <Wrapper ref={forwardRef} {...props}>
      <Button
        size="md"
        format={format}
        variant={variant}
        icon={<ChevronLeft />}
        disabled={active === 1}
        onClick={prev}
      />
      <Input
        defaultValue={active}
        onKeyUp={onKeyUp}
        onBlur={onBlur}
        ref={ref}
        style={style}
      />
      <Button
        size="md"
        format={format}
        variant={variant}
        icon={<ChevronRight />}
        disabled={active === lastPage}
        onClick={next}
      />
    </Wrapper>
  );
}

const Button = styled(B)`
  margin: 0 0.5rem;
`;

const Wrapper = styled.div`
  display: flex;
`;

const ChevronLeft = styled(ChevronRight)`
  transform: rotate(180deg);
`;

const Input = styled(I)`
  min-width: ${rem(40)};

  input {
    text-align: center;
  }
`;
