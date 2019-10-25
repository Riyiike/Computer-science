const binarySearch = (list, item) => {
  // Create a variable called min to store first element initial index
  let min = 0;
  // Create a variable called max to store last element index
  let max = list.length - 1;

  // Loop while min is less or equal max
  while (min <= max) {
    // get pivot if the list and divide by two
    let pivot = Math.floor((min + max) / 2);

    // check if current index value is equal item
    if (list[pivot] === item) {
      // return item
      return item;
    } else {
      // else
      // check if current index value is less than item
      if (list[pivot] < item) {
        // set min to equals pivot plus one
        min = pivot + 1;
      } else {
        // else
        // set max to equal pivot minus one
        max = pivot - 1;
      }
    }
  }
  // if item not found return negative one -1
  return -1;
};

console.log(binarySearch([200, 300, 500, 600, 800], 200));
