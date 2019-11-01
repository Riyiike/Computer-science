const bubbleSort_v1 = arr => {
  // O(n)
  for (let i = 0; i < arr.length; i++) {
    // O(n)
    for (let j = i; j < arr.length; j++) {
      // O(1)
      if (arr[i] > arr[j]) {
        const temp = arr[i]; // O(1)
        arr[i] = arr[j]; // O(1)
        arr[j] = temp; // O(1)
      }
    }
  }

  return arr; // O(1)
  // O(T) => O(n) * O(n) + O(1) + O(1) + O(1) => O(3n^2) => Quadratic time
};

const bubbleSort = arr => {
  let swapped;
  do {
    swapped = false;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;

        swapped = true;
      }
    }
  } while (swapped);

  return arr;
};

console.log(
  bubbleSort_v1([300, 200, 5, 4, 5, 2, 9, 23, 0, 9, 1000, -1, 3, 2, 1])
);
