/**
 * Write a function recursiveMultiplier that takes
 * two arguments `arr` and `num`, and multiplies
 * each arr value by num and returns an array of the values
 */

const recursiveMultiplier = (arr, num) => {
  let index = 0;

  const multiplyArrValue = (array, multiplier) => {
    if (index < arr.length) {
      array[index] = array[index] * multiplier;
      index++;
      multiplyArrValue(array, multiplier);

      return array;
    }
  };

  return multiplyArrValue(arr, num);
};

console.log(recursiveMultiplier([5, 10, 20, 2, 4, 5], 2));
