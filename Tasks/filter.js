// Filter array by type name
'use strict';

const filterArray = (arrayToFilter, type) =>
  arrayToFilter.filter((element) => typeof element === type);

module.exports = filterArray;
