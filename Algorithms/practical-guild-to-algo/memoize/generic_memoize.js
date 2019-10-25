const times10 = num => num * 10;

const memoize = cb => {
  const cache = {};

  return (...args) => {
    if (cache[args]) {
      console.log('Fetching from cache...');
      return cache[args];
    }

    console.log('Calculating...');
    cache[args] = cb(...args);
    return cache[args];
  };
};

const memoizedTimes10 = memoize(times10);
console.log(memoizedTimes10(9));
console.log(memoizedTimes10(9));
