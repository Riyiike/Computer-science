const mergeSort = arr => {
  if (arr.length < 2) {
    return arr;
  }

  const length = arr.length;
  const middle = Math.floor(length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle, length);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  return stitch(sortedLeft, sortedRight);
};

const stitch = (left, right) => {
  const results = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  // this could be written as
  //   return results.concat(left, right);
  //   return [...results, ...left, ...right];

  while (left.length) {
    results.push(left.shift());
  }

  while (right.length) {
    results.push(right.shift());
  }

  return results;
};

console.log(mergeSort([10, 4, 9, 20, 1, 3, 4]));
