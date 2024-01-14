// Change double quotation to open or close quotation
'use strict';

const changeQuotes = (sentence) => {
  const result = [];
  let open = true;
  for (const char of sentence) {
    if (char === '"') {
      result.push(open ? '«' : '»');
      open = !open;
    } else result.push(char);
  }
  return result.join('');
};

module.exports = changeQuotes;
