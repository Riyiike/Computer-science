// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome_1(str) {
  let reversed = '';

  for (character of str) {
    reversed = character + reversed;
  }

  return str === reversed;
}

const palindrome_2 = str => {
  return (
    str
      .split('')
      .reverse()
      .join('') === str
  );
};

const palindrome = str => {
  return str
    .split('')
    .every((character, i) => character === str[str.length - i - 1]);
};

module.exports = palindrome;
