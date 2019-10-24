const times10 = num => num * 10;

const memoize = cb => {
  const cache = {};

  return n => {
    if (cache[n]) {
      console.log('Fetching from cache...');
      return cache[n];
    }

    console.log('Calculating...');
    cache[n] = cb(n);
    return cache[n];
  };
};

const memoizedTimes10 = memoize(times10);
console.log(memoizedTimes10(9));
console.log(memoizedTimes10(9));
