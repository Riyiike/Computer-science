//Note: if duplicate value this will return first occurrence of the value
const linearSearch_v1 = (list, item) => {
  // cycle over list
  for (let value of list) {
    // compare list current element against item
    // if equals return item
    // else move to next item
    if (value === item) {
      return value;
    }
  }

  // return negative 1 (Not found)
  return -1;
};

const linearSearch = (list, item) => {
  let index = -1;
  list.forEach((listItem, i) => {
    if (listItem === item) {
      index = i;
    }
  });

  return index;
};

console.log(linearSearch([2, 6, 7, 90, 103, 90], 90));
