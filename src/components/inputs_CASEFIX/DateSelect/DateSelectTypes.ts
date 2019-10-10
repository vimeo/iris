export interface DateSelectProps {
  dateFormatting?: (dateObject: Date) => string;
  initialDate?: Date;
  onBlur?: (event: React.FormEvent<HTMLInputElement>) => void;
  onChangeDate?: (dateObject: any) => void;
  label: string;
  id: string;
  datePickerOptions?: any;
}

export interface DateSelectState {
  currentDateObject: Date;
  focusShouldOpenMenu: boolean;
  formattedDate: string;
  menuHovered: boolean;
  shouldFocusNextUpdate: boolean;
  showDatePicker: boolean;
}
