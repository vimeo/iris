import { SupportedLocales } from './DateRange.types';

export const translate: Translations = {
  Apply: {
    en: 'Apply',
    es: 'Aplicar',
    'de-DE': 'Anwenden',
    'fr-FR': 'Appliquer',
    'ja-JP': '適用する',
    'pt-BR': 'Aplicar',
    'ko-KR': '적용',
  },
  Clear: {
    en: 'Clear',
    es: 'Borrar',
    'de-DE': 'Löschen',
    'fr-FR': 'Effacer',
    'ja-JP': 'クリア',
    'pt-BR': 'Limpar',
    'ko-KR': '비우기',
  },
  StartDate: {
    en: 'Start date',
    es: 'Fecha de inicio',
    'de-DE': 'Anfangsdatum',
    'fr-FR': 'Date de départ',
    'ja-JP': '開始日',
    'pt-BR': 'Data de início',
    'ko-KR': '시작 날짜',
  },
  EndDate: {
    en: 'End date',
    es: 'Fecha de finalización',
    'de-DE': 'Enddatum',
    'fr-FR': 'Date de fin',
    'ja-JP': '終了日',
    'pt-BR': 'Data de término:',
    'ko-KR': '종료 날짜',
  },
  Presets: {
    en: 'PRESETS',
    es: 'Preajustes',
    'de-DE': 'Voreinstellungen',
    'fr-FR': 'Préréglages',
    'ja-JP': '事前設定',
    'pt-BR': 'Predefinições',
    'ko-KR': '사전 설정',
  },
};

interface Translations {
  [key: string]: {
    [locale in SupportedLocales]: string;
  };
}
