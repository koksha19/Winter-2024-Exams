// Find key by value
'use strict';

const findKey = (object, value) => {
  for (const key in object) {
    if (object[key] === value) return key;
  }
  return undefined;
};

module.exports = findKey;
