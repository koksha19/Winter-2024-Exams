// Merge two dictionaries
'use strict';

const mergeTwoObjects = (firstObject, secondObject) => (
  { ...firstObject, ...secondObject }
);

module.exports = mergeTwoObjects;
