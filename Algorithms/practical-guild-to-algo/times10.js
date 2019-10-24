const cache = {};

const times10_v1 = num => {
  const result = 10 * num;
  cache[result] = result;
  return result;
};

const memoTimes10_v2 = n => {
  if (cache[n]) {
    return cache[n];
  }

  return times10_v1(n);
};

const times10 = num => num * 10;
const memoTimes10 = n => {
  if (cache[n]) {
    console.log('Fetching from cache...');
    return cache[n];
  }

  console.log('Calculating results...');
  const result = times10(n);
  cache[n] = result;
  return result;
};

console.log(memoTimes10(9));
console.log(memoTimes10(9));
console.log(memoTimes10(9));
