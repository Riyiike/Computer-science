// Implement hash table

class HashTable {
  constructor(tableSize) {
    this._storage = [];
    this._tableSize = tableSize;
  }

  insert(key, value) {
    const index = this._hash(key, this._tableSize);

    if (!this._storage[index]) {
      this._storage[index] = [];
    } else {
      this._storage[index] = this._storage[index];
    }

    this._storage[index].push([key, value]);
  }

  _hash(str, n) {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
      sum += str.charCodeAt(i) * 3;
    }
    return sum % n;
  }

  retrieve(key) {
    const index = this._hash(key, this._tableSize);
    const arrayAtIndex = this._storage[index];

    if (arrayAtIndex) {
      for (let i = 0; i < arrayAtIndex.length; i++) {
        const keyValueArray = arrayAtIndex[i];
        if (key === keyValueArray[0] && arrayAtIndex.length > 1) {
          return arrayAtIndex;
        } else if (key === keyValueArray[0]) {
          return keyValueArray[1];
        }
      }
    }
  }
}

const myHT = new HashTable(25);
myHT.insert('a', 1);
myHT.insert('a', 2);
myHT.insert('b', 2);
console.log(myHT.retrieve('a'));
