const factorialRecurs = num => {
  // Base case
  if (num === 1) {
    return num;
  }

  return num * factorialRecurs(num - 1);
};

console.log(factorialRecurs(5));
