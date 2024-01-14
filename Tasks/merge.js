// Merge two dictionaries
'use strict';

const mergeTwoObjects = (firstObject, secondObject) => {
  const mergedObject = {};
  for (const key of Object.keys(firstObject)) {
   mergedObject[key] = firstObject[key];
  }
  for (const key of Object.keys(secondObject)) {
    mergedObject[key] = secondObject[key];
  }
  return mergedObject;
};

module.exports = mergeTwoObjects;
