// Filter array by type name
'use strict';

const filterArray = (T, t) => {
  const remove = [];
  for (const C of T) {
    const x = T.indexOf(C);
    if (typeof T[x] !== t) {
      remove.unshift(x);
    }
  }
  for (const x of remove) T.splice(x, 1);
  return T;
};

module.exports = filterArray;
