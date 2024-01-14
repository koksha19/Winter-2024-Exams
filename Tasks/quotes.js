// Change double quotation to open or close quotation
'use strict';

const result = '';

const changeQuotes = (sentence) => {
  const res = [];
  let open = true;
  for (const char of sentence) {
    if (char === '"') {
      if (open) {
        res.push('«');
        open = !open;
      } else {
        res.push('»');
        open = !open;
      }
    } else res.push(char);
  }
  return res.join(result);
};

module.exports = changeQuotes;
