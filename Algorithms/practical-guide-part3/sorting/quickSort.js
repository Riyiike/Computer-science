const swap = (arr, i1, i2) => {
  const temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;

  return arr;
};

const partition = (arr, low, high) => {
  let pivot = arr[high];
  let pivotLocation = low;

  for (let i = pivotLocation; i < high; i++) {
    if (arr[i] < pivot) {
      swap(arr, pivotLocation, i);
      pivotLocation++;
    }
  }

  // Swap pivot to the proper position based on lesser or greater value
  swap(arr, pivotLocation, high);
  return pivotLocation;
};

const quickSort = (arr, low = 0, high = arr.length - 1) => {
  if (low < high) {
    const pivotLocation = partition(arr, low, high);
    // Invoke quickSort for left partition
    quickSort(arr, low, pivotLocation - 1);
    // Invoke quickSort for right partition
    quickSort(arr, pivotLocation + 1, high);
  }

  if (high - low === arr.length - 1) {
    return arr;
  }
};

console.log(quickSort([12, 4, 9, 2, 29, 11, -1, 0]));
