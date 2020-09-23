import React from 'react';

import { Pagination } from './Pagination';
import { Props } from './Pagination.types';

import { useFakeQuery } from '../../storybook';

export default { title: 'layout/Pagination' };

const total = 35;
const pageSize = 8;

function pageChange({ page, goto }) {
  return ({ paging }) => {
    if (paging.type === 'next') goto(page + 1);
    if (paging.type === 'prev') goto(page - 1);
    if (paging.type === 'goto') goto(paging.page);
  };
}

const css = `margin-bottom: 1rem;`;

export function Common() {
  return <Pagination active={1} total={12} pageSize={2} />;
}

export const Format = () => <FormatStory />;
function FormatStory() {
  const { page, goto } = useFakeQuery({ total, pageSize });
  const onChange = pageChange({ page, goto });

  return (
    <>
      {formats.map((format, i) => (
        <Pagination
          css={css}
          key={i}
          format={format}
          active={page}
          total={total}
          pageSize={pageSize}
          onChange={onChange}
        />
      ))}
    </>
  );
}

export const Variant = () => <VariantStory />;
function VariantStory() {
  const { page, goto } = useFakeQuery({ total, pageSize });
  const onChange = pageChange({ page, goto });

  return (
    <>
      {variants.map((variant, i) => (
        <Pagination
          css={css}
          key={i}
          format="basic"
          variant={variant}
          active={page}
          total={total}
          pageSize={pageSize}
          onChange={onChange}
        />
      ))}
    </>
  );
}

const formats: Props['format'][] = [
  'basic',
  'soft',
  'secondary',
  'alternative',
  'primary',
];

const variants: Props['variant'][] = [
  'solid',
  'transparent',
  'outline',
  'dashed',
  'minimal',
  'minimalTransparent',
  'hyperminimal',
];
