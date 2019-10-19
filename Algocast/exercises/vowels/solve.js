// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const sanitizedString = str.replace(/[^\w]/g).toLowerCase();
  let totalVowels = 0;

  for (let char of sanitizedString) {
    if (vowels.includes(char)) {
      totalVowels += 1;
    }
  }

  return totalVowels;
}

module.exports = vowels;
