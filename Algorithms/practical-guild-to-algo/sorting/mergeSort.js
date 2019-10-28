const merge = (left, right) => {
  // Declare a variable to store merge (left, right)
  const result = [];

  //   let indexLeft = 0;
  //   let indexRight = 0;

  // Cycle over left and right sorted array
  //   while (indexLeft < left.length && indexRight < right.length) {
  //     if (left[indexLeft] < right[indexRight]) {
  //       result.push(left[indexLeft]);
  //       indexLeft++;
  //     } else {
  //       result.push(right[indexRight]);
  //       indexRight++;
  //     }
  //   }

  //   return [...result, ...left, ...right];
  //   return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));

  /* More compact solution */
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return [...result, ...left, ...right];
};

const mergeSort = array => {
  // Base case: if array length is less than 2
  //return array
  if (array.length < 2) {
    return array;
  }
  // Get the index of the middle value from the arr
  const middle = Math.floor(array.length / 2);
  // Slice the the array from 0 up to middle: middle not inclusive
  const left = array.slice(0, middle);

  // Slice the the array from middle up to end
  const right = array.slice(middle);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // pass slice array to merge
  // return merge
  return merge(sortedLeft, sortedRight);
};

console.log(mergeSort([90, 30, 50, 1, 0, 4, 8, 200, 30]));
