// Generate random password
'use strict';

const generatePassword = (alphabet, passwordLength) => {
  let password = '';
  for (let i = 0; i < passwordLength; i++) {
    password += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  return password;
};

module.exports = generatePassword;
