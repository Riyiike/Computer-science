const logNumbers_v1 = (start, end) => {
  if (start < end) {
    logNumbers(start + 1, end);
  }

  console.log(start);
};

const logNumbers = (start, end) => {
  const logNextValue = i => {
    console.log(i);

    if (i < end) {
      logNextValue(i + 1);
    }
  };

  logNextValue(start);
};

logNumbers(1, 5);
