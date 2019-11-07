/*
HASH TABLE
Collection of key-value pairs.
Map keys to values for efficient lookup.
Use an array as the underlying data structure.
Hash table should have a size - this will be used by the hashing function to determine what index to map the key to.
A hashing function is used to map the key to an integer, which is the index that the value is to be stored at.
Since our hashing function might map multiple keys to the same integer, we have to deal with collisions by creating buckets at each index of the storage array. These buckets can be arrays or linked lists.
*** Note:
ES6 includes a Map data structure. It differs from the JavaScript object because the keys can be any value (not just strings like for objects), there is a size property, and there is a guaranteed order (the insertion order).
Hash tables are also referred to as hash mapse or dictionaries.
*** Operations:
myMap.set(key, value)
=> myMap object
Store the key-value pair in the storage array.
If the key already exists, replace stored value with new value.
Use the hashing function to map the key to an integer and store the value at the corresponding index.
Account for the possibility of collisions.
myMap.get(key)
=> value associated with key, or undefined if none
myMap.has(key)
=> true/false depending on if a value has been associated with the key
myMap.delete(key)
=> true if a value was associated with the key
=> false if a value was never associated with the key
Remove any value associated to the key
myMap.count()
=> integer number of key/value pairs in hash table
myMap.forEach(callbackFn)
=> no returned value
Invokes callback function once for each key-value pair in the hash table
*** Exercises:
Resize the hash table:
- if the count becomes greater than 75% of the table size, double the table size and redistribute the key/value pairs
- if the count becomes less than 25% of the table size, cut the table size in half and redistribute the key/value pairs
Implement a hash table with a binary search tree.
*/

// Simple hashing function to use in your implementation
const simpleHash = (str, tableSize) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash += str.charCodeAt(i) * (i + 1);
  }
  return hash % tableSize;
};
// source: http://pmav.eu/stuff/javascript-hashing-functions/source.html

class HashTable {
  constructor(tableSize) {
    this._size = tableSize;
    this._storage = [];
    this._count = 0;
  }

  // This is a helper method that will help keep our code DRY
  // O(1)
  find(key) {
    const hash = simpleHash(key, this._size);

    this._storage[hash] = this._storage[hash] || [];
    const bucket = this._storage[hash];
    // iterate through bucket and check if key is present
    let match;
    let matchIndex;

    bucket.forEach((item, index) => {
      if (item.hasOwnProperty(key)) {
        match = item;
        matchIndex = index;
      }
    });

    return {
      match,
      bucket,
      matchIndex
    };
  }

  // O(n)
  resize(newSize) {
    const oldStorage = this._storage;
    this._size = newSize;
    this._count = 0;
    this._storage = [];

    oldStorage.forEach(bucket => {
      bucket.forEach(item => {
        let key = Object.keys(item)[0];
        this.set(key, item[key]);
      });
    });
  }

  // O(1)
  set(key, value) {
    const { match, bucket } = this.find(key);

    // if match exists, update value
    if (match) {
      match[key] = value;
    }
    // if not, add new object with key/value pair
    else {
      let newItem = { [key]: value };
      this._count++;
      bucket.push(newItem);
      if (this._count > 0.75 * this._size) {
        this.resize(2 * this._size);
      }
    }

    return this;
  }

  // O(1)
  get(key) {
    let { match } = this.find(key);
    // if key is found, match is an object {key: value}
    // if not, match is undefined
    return match && match[key];
  }

  has(key) {
    return !!this.find(key).match;
    // !! does type conversion to boolean
    // !!{} => true
    // !!undefined => false
  }

  // O(1)
  delete(key) {
    let match = this.find(key).match;
    if (match) {
      let bucket = this.find(key).bucket;
      let matchIndex = this.find(key).matchIndex;
      bucket.splice(matchIndex, 1);
      this._count--;
      if (this._count < 0.25 * this._size) {
        this.resize(0.5 * this._size);
      }
    }
    return !!match;
  }

  count() {
    return this._count;
  }

  forEach(callback) {
    this._storage.forEach(function(bucket) {
      bucket = bucket || [];
      bucket.forEach(function(item) {
        callback(item);
      });
    });
  }
}

const myMap = new HashTable(10);
console.log(myMap.set('key', 'value'), 'should be HT object');

console.log(myMap.get('key'), 'should be value');
// => value associated with key, or undefined if none

console.log(myMap.has('key'), 'should be true');
console.log(myMap.has('foo'), 'should be false');
// => true/false depending on if a value has been associated with the key

console.log(myMap.delete('key'), 'should be true');
console.log(myMap.delete('foo'), 'should be false');
console.log(myMap, 'should have no elements');
// => true if a value was associated with the key
// => false if a value was never associated with the key
// Remove any value associated to the key

console.log(myMap.count(), 'should be 0');
// => integer number of key/value pairs in hash table

console.log('count', myMap._count, 'should be 0');
console.log('size', myMap._size, 'should be 5');
myMap.set('foo', 'bar');
myMap.set('fooAgain', 'barAgain');
myMap.set('a', 1);
myMap.set('b', 2);
myMap.forEach(console.log);
console.log('count', myMap._count, 'should be 4');
console.log('size', myMap._size, 'should be 10 (doubled)');
myMap.delete('a');
console.log('count', myMap._count);
console.log('size', myMap._size);
myMap.delete('b');
console.log('count', myMap._count);
console.log('size', myMap._size, 'should be 5 (halved)');
