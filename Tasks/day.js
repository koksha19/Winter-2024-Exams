// Get day number
'use strict';

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDays = (s) => {
  let index = 0;
  for (const day of weekDays) {
    if (s.startsWith(day.toLowerCase())) {
      return index + 1;
    }
    index++;
  }
  return -1;
};

module.exports = parseDays;
