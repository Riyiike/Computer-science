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
    return arr; // O(1)
  }

  const length = arr.length; // O(1)

  const pivot = Math.floor(length / 2); // O(1)
  const left = arr.slice(0, pivot); // N/A
  const right = arr.slice(pivot); // N/A

  const sortedLeft = mergeSort(left); // O(log n)
  const sortedRight = mergeSort(right); // O(log n)
  return merge(sortedLeft, sortedRight); // O(n)
};

console.log(mergeSort([-1, 9, 3, 8, 1, 4, 0, 2]));
