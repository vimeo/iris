import React, { ReactNode, forwardRef, Ref } from 'react';
import styled, { css } from 'styled-components';

import { Text, Paragraph } from '../../../typography';
import { IrisInputProps, IrisProps } from '../../../utils';
import { Statuses } from '../../../themes';
import { core } from '../../../tokens';

interface Props {
  defaultValue?: string | string[] | number | boolean;
  disabled?: boolean;
  floating?: boolean;
  floatLabel?: boolean;
  icon?: ReactNode;
  id?: string;
  label?: ReactNode;
  size?: string;
  status?: Statuses;
  value?: string;
}

export const Wrapper = forwardRef(function (
  {
    children,
    defaultValue,
    disabled,
    floating,
    floatLabel,
    icon,
    id,
    label,
    messages = {},
    status,
    style,
    size,
    theme,
    value,
    ...props
  }: IrisInputProps<Props>,
  ref: Ref<HTMLDivElement>
) {
  const active = floating && floatLabel;

  const preMessage = messages.pre && messages.pre;
  const postMessage = messages.post && messages.post;
  const error = status === 'negative' && messages.error;
  const help = status === 'positive' && messages.help;

  return (
    <div
      {...props}
      ref={ref}
      style={{
        ...style,
        position: 'relative',
      }}
    >
      {preMessage}
      {label && (
        <Label
          floating={floating}
          active={active}
          sizeInput={size}
          htmlFor={id}
          disabled={disabled}
        >
          {label}
        </Label>
      )}
      {children}
      {Object.values(messages).length > 0 && (
        <MessageArea
          error={error}
          help={help}
          post={postMessage}
          status={status}
          theme={theme}
        />
      )}
    </div>
  );
});

// NOTE!
// 09/2021
// ——————————
// The following was quickly eye-balled to add floating support
// to inputs of all sizes. This is not ideal and should be replaced
// by values derived from higher-order input size tokens.

const sizes = {
  xxs: 0.5,
  xs: 0.75,
  sm: 0.75,
  md: 1,
  lg: 1.5,
  xl: 1.75,
  xxl: 2,
};

const tops = {
  xxs: 0.25,
  xs: 0.55,
  sm: 0.95,
  md: 0.95,
  lg: 1.1,
  xl: 1.55,
  xxl: 2,
};

const lefts = {
  xxs: 0.25,
  xs: 0.35,
  sm: 0.5,
  md: 0.6,
  lg: 0.7,
  xl: 0.9,
  xxl: 1.1,
};

interface PropsLabel {
  active?: boolean;
  floating?: boolean;
  htmlFor?: string;
  sizeInput?: string;
}

const Label = styled(Text).attrs({ element: 'label' })<PropsLabel>`
  display: inline-block;
  transition: 120ms ease-in-out;
  cursor: ${(p) => (p.disabled ? 'not-allowed' : 'pointer')};
  font-size: ${(p) => 0.315 + sizes[p.sizeInput] / 1.8}rem;
  color: ${core.color.text(600)};
  margin-bottom: 0.2rem;
  font-weight: 400;

  ${(p) =>
    p.floating &&
    !p.active &&
    css`
      pointer-events: none;
      position: absolute;
      z-index: 1;
      font-size: ${sizes[p.sizeInput]}rem;
      top: ${tops[p.sizeInput]}rem;
      left: 0.75rem;
    `};

  ${(p) =>
    p.floating &&
    p.active &&
    css`
      position: absolute;
      z-index: 1;
      font-size: ${0.315 + sizes[p.sizeInput] / 1.8}rem;
      top: ${0.25 + tops[p.sizeInput] / 4}rem;
      left: ${lefts[p.sizeInput]}rem;
    `};
`;

interface PropsMessagesArea {
  error?: ReactNode;
  post?: ReactNode;
  help?: ReactNode;
  position?: 'bottom' | 'sublabel';
  status?: Statuses;
}

const MessageArea = forwardRef(function (
  {
    error,
    position = 'bottom',
    help,
    post,
    theme,
    ...props
  }: IrisProps<PropsMessagesArea>,
  ref: Ref<HTMLParagraphElement>
) {
  if (post) props.children = post;
  if (help) props.children = help;
  if (error) props.children = error;

  return (
    <div
      {...props}
      style={{
        display: 'inline-flex',
        marginBottom: position === 'sublabel' && '0.5rem',
      }}
    >
      {post && <Message ref={ref} {...props} />}
      {help && <Message ref={ref} {...props} />}
      {error && <Message ref={ref} {...props} />}
    </div>
  );
});

function Message({ children, status, ...props }: any) {
  return (
    <Paragraph
      {...props}
      size="3"
      element="span"
      role={status === 'negative' ? 'alert' : 'note'}
      status={status}
      style={{ overflow: 'hidden' }}
    >
      {children}
    </Paragraph>
  );
}
