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

function steps(n) {
  // Note: We have 2 dimensional array
  // Iterate through n starting from 0 -> n (row)
  for (let row = 0; row < n; row++) {
    // Create initialize empty string variable called stair
    let stair = '';
    // Iterate through n starting from 0 -> n (column)
    for (let column = 0; column < n; column++) {
      // if the current column is equal or less than the current row
      if (column <= row) {
        // Add # to stair
        stair += '#';
      } else {
        // else
        // Add space to stair
        stair += ' ';
      }
    }
    // console.log stair
    console.log(stair);
  }
}

module.exports = steps;
