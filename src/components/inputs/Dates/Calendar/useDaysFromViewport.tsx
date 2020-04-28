import { useMemo } from 'react';

export function useDaysFromViewport(viewport: Date) {
  return useMemo(() => {
    const days: Date[] = [];

    // Generate the date objects for each day of the month, and push them
    // into our array.
    const year = viewport.getFullYear();
    const month = viewport.getMonth();

    // Figure out how many days we need to pad before our calendar.
    // This is done by getting the current day of the week, and we presume
    // that we want to display a full week as aour first row. For each
    // padded integer, we push a new date object into our array.
    let dayLeftPad = viewport.getDay() - 1;

    while (dayLeftPad >= 0) {
      const date = new Date(year, month, 1);
      date.setDate(-dayLeftPad);
      days.push(date);
      dayLeftPad--;
    }

    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }

    // Figure out how many days we need to push in the end
    // Fills up grid up to 7 days * 6 weeks
    // This will create the same size calender for each month
    const lastDate = days[days.length - 1].getDate();
    const maxDays = 7 * 6;

    for (let i = 0; days.length < maxDays; i++) {
      const date = new Date(year, month, lastDate + i + 1);
      days.push(date);
    }

    return days;
  }, [viewport]);
}
