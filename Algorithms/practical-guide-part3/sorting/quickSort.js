const swap = (arr, i1, i2) => {
  if (arr[i1] === arr[i2]) {
    return arr;
  }

  const temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;

  return temp;
};

const partition = (arr, low, high) => {
  let pivot = arr[high];
  let pivotLocation = low;

  for (let i = pivotLocation; i < high; i++) {
    if (arr[i] <= pivot) {
      swap(arr, pivotLocation, i);
      pivotLocation++;
    }
  }

  swap(arr, pivotLocation, high);
  return pivotLocation;
};

const quickSort = (arr, low = 0, high = arr.length - 1) => {
  if (low < high) {
    const p = partition(arr, low, high);
    quickSort(arr, low, p - 1);
    quickSort(arr, p + 1, high);
  }

  if (high - low === arr.length - 1) {
    return arr;
  }
};

console.log(quickSort([12, 4, 9, 2, 29, 11, -1, 0]));
