const swap = (arr, i1, i2) => {
  const temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
};

const selectionSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    let smallest = i;

    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[smallest]) {
        smallest = j;
      }
    }

    // Note: not adaptive and not stable
    swap(arr, i, smallest);
  }

  return arr;
};

console.log(selectionSort([1, 2, 3, 4]));
