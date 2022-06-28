export type Translation = {
  [locale in SupportedLocales]: TranslatedStrings;
};

export type TranslatedStrings = {
  [key in StringsToTranslate]: string | Months | DaysOfWeek;
};

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

type StringsToTranslate =
  | 'apply'
  | 'clear'
  | 'startDate'
  | 'endDate'
  | 'presets'
  | 'months'
  | 'daysAbbreviated';

type SupportedLocales =
  | 'en'
  | 'es'
  | 'de-DE'
  | 'fr-FR'
  | 'ja-JP'
  | 'pt-BR'
  | 'ko-KR';
