// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk_v1(array, size) {
  // if array is empty return empty array
  if (array.length == 0) {
    return array;
  }

  // Create empty array called chunked
  const chunked = [];
  // Cycle over (array)
  for (let value of array) {
    // get the last element of chunked array
    const lastChunked = chunked[chunked.length - 1];
    // check if the last element in chunked is undefined (or)
    // check if the length of chunked is equal to (size)
    if (!lastChunked || lastChunked.length === size) {
      // Create a new sub array and put current value
      chunked.push([value]);
    } else {
      // else add the current element into the chunked sub array
      lastChunked.push(value);
    }
  }

  // return chunked
  return chunked;
}

const chunk = (array, size) => {
  // Create empty chunked array to store all chunked
  const chunked = [];
  // Create index variable
  let index = 0;
  // loop while index is less than (array)
  while (index < array.length) {
    // slice value out of array based on num of (size)
    const chunk = array.slice(index, index + size);
    // add the value to chunked
    chunked.push(chunk);
    // add size to index
    index += size;
  }

  // return chunked
  return chunked;
};

module.exports = chunk;
