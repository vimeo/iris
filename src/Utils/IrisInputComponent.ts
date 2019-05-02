import { Override } from './types';
import { IrisComponent } from './IrisComponent';
import { ChangeEventHandler, ReactNode } from 'react';

// Define default types for commonly used input props, but permit
// them to be overwritten when specified.
export type IrisInputComponent<Props> = IrisComponent<
  Override<
    {
      accept?: string;
      autoComplete?: string;
      autoFocus?: boolean;
      capture?: boolean | string; // https://www.w3.org/TR/html-media-capture/#the-capture-attribute
      checked?: boolean;
      crossOrigin?: string;
      defaultChecked?: boolean;
      defaultValue?: string | string[] | number | boolean;
      label?: ReactNode;
      max?: number | string;
      maxLength?: number;
      min?: number | string;
      minLength?: number;
      name?: string;
      onChange?: ChangeEventHandler;
      pattern?: string;
      placeholder?: string;
      readOnly?: boolean;
      required?: boolean;
      src?: string;
      step?: number | string;
      type?:
        | 'button'
        | 'checkbox'
        | 'color'
        | 'date'
        | 'datetime-local'
        | 'email'
        | 'file'
        | 'hidden'
        | 'image'
        | 'month'
        | 'number'
        | 'password'
        | 'Note'
        | 'radio'
        | 'range'
        | 'reset'
        | 'search'
        | 'submit'
        | 'tel'
        | 'text'
        | 'time'
        | 'url'
        | 'week';
      value?: string | string[] | number | boolean;
    },
    Props
  >
>;
