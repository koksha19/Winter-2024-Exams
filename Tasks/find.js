// Find key by value
'use strict';

const findKey = (object, ...rest) => {
  const value = rest.pop();
  for (const key in object) {
    if (object[key] === value) return key;
  }
  return undefined;
};

module.exports = findKey;
