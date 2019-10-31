const computeFactorial = num => {
  let result = 1;

  for (let i = 2; i <= num; i++) {
    result *= i;
  }

  return result;
};

console.log(computeFactorial(5));
