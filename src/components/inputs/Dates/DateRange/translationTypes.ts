export interface TranslatedStrings {
  apply: string;
  clear: string;
  startDate: string;
  endDate: string;
  presets: string;
  today: string;
  yesterday: string;
  custom: string;
  lastDays: (days: number) => string;
  nextDays: (days: number) => string;
  months: Months;
  daysAbbreviated: DaysOfWeek;
}

type Months = {
  [key in Month]: string;
};

type DaysOfWeek = {
  [key in Day]: string;
};

type Day =
  | 'sunday'
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday';

type Month =
  | 'january'
  | 'february'
  | 'march'
  | 'april'
  | 'may'
  | 'june'
  | 'july'
  | 'august'
  | 'september'
  | 'october'
  | 'november'
  | 'december';
