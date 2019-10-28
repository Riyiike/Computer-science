/* Write a function makeChange, that returns an integer 
that represents the least number of coins that add up to an
amount where the amount is always divisible by 5*/
// coin values: 5, 10, 25

const makeChange = (coins, amount) => {
  coins.sort((a, b) => a - b);

  let coinTotal = 0;
  let i = 0;

  while (amount > 0) {
    if (coins[i] <= amount) {
      amount -= coins[i];
      coinTotal++;
    } else {
      i++;
    }
  }

  return coinTotal;
};

console.log(makeChange([1, 6, 10], 12));
