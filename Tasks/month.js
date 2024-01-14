// Get month number
'use strict';

const MONTHS = [
  'jan', 'feb', 'mar', 'apr',
  'may', 'jun', 'jul', 'aug',
  'sep', 'oct', 'nov', 'dec',
];

const getMonthNumber = (month) => {
  for (const [index, monthName] of MONTHS.entries()) {
    if (month.toLowerCase().startsWith(monthName)) {
      return index + 1;
    }
  }
  return -1;
};

module.exports = getMonthNumber;
