const merge = (sortedLeft, sortedRight) => {
  const result = [];

  while (sortedLeft.length && sortedRight.length) {
    if (sortedLeft[0] > sortedRight[0]) {
      result.push(sortedRight.shift());
    } else {
      result.push(sortedLeft.shift());
    }
  }

  return [...result, ...sortedLeft, ...sortedRight];
};

const mergeSort = arr => {
  // Note: the passed in array must be a sorted array
  if (arr.length < 2) {
    return arr;
  }

  const length = arr.length;

  const pivot = Math.floor(length / 2);
  const left = arr.slice(0, pivot);
  const right = arr.slice(pivot);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);
  return merge(sortedLeft, sortedRight);
};

console.log(mergeSort([-1, 9, 3, 8, 1, 4, 0, 2]));
