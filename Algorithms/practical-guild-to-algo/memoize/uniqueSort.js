const uniqueSort = arr => {
  // O(1)
  const cache = {};
  const result = [];
  for (let num of arr) {
    // O(n)
    if (cache[num]) {
      // o(1)
      continue;
    } else {
      cache[num] = true; // o(1)
      result.push(num);
    }
  }

  return result.sort((a, b) => a - b);
};

const uniqueSort_v2 = arr => {
  return Array.from(new Set(arr)).sort((a, b) => a - b);
};

console.log(uniqueSort([4, 22, 5, 66, 9, 0, 1, 11]));
