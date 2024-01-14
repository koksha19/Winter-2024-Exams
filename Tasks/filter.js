// Filter array by type name
'use strict';

const filterArray = (arrayToFilter, type) => {
  const filteredArray = arrayToFilter.filter(
    (element) => typeof element === type,
  );
  return filteredArray;
};

module.exports = filterArray;
