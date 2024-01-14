// Increment all numbers in dictionary
'use strict';

const incrementNumbers = (numbersToIncrement) => {
  for (const key in numbersToIncrement) {
    if ((typeof numbersToIncrement[key]).charAt(0).toUpperCase() === 'N') {
      numbersToIncrement[key] = numbersToIncrement[key] + 1;
    }
  }
  return numbersToIncrement;
};

module.exports = incrementNumbers;
