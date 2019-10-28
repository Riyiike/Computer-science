// Task 1: Implement a bubble sort

const swap = (array, currIndex, nextIndex) => {
  let current = array[currIndex];
  let next = array[nextIndex];
  array[currIndex] = next;
  array[nextIndex] = current;
};

const bubbleSort = array => {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        swapped = true;
      }
    }
  } while (swapped);

  return array;
};

console.log(bubbleSort([90, 2000, 8, 9, 2, 5, 7, 1, 0, 10, 3]));
