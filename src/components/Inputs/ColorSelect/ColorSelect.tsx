import React, {
  Component,
  ReactNode,
  ChangeEvent,
  MouseEventHandler,
} from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { ChromePicker } from 'react-color';
import { InputText } from '../InputText/InputText';
import { InputProps } from '../InputText/InputHelpers';
import { MenuPanel } from '../../MenuPanel/MenuPanel';
import * as COLORS from '../../../color';
import { KEY_CODES } from '../../../legacy';
import { VimeoStyleSettings } from '../../../legacy';

const defaultColorValue = COLORS.VimeoBlue;

export interface ColorSelectProps {
  /**
   * a string that is a legal hex value, including # (defaults to `"#00adef"`, Vimeo Blue)
   */
  defaultColor?: string;
  /**
   * Is the input disabled?  Defaults to false
   */
  disabled?: boolean;
  /**
   * Callback fires the color value changes
   */
  onChangeColor?: (hex: string) => void;
  /**
   * Field label
   */
  label?: ReactNode;
  /**
   * Translated label for "Reset" If not preset there will be no reset button.
   */
  resetButtonLabel?: string;
  /**
   * legal hex value other than default color value to reset to (defaults to defaultColor, see above)
   */
  resetColor?: string;
  /**
   * Use a number to override the Z-index on the menu panel that opens with the color picker.
   */
  menuPanelZIndexOverride?: number;
  /**
   * Add a unique id to the input.
   */
  id: string;

  onOpen?: () => void;

  onClose?: () => void;
}

export type ColorSelectCombinedProps = ColorSelectProps & InputProps;

export interface ColorSelectState {
  currentColor?: string;
  fieldValue?: string;
  focusShouldOpenMenu?: boolean;
  menuHovered?: boolean;
  showReset?: boolean;
  showColorPicker?: boolean;
  shouldFocusNextUpdate?: boolean;
}

const ComponentWrapperStyled = styled.div`
  position: relative;
`;

const ColorPickerPanelStyled = styled.div`
  margin-top: ${rem(8)};
`;

const ColorButtonWrapperStyled = styled.div`
  position: absolute;
  top: ${rem(8)};
  left: ${rem(8)};
`;

const ColorButtonStyled = styled.button<{
  onClick?: MouseEventHandler;
}>`
  width: ${rem(24)};
  height: ${rem(24)};
  margin: 0;
  padding: 0;

  border: 0;
  border-radius: ${rem(3)};
  background: transparent;
  box-shadow: inset 0 0 0 ${rem(1)} rgba(0, 0, 0, 0.2);

  cursor: pointer;

  appearance: none;

  &:focus {
    outline: 0;
  }
`;

const InputStyled = styled(InputText)`
  padding-left: ${rem(37)};
`;

const ResetButtonStyled = styled.a<{ isShowing: boolean }>`
  position: absolute;
  top: ${rem(30)};
  right: ${rem(8)};
  display: block;
  font-size: ${rem(12)};
  padding: ${rem(4)};
  color: ${VimeoStyleSettings.colors.typeColors.textColorMediumLight};
  text-decoration: none;
  background: ${COLORS.White};

  opacity: ${props => (props.isShowing ? '1' : '0')};
  transform: scale(${props => (props.isShowing ? 1 : 0.5)});
  transition: all 150ms ease;

  &:hover {
    color: ${VimeoStyleSettings.colors.typeColors.textColorDark};
  }
`;

export class ColorSelect extends Component<
  ColorSelectCombinedProps,
  ColorSelectState
