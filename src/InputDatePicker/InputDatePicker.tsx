import React, { Component } from 'react';
import {
    InputDatePickerProps,
    InputDatePickerState,
} from './InputDatePickerTypes';
import {
    DateTriggerStyled,
    DateTriggerWrapperStyled,
    DatePickerWrapperStyled,
} from './InputDatePickerStyled';
import DateTime from 'react-datetime';
import { InputText } from '../InputText/InputText';
import { InputTextProps } from '../InputText/InputText';
import { MenuPanel } from '../MenuPanel/MenuPanel';
import { KEY_CODES } from '../globals/js/constants/KEY_CODES';
import { Moment } from 'moment';

const inputDataAttribute = 'data-input-field';

export class InputDatePicker extends Component<
    InputDatePickerProps & InputTextProps & React.HTMLProps<HTMLInputElement>,
    InputDatePickerState
> {
    static defaultProps = {
        initialDate: new Date(),
    };

    constructor(props) {
        super(props);
        const initialDateChecked =
            props.initialDate instanceof Date ? props.initialDate : new Date();

        this.state = {
            currentDateObject: initialDateChecked,
            showDatePicker: false,
            focusShouldOpenMenu: true,
            formattedDate: this._getFormattedDate(initialDateChecked),
            menuHovered: false,
            shouldFocusNextUpdate: false,
        };
    }

    state: InputDatePickerState;

    componentDidUpdate() {
        // refocus the field on menu close, but don't open the menu again
        if (!this.state.showDatePicker && this.state.shouldFocusNextUpdate) {
            setTimeout(() => {
                this._setFocus();
            }, 250);
        }
    }

    props: InputDatePickerProps &
        InputTextProps &
        React.HTMLProps<HTMLInputElement>;
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
        const thisInput = this.InputWrapper.querySelector(
            '[' + inputDataAttribute + ']',
        );

        if (thisInput instanceof HTMLInputElement) {
            thisInput.focus();
        }

        this.setState({
            focusShouldOpenMenu: true,
        });
    };

    _openMenu = () => {
        this.setState({
            showDatePicker: true,
            focusShouldOpenMenu: false,
        });

        this._bindCloseMenuListeners();
    };

    _closeMenu = () => {
        this.setState({
            showDatePicker: false,
            focusShouldOpenMenu: true,
        });

        this._unbindCloseMenuListeners();
    };

    _getFormattedDate = (dateObject: Date) => {
        if (typeof this.props.dateFormatting === 'function') {
            return this.props.dateFormatting(dateObject);
        }

        const formattedDate = `${dateObject.getMonth() +
            1}/${dateObject.getDate()}/${dateObject.getFullYear()}`;

        return formattedDate;
    };

    _handleBlur = (event: React.FormEvent<HTMLInputElement>) => {
        const eventTarget = event.target as HTMLInputElement;

        if (eventTarget && eventTarget.value) {
            const value = eventTarget.value;

            if (typeof value === 'string') {
                this.setState({
                    showDatePicker: this.state.menuHovered,
                    focusShouldOpenMenu: !this.state.menuHovered,
                });

                this._updateDateData(value);
            }
        }

        if (typeof this.props.onBlur === 'function') {
            this.props.onBlur(event);
        }
    };

    _handleDateChange = (dateObject: Date) => {
        if (this.props.onChangeDate instanceof Function) {
            this.props.onChangeDate(dateObject);
        }
    };

    _handleDatePickerUpdate = (momentObject: Moment) => {
        // momentObject is a MomentJS object here
        const dateObject = momentObject.toDate();

        this.setState({
            currentDateObject: dateObject,
            formattedDate: this._getFormattedDate(dateObject),
        });

        this._handleDateChange(dateObject);
    };

    _handleDocumentClick = (event: MouseEvent) => {
        // only close if the click wasn't the inpu

        const targetWasInput =
            event.target instanceof HTMLInputElement &&
            event.target.attributes.getNamedItem(inputDataAttribute);

        if (!this.state.menuHovered && !targetWasInput) {
            this._closeMenu();
        }
    };

    _handleDocumentKeyDown = (event: KeyboardEvent) => {
        if (
            event.keyCode === KEY_CODES.esc ||
            event.keyCode === KEY_CODES.tab
        ) {
            this._closeMenu();
        }
    };

    _handleFocus = () => {
        if (!this.state.showDatePicker && this.state.focusShouldOpenMenu) {
            this._openMenu();
        }
    };

    _openIfClosed = () => {
        if (!this.state.showDatePicker) {
            this._openMenu();
        }
    };

    _handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
        const eventTarget = event.target as HTMLInputElement;

        if (eventTarget && eventTarget.value) {
            const value = eventTarget.value;

            if (typeof value === 'string') {
                this._updateDateData(value);
            }
        }

        this._openIfClosed();
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

    _isDateValid = (date: string) => {
        const d = new Date(date);
        return d && d.getTime && !isNaN(d.getTime());
    };

    _updateDateData = (value: string) => {
        if (this._isDateValid(value)) {
            const dateObject = new Date(value);

            this._handleDateChange(dateObject);

            this.setState({
                currentDateObject: dateObject,
                formattedDate: value,
            });
        } else {
            this.setState({
                formattedDate: value,
            });
        }
    };

    render() {
        const {
            children,
            dateFormatting,
            datePickerOptions,
            id,
            onBlur,
            initialDate,
            onChangeDate,
            label,
            ...filteredProps
        } = this.props;

        const DatePickerPanelContent = (
            <div
                onMouseEnter={this._handleHoverOnMenu}
                onMouseLeave={this._handleHoverOutMenu}
            >
                <DatePickerWrapperStyled>
                    <DateTime
                        {...datePickerOptions}
                        input={false}
                        onChange={this._handleDatePickerUpdate}
                        timeFormat={false}
                        value={this.state.currentDateObject}
                        open={this.state.showDatePicker}
                    />
                </DatePickerWrapperStyled>
            </div>
        );
        const DateButton = (
            <DateTriggerWrapperStyled>
                <MenuPanel
                    alignment="left"
                    menuContent={DatePickerPanelContent}
                    size="lg"
                    isShowing={this.state.showDatePicker}
                    isControlled
                >
                    <DateTriggerStyled />
                </MenuPanel>
            </DateTriggerWrapperStyled>
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
                    value={this.state.formattedDate}
                    isInline
                    onChange={this._handleInputChange}
                    size="md"
                    preMessage={DateButton}
                    onBlur={this._handleBlur}
                    onFocus={this._handleFocus}
                    data-input-field
                />
            </div>
        );
    }
}
