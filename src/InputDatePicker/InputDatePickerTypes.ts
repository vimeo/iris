export interface InputDatePickerProps {
    dateFormatting?: (dateObject: Date) => string;
    initialDate?: Date;
    onBlur?: (event: React.FormEvent<HTMLInputElement>) => void;
    onChangeDate?: (dateObject: any) => void;
    label: string;
    id: string;
    datePickerOptions?: any;
}

export interface InputDatePickerState {
    currentDateObject: Date;
    focusShouldOpenMenu: boolean;
    formattedDate: string;
    menuHovered: boolean;
    shouldFocusNextUpdate: boolean;
    showDatePicker: boolean;
}
