// Reverse an array, you can't use .reverse()
'use strict';

const invertArray = (arrayToInvert) => {
  const invertedArray = Object.keys(arrayToInvert);
  invertedArray.forEach((i) => {
    invertedArray[i] = arrayToInvert.pop();
  });
  return invertedArray;
};

module.exports = invertArray;
