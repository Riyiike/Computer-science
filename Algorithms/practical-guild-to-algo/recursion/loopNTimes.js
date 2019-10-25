const loopNTimes = (n = 5) => {
  console.log('n====', n);
  if (n <= 1) {
    return 'Completed';
  }

  loopNTimes(n - 1);
};

console.log(loopNTimes(10));
