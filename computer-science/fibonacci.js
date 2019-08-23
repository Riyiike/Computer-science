let wr = (msg = '---------') => {
  console.log(`\n ${msg}`);
};

function fibonacci(n) {
  if (n <= 2) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

for (let i = 1; i <= 20; i++) {
  wr(fibonacci(i));
}
