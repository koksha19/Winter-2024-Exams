// Filter array by type name
'use strict';

const filterArray = (arrayToFilter, type) => {
  const filteredArray = [];
  for (const element of arrayToFilter) {
    if (typeof element === type) {
      filteredArray.push(element);
    }
  }
  return filteredArray;
};

module.exports = filterArray;
