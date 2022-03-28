import React, { ReactNode, cloneElement } from 'react';

import {
  nullStyle,
  Faux,
  radii,
  HiddenMark,
  ToggleIcon,
} from './Input.style';
import { Props } from './Input.types';

import { Label } from '../Shared';
import { Focus } from '../../../utils';
import { Wrapper } from '../Wrapper/Wrapper';

interface ToggleIconProps {
  icon?: ReactNode;
}

export function Mark({
  autoComplete = true,
  checked,
  defaultChecked,
  children,
  className,
  defaultValue,
  disabled,
  forwardRef,
  id,
  messages,
  name,
  onChange,
  status,
  style = nullStyle,
  theme,
  type,
  value,
  ...props
}: Props & ToggleIconProps) {
  if (autoComplete === true) autoComplete = 'on';
  if (autoComplete === false) autoComplete = 'off';

  return (
    <Wrapper
      className={className}
      messages={messages}
      onKeyUp={a11yKey}
      status={status}
      style={style}
      theme={theme}
    >
      <div style={{ position: 'relative' }}>
        <HiddenMark
          autoComplete={autoComplete}
          defaultValue={defaultValue as string | string[]}
          checked={checked}
          defaultChecked={defaultChecked}
          disabled={disabled}
          id={id}
          name={name}
          onChange={onChange}
          ref={forwardRef}
          type={type}
          value={value as string | string[]}
        />

        {children && (
          <CustomMark
            checked={checked}
            children={children}
            disabled={disabled}
            htmlFor={id}
            {...props}
          />
        )}

        {!children && (
          <DefaultMark
            disabled={disabled}
            id={id}
            status={status}
            type={type}
            {...props}
          />
        )}
      </div>
    </Wrapper>
  );
}

function DefaultMark({
  disabled,
  icon,
  id,
  indeterminate,
  label,
  mirror,
  size = 'md',
  status,
  theme,
  type,
}: Props & ToggleIconProps) {
  return (
    <>
      <Label
        disabled={disabled}
        fauxMark={Faux}
        format={status}
        htmlFor={id}
        mirror={mirror}
        size={size}
        theme={theme}
        type={type}
      >
        {label}
      </Label>
      <Faux
        disabled={disabled}
        indeterminate={indeterminate}
        mirror={mirror}
        size={size}
        theme={theme}
        type={type}
      >
        <Focus
          parent={HiddenMark}
          radius={radii[type]}
          theme={theme}
        />

        <ToggleIcon>{icon}</ToggleIcon>
      </Faux>
    </>
  );
}

function CustomMark({ children, htmlFor, checked, disabled }) {
  return (
    children && (
      <label
        htmlFor={htmlFor}
        style={!disabled && { cursor: 'pointer' }}
      >
        {cloneElement(children, { disabled, checked })}
      </label>
    )
  );
}

function a11yKey({ key, target }) {
  if (key === 'Enter' || key.includes('Arrow')) {
    target.checked = !target.checked;
  }
}
