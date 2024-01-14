// Change double quotation to open or close quotation

const result = '';

const changeQuotes = function (s) {
  const res = [];
  open = false;
  for (const c of s) {
    if (c === '"') {
      for (const i of c) {
        if (!open) {
          res.push('«');
          open = true;
        } else {
          res.push('»');
          open = false;
        }
      }
    } else {
      if (c !== '"') {
        for (const i of c) {
          res.push(i);
        }
      }
    }
  }
  return res.join(result);
};

module.exports = changeQuotes;
