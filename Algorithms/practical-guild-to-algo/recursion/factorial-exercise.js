const factorial = num => {
  if (num <= 1) {
    return 1;
  }

  return num * factorial(num - 1);
};

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

const result = memoize(factorial);
console.log(result(10));
console.log(result(10));
console.log(result(100));
