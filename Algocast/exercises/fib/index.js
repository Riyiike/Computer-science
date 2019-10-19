// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

/*Pure fibonacci without memoization(caching)*/

// function fib_v1(n) {
//   const result = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     const a = result[i - 1];
//     const b = result[i - 2];

//     result.push(a + b);
//   }

//   return result[n];
// }

// const fib = n => {
//   if (n < 2) {
//     return n;
//   }

//   return fib(n - 1) + fib(n - 2);
// };

// module.exports = fib;

const memoize = fn => {
  const cache = {};
  return (...args) => {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  };
};

let fib = n => {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
};

fib = memoize(fib);

module.exports = fib;
