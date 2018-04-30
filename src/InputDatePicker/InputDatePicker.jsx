// @flow
import React from 'react';
import DateTime from 'react-datetime';
// $FlowFixMe
import InputText from '../InputText/InputText';
import MenuPanel from '../MenuPanel/MenuPanel';
import styles from './InputDatePicker.scss';
import KEY_CODES from '../globals/js/constants/KEY_CODES';

type Props = {
    dateFormatting?: (dateObject: Date) => string,
    initialDate?: Date,
    onBlur?: Function,
    onChangeDate?: (dateObject: Object) => void,
    label: string,
    id: string,
    datePickerOptions?: Object,
};

type State = {
    currentDateObject: Date,
    focusShouldOpenMenu: boolean,
    formattedDate: string,
    menuHovered: boolean,
    showDatePicker: boolean,
}

const inputDataAttribute = 'data-input-field';

class InputDatePicker extends React.Component {


    static defaultProps = {
        initialDate: new Date(),
    };

    constructor(props: Props) {
        super(props);
        const initialDateChecked = props.initialDate instanceof Date ? props.initialDate : new Date();

        this.state = {
            currentDateObject: initialDateChecked,
            showDatePicker: false,
            formattedDate: this._getFormattedDate(initialDateChecked),
            menuHovered: false,
            focusShouldOpenMenu: true,
        };
    }

    state: State;

    componentDidUpdate = () => {
        // refocus the field on menu close, but don't open the menu again
        if (!this.state.showDatePicker && this.state.shouldFocusNextUpdate) {
            setTimeout(() => {
                this._setFocus();
            }, 250);
        }
    }

    props: Props;
    InputWrapper: HTMLElement;

    _bindCloseMenuListeners = () => {
        document.addEventListener('mousedown', this._handleDocumentClick);
        document.addEventListener('keydown', this._handleDocumentKeyDown);
    }

    _unbindCloseMenuListeners = () => {
        document.removeEventListener('mousedown', this._handleDocumentClick);
        document.removeEventListener('keydown', this._handleDocumentKeyDown);
    }

    _setFocus = () => {
        const thisInput = this.InputWrapper.querySelector('[' + inputDataAttribute + ']');

        if (thisInput instanceof HTMLInputElement) {
            thisInput.focus();
        }

        this.setState({
            focusShouldOpenMenu: true,
        });
    }

    _openMenu = () => {
        this.setState({
            showDatePicker: true,
            focusShouldOpenMenu: false,
        });

        this._bindCloseMenuListeners();
    }

    _closeMenu = () => {
        this.setState({
            showDatePicker: false,
            focusShouldOpenMenu: true,
        });

        this._unbindCloseMenuListeners();
    }

    _getFormattedDate = (dateObject: Date) => {

        if (typeof this.props.dateFormatting === 'function') {
            return this.props.dateFormatting(dateObject);
        }

        const formattedDate = `${dateObject.getMonth() + 1}/${dateObject.getDate()}/${dateObject.getFullYear()}`;

        return formattedDate;
    }

    _handleBlur = (e: Event) => {
        if (e.target && e.target.value) {
            const value = e.target.value;

            if (typeof value === 'string') {
                this.setState({
                    showDatePicker: this.state.menuHovered,
                    focusShouldOpenMenu: !this.state.menuHovered,
                });

                this._updateDateData(value);
            }

        }

        if (typeof this.props.onBlur === 'function') {
            this.props.onBlur(e);
        }
    };

    _handleDateChange = (dateObject: Date) => {
        if (this.props.onChangeDate instanceof Function) {
            this.props.onChangeDate(dateObject);
        }
    }

    _handleDatePickerUpdate = (momentObject: Object) => {
        // momentObject is a MomentJS object here
        const dateObject = momentObject.toDate();

        this.setState({
            currentDateObject: dateObject,
            formattedDate: this._getFormattedDate(dateObject),
        });

        this._handleDateChange(dateObject);
    }

    _handleDocumentClick = (e: Event) => {
        // only close if the click wasn't the inpu

        const targetWasInput = e.target instanceof HTMLInputElement && e.target.attributes.getNamedItem(inputDataAttribute);

        if (!this.state.menuHovered && !targetWasInput) {
            this._closeMenu();
        }
    }

    _handleDocumentKeyDown = (e: Event) => {
        if (e.keyCode === KEY_CODES.esc || e.keyCode === KEY_CODES.tab) {
            this._closeMenu();
        }
    }

    _handleFocus = () => {
        if (!this.state.showDatePicker && this.state.focusShouldOpenMenu) {

            this._openMenu();
        }
    }

    _openIfClosed = () => {
        if (!this.state.showDatePicker) {
            this._openMenu();
        }
    }

    _handleInputChange = (e: Event) => {
        if (e.target && e.target.value) {
            const value = e.target.value;

            if (typeof value === 'string') {
                this._updateDateData(value);
            }
        }

        this._openIfClosed();
    }

    _handleHoverOnMenu = () => {
        this.setState({
            menuHovered: true,
        });
    }

    _handleHoverOutMenu = () => {
        this.setState({
            menuHovered: false,
        });
    }

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
        }
        else {
            this.setState({
                formattedDate: value,
            });
        }
    }

    render() {
        const {
            dateFormatting, // eslint-disable-line no-unused-vars
            datePickerOptions,
            id,
            onBlur, // eslint-disable-line no-unused-vars
            initialDate, // eslint-disable-line no-unused-vars
            onChangeDate, // eslint-disable-line no-unused-vars
            label,
            ...filteredProps
        } = this.props;

        const DatePickerPanelContent = (
            <div className={styles.DatePicker}
                onMouseEnter={this._handleHoverOnMenu}
                onMouseLeave={this._handleHoverOutMenu}
            >
            <DateTime
                {...datePickerOptions}
                input={false}
                onChange={this._handleDatePickerUpdate}
                timeFormat={false}
                value={this.state.currentDateObject}
                open={this.state.showDatePicker}
            />
        </div>
        );
        const DateButton = (
            <div className={styles.DateTriggerWrapper}>
                <MenuPanel
                    className={styles.ButtonMenu}
                    alignment="left"
                    menuContent={DatePickerPanelContent}
                    size="lg"
                    isShowing={this.state.showDatePicker}
                    isControlled
                >
                    <span className={styles.DateTrigger}/>
                </MenuPanel>
            </div>
        );

        return (
            <div
                ref={(div)=>{
                    this.InputWrapper = div
    ;
                }}
            >
                <InputText
                    {...filteredProps}
                    id={id}
                    label={label}
                    className={styles.Input}
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

InputDatePicker.displayName = 'InputDatePicker';
export default InputDatePicker;
