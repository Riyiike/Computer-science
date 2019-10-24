const uniqueSort = arr => {
  const breadCrumbs = {};
  for (let num of arr) {
    if (breadCrumbs[num]) {
      continue;
    } else {
      breadCrumbs[num] = num;
    }
  }

  arr = Object.values(breadCrumbs);

  return arr.sort((a, b) => a - b);
};

console.log(uniqueSort([4, 22, 5, 66, 9, 0, 1, 11]));
