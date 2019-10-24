const times10 = num => num * 10;

const memoizedClosureTimes10 = () => {
  const cache = {};

  return n => {
    if (n in cache) {
      console.log('Fetching from cache...');
      return cache[n];
    }

    console.log('Calculating...');
    cache[n] = times10(n);
    return cache[n];
  };
};

const memoClosureTimes10 = memoizedClosureTimes10();

console.log(memoClosureTimes10(9));
console.log(memoClosureTimes10(9));
console.log(memoClosureTimes10(10));
console.log(memoClosureTimes10(10));
