// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse_1(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return results;
}

function reverse_4(str) {
  let reversed = '';
  for (let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed;
  }

  return reversed;
}

function reverse_2(str) {
  return str
    .split('')
    .reverse()
    .join('');
}

const reverse_3 = str => {
  let reversed = '';

  for (let character of str) {
    reversed = character + reversed;
  }

  return reversed;
};

const reverse = str => {
  return str
    .split('')
    .reduce((reversed, character) => character + reversed, '');
};

module.exports = reverse;
