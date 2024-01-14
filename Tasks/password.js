// Generate random password
'use strict';

const generatePassword = (alphabet, passwordLength) => {
  let password = '';
  for (let i = 0; i < passwordLength; i++) {
    const Index = Math.floor(Math.random() * alphabet.length);
    password += alphabet[Index];
  }
  return password;
};

module.exports = generatePassword;
