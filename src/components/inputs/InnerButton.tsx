import React, { forwardRef, Ref as RRef, ReactNode } from 'react';
import { Tip } from '../portals/Tip/Tip';
import { Button } from '../buttons/Button/Button';
import styled from 'styled-components';
import { IrisProps } from '../../utils';

type Props = IrisProps<{
  format?: 'basic' | 'alternative' | 'primary' | 'secondary';
  variant?: 'minimal' | 'basic' | 'minimalTransparent';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  tooltipText?: string;
  tooltipPosition?: 'top' | 'right' | 'bottom' | 'left';
  tooltipProps?: any;
  floating?: boolean;
  height?: number;
  label?: ReactNode;
}>;

type Ref = RRef<HTMLButtonElement>;

export const InnerButton = forwardRef(function(
  {
    children,
    className,
    floating,
    format = 'primary',
    height,
    label,
    size = 'md',
    style,
    tooltipPosition = 'top',
    tooltipProps,
    tooltipText,
    variant,
    ...props
  }: Props,
  ref: Ref,
) {
  const button = (
    <ButtonStyled
      size={size}
      height={height}
      format={format}
      variant={variant}
      icon={children}
      ref={ref}
      style={{ minHeight: 0 }}
      {...props}
    />
  );

  return (
    <Wrapper
      className={className}
      style={style}
      height={height}
      label={label}
      floating={floating}
    >
      {tooltipText ? (
        <Tip
          content={tooltipText}
          attach={tooltipPosition}
          {...tooltipProps}
        >
          {button}
        </Tip>
      ) : (
        button
      )}
    </Wrapper>
  );
});

const ButtonStyled = styled(Button)<any>`
  font-weight: 400;
  border-radius: 0 0.2rem 0.2rem 0;
  min-width: ${p => p.height}px;
  height: calc(100% - 2px);
  transition: background 120ms ease-in-out;

  svg {
    margin: 0;
  }

  > span {
    margin: 0;
    padding: 0;
    line-height: 1rem;
  }
`;

const Wrapper = styled.div<any>`
  position: absolute;
  top: 1px;
  right: 1px;
  height: ${p => p.height}px;
`;
