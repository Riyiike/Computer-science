const cache = {};
const coins = [10, 6, 11];

const makeChange = c => {
  if (coin in cache) {
    return cache[c];
  }

  let minCoins = -1;

  coins.forEach(coin => {
    if (c - coin >= 0) {
      let currMinCoins = makeChange(c - coin);
      if (minCoins === -1 || currMinCoins < minCoins) {
        minCoins = currMinCoins;
      }
    }
  });

  cache[c] = minCoins + 1;
  return cache[c];
};
