// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
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
      chunked[chunked.length - 1].push(value);
    }
  }

  // return chunked
  return chunked;
}

module.exports = chunk;
