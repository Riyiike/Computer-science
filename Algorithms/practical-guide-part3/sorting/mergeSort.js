const merge = (sortedLeft, sortedRight) => {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < sortedLeft.length && rightIndex < sortedRight.length) {
    if (sortedLeft[leftIndex] <= sortedRight[rightIndex]) {
      result.push(sortedLeft[leftIndex]);
      leftIndex++;
    } else {
      result.push(sortedRight[rightIndex]);
      rightIndex++;
    }
  }

  return [
    ...result,
    ...sortedLeft.slice(leftIndex),
    ...sortedRight.slice(rightIndex)
  ];
};

const mergeSort = arr => {
  if (arr.length < 2) {
    return arr;
  }

  const arrLength = arr.length; // O(1)
  const pivot = Math.floor(arrLength / 2); // O(1)
  const left = arr.slice(0, pivot); // N/A
  const right = arr.slice(pivot); // N/A

  const sortedLeft = mergeSort(left); // O(log n)
  const sortedRight = mergeSort(right); // O(log n)

  const result = merge(sortedLeft, sortedRight); // O(n)

  return result; // O(1)
};

console.log(mergeSort([9, 4, 1, 2, 8, 0, -10, -1, 90, 20]));
