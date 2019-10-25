const logNumbers = (start, end) => {
  console.log(`Iterating looping from ${start} until ${end}`);

  for (let i = start; i <= end; i++) {
    console.log('Hitting index...');
  }
};

// logNumbers(1, 5);

const logNumbersRecursively = (start, end) => {
  console.log(`Iterating looping from ${start} until ${end}`);

  const recurse = i => {
    console.log('Hitting index...', i);

    if (i < end) {
      recurse(i + 1);
    }
  };

  recurse(start);
};

logNumbersRecursively(1, 5);

const memoFnLoop = (i, end) => {
  console.log(`Looping from ${i} until ${end}`);

  if (i < end) {
    memoFnLoop(i + 1, end);
  }
};

// memoFnLoop(1, 10);
