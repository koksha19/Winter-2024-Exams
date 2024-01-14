// Get month number
'use strict';

const MONTHS = [
  'jan', 'feb', 'mar', 'apr',
  'may', 'jun', 'jul', 'aug',
  'sep', 'oct', 'nov', 'dec',
];

const getMonthNumber = (month) => {
  let index = 0;
  for (const monthName of MONTHS) {
    if (month.toLowerCase().startsWith(monthName)) {
      return index + 1;
    }
    index++;
  }
  return -1;
};

module.exports = getMonthNumber;
