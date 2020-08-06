import {
  CSSProperties,
  FocusEventHandler,
  MouseEventHandler,
  ReactNode,
  ChangeEventHandler,
  KeyboardEventHandler,
  Ref,
  SVGAttributes,
  ReactElement,
  FunctionComponent,
} from 'react';

import { Override } from './types';

import { IrisTheme } from '../themes';

export interface IrisSVG<T = SVGSVGElement> {
  (props: SVGAttributes<any>, ref: Ref<T>): ReactElement | null;
}

export type IrisProps<
  Props = {},
  DOMElement = HTMLDivElement
> = Override<DefaultIrisProps<DOMElement>, Props & ForbidAsProp>;

type DefaultIrisProps<DOMElement = HTMLDivElement> = IrisElementProps<
  DOMElement
> &
  IrisEventProps<DOMElement> &
  IrisA11yProps;

type IrisElementProps<DOMElement = HTMLDivElement> = {
  alt?: string;
  as?: never;
  children?: ReactNode;
  className?: string;
  data?: string;
  debug?: boolean;
  disabled?: boolean;
  forwardRef?: Ref<DOMElement>;
  hidden?: boolean;
  id?: string;
  lang?: string;
  name?: string;
  style?: CSSProperties;
  tabIndex?: number;
  theme?: IrisTheme;
  title?: string;
  test?: 'foo';
};

type IrisEventProps<DOMElement = HTMLDivElement> = {
  onBlur?: FocusEventHandler<DOMElement>;
  onClick?: MouseEventHandler<DOMElement>;
  onFocus?: FocusEventHandler<DOMElement>;
  onMouseEnter?: MouseEventHandler<DOMElement>;
  onMouseLeave?: MouseEventHandler<DOMElement>;
};

type IrisA11yProps = {
  'aria-activedescendant'?: string;
  'aria-atomic'?: boolean | 'false' | 'true';
  'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both';
  'aria-busy'?: boolean | 'false' | 'true';
  'aria-checked'?: boolean | 'false' | 'mixed' | 'true';
  'aria-colcount'?: number;
  'aria-colindex'?: number;
  'aria-colspan'?: number;
  'aria-controls'?: string;
  'aria-current'?:
    | boolean
    | 'false'
    | 'true'
    | 'page'
    | 'step'
    | 'location'
    | 'date'
    | 'time';
  'aria-describedby'?: string;
  'aria-details'?: string;
  'aria-disabled'?: boolean | 'false' | 'true';
  'aria-dropeffect'?:
    | 'none'
    | 'copy'
    | 'execute'
    | 'link'
    | 'move'
    | 'popup';
  'aria-errormessage'?: string;
  'aria-expanded'?: boolean | 'false' | 'true';
  'aria-flowto'?: string;
  'aria-grabbed'?: boolean | 'false' | 'true';
  'aria-haspopup'?:
    | boolean
    | 'false'
    | 'true'
    | 'menu'
    | 'listbox'
    | 'tree'
    | 'grid'
    | 'dialog';
  'aria-hidden'?: boolean | 'false' | 'true';
  'aria-invalid'?:
    | boolean
    | 'false'
    | 'true'
    | 'grammar'
    | 'spelling';
  'aria-keyshortcuts'?: string;
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-level'?: number;
  'aria-live'?: 'off' | 'assertive' | 'polite';
  'aria-modal'?: boolean | 'false' | 'true';
  'aria-multiline'?: boolean | 'false' | 'true';
  'aria-multiselectable'?: boolean | 'false' | 'true';
  'aria-orientation'?: 'horizontal' | 'vertical';
  'aria-owns'?: string;
  'aria-placeholder'?: string;
  'aria-posinset'?: number;
  'aria-pressed'?: boolean | 'false' | 'mixed' | 'true';
  'aria-readonly'?: boolean | 'false' | 'true';
  'aria-relevant'?:
    | 'additions'
    | 'additions text'
    | 'all'
    | 'removals'
    | 'text';
  'aria-required'?: boolean | 'false' | 'true';
  'aria-roledescription'?: string;
  'aria-rowcount'?: number;
  'aria-rowindex'?: number;
  'aria-rowspan'?: number;
  'aria-selected'?: boolean | 'false' | 'true';
  'aria-setsize'?: number;
  'aria-sort'?: 'none' | 'ascending' | 'descending' | 'other';
  'aria-valuemax'?: number;
  'aria-valuemin'?: number;
  'aria-valuenow'?: number;
  'aria-valuetext'?: string;

  role?:
    | 'alert'
    | 'alertdialog'
    | 'application'
    | 'article'
    | 'banner'
    | 'button'
    | 'checkbox'
    | 'columnheader'
    | 'combobox'
    | 'complementary'
    | 'contentinfo'
    | 'definition'
    | 'dialog'
    | 'directory'
    | 'document'
    | 'form'
    | 'grid'
    | 'gridcell'
    | 'group'
    | 'heading'
    | 'img'
    | 'link'
    | 'list'
    | 'listbox'
    | 'listitem'
    | 'log'
    | 'main'
    | 'marquee'
    | 'math'
    | 'menu'
    | 'menubar'
    | 'menuitem'
    | 'menuitemcheckbox'
    | 'menuitemradio'
    | 'navigation'
    | 'note'
    | 'option'
    | 'progressbar'
    | 'radio'
    | 'radiogroup'
    | 'scrollbar'
    | 'search'
    | 'slider'
    | 'spinbutton'
    | 'status'
    | 'tab'
    | 'tablist'
    | 'tabpanel'
    | 'textbox'
    | 'timer'
    | 'tooltip'
    | 'tree'
    | 'treegrid'
    | 'treeitem';
};

type ForbidAsProp = {
  /**
   * __IRIS__ : `as` prop is forbidden on Iris components due to highly undesirable problems
   * that arise when nesting multiple styled() components.
   *
   * * * *
   *
   */
  as?: never;
};

export interface Messages {
  error?: ReactNode;
  help?: ReactNode;
  pre?: ReactNode;
  success?: ReactNode;
  post?: ReactNode;
}

// Define default types for commonly used input props, but permit
// them to be overwritten when specified.
export type IrisInputProps<
  Props = {},
  DOMElement = HTMLInputElement
> = Override<
  {
    accept?: string;
    autocomplete?: boolean | 'on' | 'off'; // iris specific variation of native
    autoFocus?: boolean;
    capture?: boolean | string; // https://www.w3.org/TR/html-media-capture/#the-capture-attribute
    checked?: boolean;
    crossOrigin?: string;
    defaultChecked?: boolean;
    defaultValue?: string | string[] | number | boolean;
    label?: ReactNode;
    forwardRef?: Ref<DOMElement>;
    max?: number | string;
    maxLength?: number;
    messages?: Messages;
    min?: number | string;
    minLength?: number;
    mirror?: boolean;
    name?: string;
    onChange?: ChangeEventHandler<DOMElement>;
    onKeyDown?: KeyboardEventHandler<DOMElement>;
    onKeyUp?: KeyboardEventHandler<DOMElement>;
    pattern?: string;
    placeholder?: string;
    readOnly?: boolean;
    required?: boolean;
    src?: string;
    status?: 'negative' | 'positive';
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
      | 'toggle'
      | 'url'
      | 'week';
    value?: string | string[] | number | boolean;
  } & IrisProps<{}, DOMElement>,
  Props
>;

export type MinorComponent<Props = {}> = FunctionComponent<
  IrisProps<Props>
>;
