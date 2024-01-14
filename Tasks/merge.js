// Merge two dictionaries
'use strict';

const mergeTwoObjects = (firstObject, secondObject) => {
  const mergedObject = [{}][0];
  for (const attribute_name in firstObject) {
    mergedObject[attribute_name] = firstObject[attribute_name];
  }
  for (const attribute_name in secondObject) {
    mergedObject[attribute_name] = secondObject[attribute_name];
  }
  return mergedObject;
};

module.exports = mergeTwoObjects;
