// --- Directions
// Given an array and chunk size, divide the array into many sub arrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

const chunk_v1 = (array, size) => {
  //Create empty array called chunked to store all chunks
  const chunked = [];
  // Create index to hold position of where to start chunking
  let index = 0;
  // Cycle over array while index is less to array length
  while (index < array.length) {
    // Slice array starting from index to index + size
    const chunk = array.slice(index, size + index);
    // Add the slice result into chunked variable
    chunked.push(chunk);

    // Add index to size
    index += size;
  }

  // return chunked
  return chunked;
};

const chunk = (array, size) => {
  // Create chunked array to store all chunks
  const chunked = [];

  // Cycle over array
  for (let value of array) {
    // Get last chunked sub array
    const lastChunk = chunked[chunked.length - 1];
    // Check if last chunk sub array is undefined (or)
    // Check if last chunk sub array length is equal to (size)
    if (!lastChunk || lastChunk.length === size) {
      // Add new sub array with current value
      chunked.push([value]);
    } else {
      // else
      // Add current value into last chunk element
      lastChunk.push(value);
    }
  }

  // return chunked array
  return chunked;
};

module.exports = chunk;
