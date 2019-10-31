const loopNTimes = n => {
  console.log(`n is currently ${n}`);

  if (n <= 1) {
    return 'complete';
  }

  const result = loopNTimes(n - 1);
  console.log(result);

  return result;
};

console.log(loopNTimes(10));
