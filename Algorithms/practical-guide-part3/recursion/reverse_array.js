/**
 * Write a function `recursiveReverse` that takes an
 * array uses recursion to returns it's contents in reverse
 */

const recursiveReverse = list => {
  let result = [];
  let index = 0;

  const reverseArr = arr => {
    if (index < arr.length) {
      result[index] = arr[arr.length - 1 - index];
      index++;
      reverseArr(arr);
    }
  };

  reverseArr(list);

  return result;
};

console.log(recursiveReverse([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]));

const reverseArrayWithLoop = list => {
  let length = Math.floor(list.length / 2);
  for (let i = 0; i < length; i++) {
    const temp = list[i];
    list[i] = list[list.length - 1 - i];
    list[list.length - 1 - i] = temp;
  }

  return list;
};

// console.log(reverseArrayWithLoop([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]));
