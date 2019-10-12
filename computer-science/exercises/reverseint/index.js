// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
//   if (n == 0) {
//     return n;
//   }

//   const numberToString = n.toString().split('');

//   let reversed = '';

//   for (value of numberToString) {
//     reversed = value + reversed;
//   }

//   if (n < 0) {
//     return parseInt(reversed) * -1;
//   }

//   return parseInt(reversed);
// }

// const reverseInt = n => {
//   if (n === 0) {
//     return 0;
//   }

//   let reversed = n
//     .toString()
//     .split('')
//     .reduce((reversed, value) => {
//       return (reversed = value + reversed);
//     }, '');

//   if (n < 0) {
//     // Note: if positive value is multiplied by negative
//     // value the result will be negative value
//     return parseInt(reversed) * -1;
//   }

//   return parseInt(reversed);
// };

const reverseInt = n => {
  if (n == 0) {
    return n;
  }

  const reversed = n
    .toString()
    .split('')
    .reduce((reversed, value) => (reversed = value + reversed));

  return parseInt(reversed) * Math.sign(n);
};

module.exports = reverseInt;
