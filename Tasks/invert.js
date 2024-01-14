// Reverse an array, you can't use .reverse()
'use strict';

const invertArray = (arrayToInvert) => {
  const invertedArray = Object.keys(arrayToInvert);
  for (const element of invertedArray) {
    invertedArray[element] = arrayToInvert.pop();
  }
  return invertedArray;
};

module.exports = invertArray;
