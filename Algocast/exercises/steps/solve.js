// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

/**
 * Input => positive integer N e.g -> 4
 * Output => console.log() => matrices of 4
 *
 * What i can see and think from output sample
 * => dimensional array defined by the number of given N
 *
 */

const steps_v1 = n => {
  // Iterate from 0 -> n
  for (let row = 0; row < n; row++) {
    // Create a variable called stair to hold the result
    let stair = '';
    // Iterate from 0 -> n
    for (let column = 0; column < n; column++) {
      // if current column is less or equal to row
      if (column <= row) {
        // Add '#' to stair
        stair += '#';
      } else {
        // else
        // Add ' ' empty space to stair
        stair += ' ';
      }
    }
    // Console log stair
    console.log(stair);
  }
};

const steps = (n, row = 0, stair = '') => {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }

  return steps(n, row, stair);
};

module.exports = steps;
