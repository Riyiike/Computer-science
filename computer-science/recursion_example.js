let wr = (msg = '---------') => {
  console.log(`\n ${msg}`);
};

function basicRecursion(max, current) {
  if (current > max) {
    return;
  }

  wr(current);

  basicRecursion(max, (current += 1));
}

basicRecursion(5, 1);
wr();
wr();
