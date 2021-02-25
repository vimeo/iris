import React from 'react';
import styled from 'styled-components';

import { Button as B } from './Button';
import { Header as H } from '../../../typography';
import {
  formats,
  statuses,
  variants,
  sizes,
  iconPositions,
} from './Button.config';
import { ArrowRight } from '../../../icons';

export default { title: 'Components/Buttons/Button/Index' };

const Button = styled(B)`
  display: flex;
  margin: 0 1rem 1rem 0;
`;

const Flex = styled.div`
  display: flex;
  margin: 0 1rem 1rem 0;
`;

export function FormatXVariant() {
  return (
    <Flex>
      {formats.map((format, i) => (
        <div>
          <H size="4"> format: {format} </H>
          {variants.map((variant, j) => (
            <Button
              key={`${i}-${j}`}
              variant={variant}
              format={format}
              children={variant}
            />
          ))}
        </div>
      ))}
      {statuses.map((status, i) => (
        <div>
          <H size="4"> status: {status} </H>
          {variants.map((variant, j) => (
            <Button
              key={`${i}-${j}`}
              variant={variant}
              status={status}
              children={variant}
            />
          ))}
        </div>
      ))}
    </Flex>
  );
}
FormatXVariant.storyName = 'Format + Variant';

export function FormatXVariantFloatingPill() {
  return (
    <Flex>
      {formats.map((format, i) => (
        <div>
          <H size="4"> format: {format} </H>
          {variants.map((variant, j) => (
            <Button
              key={`${i}-${j}`}
              variant={variant}
              format={format}
              children={variant}
              floating
              pill
            />
          ))}
        </div>
      ))}
      {statuses.map((status, i) => (
        <div>
          <H size="4"> status: {status} </H>
          {variants.map((variant, j) => (
            <Button
              key={`${i}-${j}`}
              variant={variant}
              status={status}
              children={variant}
              floating
              pill
            />
          ))}
        </div>
      ))}
    </Flex>
  );
}
FormatXVariantFloatingPill.storyName =
  'Format + Variant (floating pill)';

export function Icon() {
  return (
    <Flex>
      {sizes.map((size, i) => (
        <div>
          <H size="4"> size: {size} </H>
          {iconPositions.map((iconPosition, j) => (
            <Button
              key={`${i}-${j}`}
              size={size}
              children={iconPosition}
              iconPosition={iconPosition}
              icon={<ArrowRight />}
            />
          ))}
        </div>
      ))}
    </Flex>
  );
}
Icon.storyName = 'Icon position + Size';

export function IconTextLength() {
  return (
    <Flex>
      {sizes.map((size, i) => (
        <div>
          <H size="4"> size: {size} </H>
          {iconPositions.map((iconPosition, j) => (
            <Button
              key={`${i}-${j}`}
              size={size}
              children={`${iconPosition} & some long text`}
              iconPosition={iconPosition}
              icon={<ArrowRight />}
              style={{ maxWidth: '10rem' }}
            />
          ))}
        </div>
      ))}
    </Flex>
  );
}
IconTextLength.storyName = 'Icon position + Size (long text)';
