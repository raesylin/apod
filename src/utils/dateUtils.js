import { isoDateFormat } from './constants';

const isoToIntlMonthMapping = {
  '01': 'Jan',
  '02': 'Feb',
  '03': 'Mar',
  '04': 'Apr',
  '05': 'May',
  '06': 'Jun',
  '07': 'Jul',
  '08': 'Aug',
  '09': 'Sep',
  10: 'Oct',
  11: 'Nov',
  12: 'Dec',
};

const isoMonthMapping = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

export const formatDateString = (dateToFormat = '', format = 'iso') => {
  if (typeof dateToFormat === 'string') {
    const isIsoFormat = dateToFormat.match(isoDateFormat);
    if (isIsoFormat) {
      const [year, month, date] = dateToFormat.split('-');

      if (format === 'intl') {
        const monthString = isoToIntlMonthMapping[month];
        const dateString = parseInt(date, 10);
        return `${dateString} ${monthString}, ${year}`;
      }
      return `${year}-${month}-${date}`;
    }
    return dateToFormat;
  }
  throw Error('Date format not supported');
};

export const formatDate = (date = new Date(), format = 'iso') => {
  if (date instanceof Date) {
    const year = date.getFullYear();
    const month = isoMonthMapping[date.getMonth()];
    const dateString = date.getDate().toString();

    if (format === 'intl') {
      const intlMonthString = isoToIntlMonthMapping[month];
      return `${dateString} ${intlMonthString}, ${year}`;
    }

    const isoDateString = dateString.length === 1 ? dateString.padStart('0') : dateString;
    return `${year}-${month}-${isoDateString}`;
  }
  return date.toString();
};

export const createDate = (isoDateString) => {
  const isIsoFormat = isoDateString.match(isoDateFormat);
  if (isIsoFormat) {
    const [year, month, date] = isoDateString.split('-');
    const monthRep = parseInt(month, 10) - 1;
    const dateRep = parseInt(date, 10);
    return new Date(year, monthRep, dateRep);
  }
  return new Date(isoDateString);
};
