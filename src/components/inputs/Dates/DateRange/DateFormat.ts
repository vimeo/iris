const DATE_FORMAT_OPTIONS = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
} as const;

export const DD_MM_YY_FORMAT = 'DD.MM.YYYY';
const DEFAULT_LANGUAGE = 'default';

export const convertDDMMYYYToMMDDYYYY = (date: string) => {
  const dateParts = date.split('.');

  return `${dateParts[2]}.${dateParts[1]}.${dateParts[0]}`;
};

const formatter = (() => {
  try {
    return (window as any).Intl
      ? new Intl.DateTimeFormat(DEFAULT_LANGUAGE, DATE_FORMAT_OPTIONS)
      : null;
  } catch (e) {
    return null;
  }
})();

export function formatDate(date: Date): string {
  const formattedDate = formatter
    ? formatter.format(date)
    : date.toLocaleDateString();

  return formattedDate;
}

export function getDateFormat() {
  const sample = formatDate(new Date(1970, 11, 31));

  let mm = 0;
  let dd = 1;
  let yy = 2;
  const mi = sample.indexOf('12');
  const di = sample.indexOf('31');
  const yi = sample.indexOf('1970');

  // Put fields in format order. Otherwise fall back to mm/dd/yyyy
  if (yi >= 0 && mi >= 0 && di >= 0) {
    mm = (mi > yi ? 1 : 0) + (mi > di ? 1 : 0);
    dd = (di > yi ? 1 : 0) + (di > mi ? 1 : 0);
    yy = (yi > mi ? 1 : 0) + (yi > di ? 1 : 0);
  }

  const r = [];
  r[yy] = 'YYYY';
  r[mm] = 'MM';
  r[dd] = 'DD';

  const match = sample.match(/[-.] ?/);
  return r.join(match ? match[0] : '/');
}

export function getDateFormatRegex(format: string) {
  let f: string;
  // If there is no formatter we can't garuntee a correct regex
  // Allow any input - for ie11
  if (formatter) {
    f = format.replace('DD', '\\d{2}');
    f = f.replace('MM', '\\d{2}');
    f = f.replace('YYYY', '\\d{4}');
  } else {
    f = '.*';
  }
  return new RegExp(`^${f}$`);
}

export function getMonthFromDate(dateObj: Date) {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return monthNames[dateObj.getMonth()];
}
