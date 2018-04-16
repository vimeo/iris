// @flow
import React from 'react';
import { ChromePicker } from 'react-color';
import InputText from '../InputText/InputText';
// $FlowFixMe flow hates TS!
import MenuPanel from '../MenuPanel/MenuPanel';
import styles from './InputColorPicker.scss';
import KEY_CODES from '../globals/js/constants/KEY_CODES';

const defaultColorValue = '#00adef';

type Props = {
    defaultColor?: string,
    onBlur?: Function,
    onChangeColor?: (hex: string) => void,
    label: string,
    menuPanelZIndexOverride: number,
    id: string,
};

class InputColorPicker extends React.Component {
    static defaultProps = {
        defaultColor: defaultColorValue,
        onChangeColor: (color: string) => {},
    };

    constructor(props: Props) {
        super(props);

        // make sure the color passed to props.defaultColor is valid, otherwise fallback to component default.
        const initialColor =
            props.defaultColor && this._isHexValid(props.defaultColor)
                ? props.defaultColor
                : defaultColorValue;

        this.state = {
            currentColor: initialColor,
            showColorPicker: false,
            fieldValue: props.defaultColor,
            menuHovered: false,
            focusShouldOpenMenu: true,
            shouldFocusNextUpdate: false,
        };
    }

    state: Object;

    componentDidUpdate = () => {
        // refocus the field on menu close, but don't open the menu again
        if (!this.state.showColorPicker && this.state.shouldFocusNextUpdate) {
            setTimeout(() => {
                this._setFocus();
            }, 250);
        }
    };

    props: Props;
    InputWrapper: HTMLElement;

    _bindCloseMenuListeners = () => {
        document.addEventListener('mousedown', this._handleDocumentClick);
        document.addEventListener('keydown', this._handleDocumentKeyDown);
    };

    _unbindCloseMenuListeners = () => {
        document.removeEventListener('mousedown', this._handleDocumentClick);
        document.removeEventListener('keydown', this._handleDocumentKeyDown);
    };

    _setFocus = () => {
        const thisInput = this.InputWrapper.querySelector('[data-input-field]');

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

        this._bindCloseMenuListeners();
    };

    _closeMenu = () => {
        this.setState({
            showColorPicker: false,
        });

        this._unbindCloseMenuListeners();
    };

    _handleBlur = (e: Event) => {
        if (e.target && e.target.value) {
            const value = e.target.value;

            if (typeof value === 'string' && this._isHexValid(value)) {
                this.setState({
                    currentColor: value,
                    showColorPicker: this.state.menuHovered,
                });
            }
            else {
                this.setState({
                    fieldValue: this.props.defaultColor,
                    currentColor: this.props.defaultColor,
                });
            }
        }

        if (typeof this.props.onBlur === 'function') {
            this.props.onBlur(e);
        }
    };

    _handleButtonClick = (e: Event) => {
        this._openMenu();
        e.preventDefault();
    };

    _handleColorChange = (color: string) => {
        if (this.props.onChangeColor instanceof Function) {
            this.props.onChangeColor(color);
        }
    };

    _handleColorPickerUpdate = (color: {
        hex: string,
        rgb: Object,
        hsl: Object,
    }) => {
        this.setState({
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

    _handleDocumentKeyDown = (e: Event) => {
        if (e.keyCode === KEY_CODES.esc || e.keyCode === KEY_CODES.tab) {
            this._closeMenu();
        }
    };

    _handleFocus = () => {
        if (!this.state.showColorPicker && this.state.focusShouldOpenMenu) {
            this._openMenu();
        }
    };

    _handleInputChange = (e: Event) => {
        if (e.target && e.target.value) {
            const value = e.target.value;

            if (typeof value === 'string') {
                if (this._isHexValid(value)) {
                    this._handleColorChange(value);
                    this.setState({
                        currentColor: value,
                        fieldValue: value,
                    });
                }
                else {
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

    _isHexValid = (color: string) => {
        return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color);
    };

    render() {
        const {
            id,
            onBlur, // eslint-disable-line no-unused-vars
            defaultColor, // eslint-disable-line no-unused-vars
            onChangeColor, // eslint-disable-line no-unused-vars
            label,
            menuPanelZIndexOverride,
            ...filteredProps
        } = this.props;

        const ColorPickerPanelContent = (
            <div
                className={styles.ColorPicker}
                onMouseEnter={this._handleHoverOnMenu}
                onMouseLeave={this._handleHoverOutMenu}
            >
                <ChromePicker
                    color={this.state.currentColor}
                    onChangeComplete={this._handleColorPickerUpdate}
                    disableAlpha
                />
            </div>
        );
        const ColorButton = (
            <div className={styles.ColorButtonWrapper}>
                <MenuPanel
                    className={styles.ButtonMenu}
                    alignment="left"
                    menuContent={ColorPickerPanelContent}
                    size="md"
                    isShowing={this.state.showColorPicker}
                    isControlled
                    zIndexOverride={menuPanelZIndexOverride}
                >
                    <button
                        style={{ backgroundColor: this.state.currentColor }}
                        className={styles.ColorButton}
                        type="button"
                        onClick={this._handleButtonClick}
                    />
                </MenuPanel>
            </div>
        );

        return (
            <div
                ref={div => {
                    this.InputWrapper = div;
                }}
            >
                <InputText
                    {...filteredProps}
                    id={id}
                    label={label}
                    className={styles.Input}
                    value={this.state.fieldValue}
                    isInline
                    onChange={this._handleInputChange}
                    size="md"
                    preMessage={ColorButton}
                    onBlur={this._handleBlur}
                    onFocus={this._handleFocus}
                    data-input-field
                />
            </div>
        );
    }
}

export default InputColorPicker;
