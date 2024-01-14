// Merge two dictionaries
'use strict';

const mergeTwoObjects = (firstObject, secondObject) => {
  return Object.assign({}, firstObject, secondObject);
};

module.exports = mergeTwoObjects;