> {
  static defaultProps = {
    defaultColor: defaultColorValue,
  };

  constructor(props: ColorSelectCombinedProps) {
    super(props);

    // make sure the color passed to props.defaultColor is valid, otherwise fallback to component default.
    const initialColor =
      props.defaultColor && this._isHexValid(props.defaultColor)
        ? props.defaultColor
        : defaultColorValue;

    this.state = {
      currentColor: initialColor,
      fieldValue: props.defaultColor,
      focusShouldOpenMenu: true,
      menuHovered: false,
      showReset: props.resetColor
        ? initialColor !== props.resetColor
        : false,
      showColorPicker: false,
      shouldFocusNextUpdate: false,
    };
  }

  state: ColorSelectState;

  componentDidUpdate() {
    // refocus the field on menu close, but don't open the menu again
    if (
      !this.state.showColorPicker &&
      this.state.shouldFocusNextUpdate
    ) {
      setTimeout(() => {
        this._setFocus();
      }, 250);
    }
  }

  props: ColorSelectCombinedProps;
  InputWrapper: HTMLElement;

  _bindCloseMenuListeners = () => {
    document.addEventListener('mousedown', this._handleDocumentClick);
    document.addEventListener('keydown', this._handleDocumentKeyDown);
  };

  _unbindCloseMenuListeners = () => {
    document.removeEventListener(
      'mousedown',
      this._handleDocumentClick,
    );
    document.removeEventListener(
      'keydown',
      this._handleDocumentKeyDown,
    );
  };

  _setFocus = () => {
    const thisInput = this.InputWrapper.querySelector(
      '[data-input-field]',
    );
    if (thisInput instanceof HTMLInputElement) {
      thisInput.focus();
    }

    this.setState({
      focusShouldOpenMenu: true,
      shouldFocusNextUpdate: false,
    });
  };

  _openMenu = () => {
    this.setState({
      showColorPicker: true,
      focusShouldOpenMenu: false,
      shouldFocusNextUpdate: true,
    });

    if (typeof this.props.onOpen === 'function') {
      this.props.onOpen();
    }
    this._bindCloseMenuListeners();
  };

  _closeMenu = () => {
    this.setState({
      showColorPicker: false,
    });

    if (typeof this.props.onClose === 'function') {
      this.props.onClose();
    }
    this._unbindCloseMenuListeners();
  };

  _handleBlur = event => {
    if (event.target && event.target.value) {
      const value = event.target.value;

      if (typeof value === 'string' && this._isHexValid(value)) {
        this.setState({
          showReset: this.props.resetColor
            ? value !== this.props.resetColor
            : value !== this.props.defaultColor,
          currentColor: value,
          showColorPicker: this.state.menuHovered,
        });
      } else {
        this.setState({
          showReset: false,
          fieldValue: this.props.defaultColor,
          currentColor: this.props.defaultColor,
        });
      }
    }

    if (typeof this.props.onBlur === 'function') {
      this.props.onBlur(event);
    }
  };

  _handleButtonClick = (event: React.MouseEvent<any>) => {
    this._openMenu();
    event.preventDefault();
  };

  _handleColorChange = (color: string) => {
    if (this.props.onChangeColor instanceof Function) {
      this.props.onChangeColor(color);
    }
  };

  _handleColorPickerUpdate = (color: {
    hex: string;
    rgb: {};
    hsl: {};
  }) => {
    this.setState({
      showReset: this.props.resetColor
        ? color.hex !== this.props.resetColor
        : color.hex !== this.props.defaultColor,
      currentColor: color.hex,
      fieldValue: color.hex,
    });

    this._handleColorChange(color.hex);
  };

  _handleDocumentClick = () => {
    if (!this.state.menuHovered) {
      this._closeMenu();
    }
  };

  _handleDocumentKeyDown = (e: KeyboardEvent) => {
    if (e.keyCode === KEY_CODES.esc || e.keyCode === KEY_CODES.tab) {
      this._closeMenu();
    }
  };

  _handleFocus = () => {
    if (
      !this.state.showColorPicker &&
      this.state.focusShouldOpenMenu
    ) {
      this._openMenu();
    }
  };

  _handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target && e.target.value) {
      const value = e.target.value;

      if (typeof value === 'string') {
        if (this._isHexValid(value)) {
          this._handleColorChange(value);
          this.setState({
            showReset: this.props.resetColor
              ? value !== this.props.resetColor
              : value !== this.props.defaultColor,
            currentColor: value,
            fieldValue: value,
          });
        } else {
          this.setState({
            fieldValue: value,
          });
        }
      }
    }
  };

  _handleHoverOnMenu = () => {
    this.setState({
      menuHovered: true,
    });
  };

  _handleHoverOutMenu = () => {
    this.setState({
      menuHovered: false,
    });
  };

  _handleResetClick = e => {
    e.preventDefault();
    const newColor = this.props.resetColor
      ? this.props.resetColor
      : this.props.defaultColor;
    this.setState({
      showReset: false,
      fieldValue: newColor,
      currentColor: newColor,
    });

    this._handleColorChange(newColor);
  };

  _isHexValid = (color: string) => {
    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color);
  };

  render() {
    const {
      id,
      onBlur, // eslint-disable-line no-unused-vars
      defaultColor, // eslint-disable-line no-unused-vars
      disabled = false,
      onChangeColor, // eslint-disable-line no-unused-vars
      label,
      menuPanelZIndexOverride,
      resetButtonLabel,
      ...filteredProps
    } = this.props;

    const ColorPickerPanelContent = (
      <ColorPickerPanelStyled
        onMouseEnter={this._handleHoverOnMenu}
        onMouseLeave={this._handleHoverOutMenu}
      >
        <ChromePicker
          color={this.state.currentColor}
          onChangeComplete={this._handleColorPickerUpdate}
          disableAlpha
        />
      </ColorPickerPanelStyled>
    );
    const ColorButton = (
      <ColorButtonWrapperStyled>
        <MenuPanel
          alignment="left"
          menuContent={ColorPickerPanelContent}
          size="md"
          isShowing={this.state.showColorPicker}
          isControlled
          zIndexOverride={menuPanelZIndexOverride}
        >
          <ColorButtonStyled
            style={{ backgroundColor: this.state.currentColor }}
            type="button"
            onClick={!disabled && this._handleButtonClick}
          />
        </MenuPanel>
      </ColorButtonWrapperStyled>
    );

    return (
      <ComponentWrapperStyled
        ref={div => {
          this.InputWrapper = div;
        }}
      >
        <InputStyled
          {...filteredProps}
          disabled={disabled}
          id={id}
          label={label}
          value={this.state.fieldValue}
          onChange={this._handleInputChange}
          size="md"
          preMessage={ColorButton}
          onBlur={!disabled && this._handleBlur}
          onFocus={!disabled && this._handleFocus}
          data-input-field
          autocomplete={false}
        />
        {resetButtonLabel && (
          <ResetButtonStyled
            href="#"
            isShowing={this.state.showReset}
            onClick={!disabled && this._handleResetClick}
          >
            {resetButtonLabel}
          </ResetButtonStyled>
        )}
      </ComponentWrapperStyled>
    );
  }
}
