const joinElements = (array, joinString) => {
  const recurse = (index, resultSoFar) => {
    resultSoFar += array[index];

    if (index === array.length - 1) {
      return resultSoFar;
    } else {
      return recurse(index + 1, resultSoFar + joinString);
    }
  };

  return recurse(0, '');
};

// console.log(joinElements(['s', 'cr', 't cod', ' :) :)'], 'e'));

const joinElementsIteratively = (array, joinString) => {
  let result = '';
  for (let i = 0; i < array.length; i++) {
    if (i < array.length - 1) {
      result += array[i] + joinString;
    } else {
      result += array[i];
    }
  }

  return result;
};

console.log(joinElementsIteratively(['s', 'cr', 't cod', ' :) :)'], 'e'));
