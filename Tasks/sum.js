// Sum all numbers from an array
'use strict';

const sum = (list) => {
  let sum = 0;
  for (const element of list) {
    if (typeof element === 'number') {
      sum += element;
    }
  }
  return sum;
};

module.exports = sum;
