const computeFactorial = num => {
  let result = 1;

  for (let i = 2; i <= num; i++) {
    console.log(`Factorial of ${result} * ${i} (${result * i})`);
    result *= i;
  }

  return result;
};

// computeFactorial(10);

const computeFactorialRecursively = num => {
  // Factorial can be get by
  //multiplying all preceding number by given value
  if (num < 1) {
    return num;
  }

  // base case: if number equals 1
  if (num === 1) {
    return 1;
  }

  // Multiply number by returning value of func - 1
  return num * computeFactorialRecursively(num - 1);
};

console.log(computeFactorialRecursively(-1));
