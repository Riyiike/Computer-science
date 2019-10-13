// --- Directions
// Check to see if two provided strings are anagrams of each other.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False
// Create a function that generate character map

/**
 *
 * First solution
 */

const generateCharMap = str => {
  // Declare a variable to store number of occurrence of each character
  const charMap = {};
  // Cycle over string
  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    if (charMap[char]) {
      charMap[char] = charMap[char] + 1;
    } else {
      charMap[char] = 1;
    }
  }

  // return character map
  return charMap;
};

// Create compare a function that compare two object
const compareCharMap = (objA, objB) => {
  if (Object.keys(objA).length !== Object.keys(objB).length) {
    return false;
  } else {
    for (let char in objA) {
      if (objA[char] !== objB[char]) {
        return false;
      }
    }
  }

  return true;
};

const anagrams_v1 = (stringA, stringB) => {
  let stringACharMap = generateCharMap(stringA);
  let stringBCharMap = generateCharMap(stringB);

  return compareCharMap(stringACharMap, stringBCharMap);
};

/**
 * Second solution
 */
const sanitizeString = str => {
  return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
};

const anagrams = (stringA, stringB) => {
  return sanitizeString(stringA) === sanitizeString(stringB);
};

module.exports = anagrams;
