// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize_v1(str) {
  const words = [];

  for (let word of str.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(' ');
}

const capitalize = str => {
  // Pick the first character of the string and capitalize it
  let result = str[0].toUpperCase();
  // Cycle over array
  for (let i = 1; i < str.length; i++) {
    // if the character to the left is a space
    if (str[i - 1] === ' ') {
      // Capitalize the current character
      result += str[i].toUpperCase();
    } else {
      // else
      // add current character to the string
      result += str[i];
    }
  }

  // return result
  return result;
};

module.exports = capitalize;
