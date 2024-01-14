// Change double quotation to open or close quotation
'use strict';

const result = '';

const changeQuotes = (sentence) => {
  const res = [];
  let open = false;
  for (const char of sentence) {
    if (char === '"') {
      if (!open) {
        res.push('«');
        open = true;
      } else {
        res.push('»');
        open = false;
      }
    } else res.push(char);
  }
  return res.join(result);
};

module.exports = changeQuotes;
