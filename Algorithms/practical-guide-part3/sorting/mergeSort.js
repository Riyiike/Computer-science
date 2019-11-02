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
  if (arr.length === 1) {
    return arr;
  }

  const arrLength = arr.length;
  const pivot = Math.floor(arrLength / 2);
  const left = arr.slice(0, pivot);
  const right = arr.slice(pivot);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  const result = merge(sortedLeft, sortedRight);

  return result;
};

console.log(mergeSort([9, 4, 1, 2, 8, 0, -10, -1, 90, 20]));
