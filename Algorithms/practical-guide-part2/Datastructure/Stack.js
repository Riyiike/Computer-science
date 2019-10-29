// Implement stack data structure

class Stack {
  constructor() {
    this._storage = {};
    this._length = 0;
  }

  push(value) {
    this._storage[this._length] = value;
    this._length++;
  }

  pop() {
    if (this._length) {
      const removedItem = this._storage[this._length - 1];
      delete this._storage[this._length];
      this._length--;
      return removedItem;
    }
  }

  peek() {
    if (this._length) {
      return this._storage[this._length - 1];
    }

    return [];
  }

  getLength() {
    return this._length;
  }
}

const myStack = new Stack();
myStack.push(10);
myStack.push(20);
myStack.push(30);
myStack.pop();
console.log(myStack);
