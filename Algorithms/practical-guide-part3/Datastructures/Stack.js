// Implement basic stack data structure
// Note: Stack => last in first out (LIFO)
class Stack {
  constructor() {
    this._storage = {};
    this._length = 0;
  }

  push(data) {
    // Check if data is provided
    if (data !== undefined) {
      // insert data into storage using the length
      this._storage[this._length] = data;
      // Increase length by 1
      this._length++;

      return this._length;
    }
  }

  pop() {
    if (this._length) {
      const removedItem = this._storage[this._length - 1];
      delete this._storage[this._length - 1];
      this._length--;

      return removedItem;
    }
  }

  size() {
    return this._length;
  }

  peek() {
    return this._storage[this._length - 1];
  }
}

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);

console.log(myStack.peek());

myStack.pop();

console.log(myStack);

module.exports = Stack;
