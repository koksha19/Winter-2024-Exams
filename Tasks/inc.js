// Increment all numbers in dictionary
'use strict';

const incrementNumbers = (numbersToIncrement) => {
  for (const key in numbersToIncrement) {
    if ((typeof numbersToIncrement[key]) === 'number') {
      numbersToIncrement[key]++;
    }
  }
  return numbersToIncrement;
};

module.exports = incrementNumbers;
