export type Translation = {
  [locale in SupportedLocales]: TranslatedStrings;
};

export type TranslatedStrings = {
  [key in StringsToTranslate]: string;
};

type StringsToTranslate =
  | 'apply'
  | 'clear'
  | 'startDate'
  | 'endDate'
  | 'presets';

type SupportedLocales =
  | 'en'
  | 'es'
  | 'de-DE'
  | 'fr-FR'
  | 'ja-JP'
  | 'pt-BR'
  | 'ko-KR';

export const translations: Translation = {
  en: {
    apply: 'Apply',
    clear: 'Clear',
    startDate: 'Start Date',
    endDate: 'End Date',
    presets: 'Presets',
  },
  es: {
    apply: 'Aplicar',
    clear: 'Borrar',
    startDate: 'Fecha de inicio',
    endDate: 'Fecha de finalización',
    presets: 'Preajustes',
  },
  'de-DE': {
    apply: 'Anwenden',
    clear: 'Löschen',
    startDate: 'Anfangsdatum',
    endDate: 'Enddatum',
    presets: 'Voreinstellungen',
  },
  'fr-FR': {
    apply: 'Appliquer',
    clear: 'Effacer',
    startDate: 'Date de départ',
    endDate: 'Date de fin',
    presets: 'Préréglage',
  },
  'ja-JP': {
    apply: '適用する',
    clear: 'クリア',
    startDate: '開始日',
    endDate: '終了日',
    presets: '事前設定',
  },
  'pt-BR': {
    apply: 'Aplicar',
    clear: 'Limpar',
    startDate: 'Data de início',
    endDate: 'Data de término',
    presets: 'Predefinições',
  },
  'ko-KR': {
    apply: '적용',
    clear: '비우기',
    startDate: '시작 날짜',
    endDate: '종료 날짜',
    presets: '사전 설정',
  },
};
