const Stack = require('./Stack');

class MinStack {
  constructor(capacity) {
    this._capacity = capacity;
    this._length = 0;
    this._storage = {};
    this._min = new Stack();
  }

  push(value) {
    if (this._length < this._capacity) {
      if (this._min.peek() < value) {
        this._min.push(this._min.peek());
      } else {
        this._min.push(value);
      }

      this._storage[this._length++] = value;

      return this._length;
    }

    return 'Max capacity already reach. Remove element before adding new one.';
  }

  pop() {
    if (this._length) {
      this._min.pop();
      const value = this._storage[--this._length];
      delete this._storage[--this._length];

      if (this._length < 0) {
        this._length = 0;
      }

      return value;
    }
  }

  peek() {
    return this._storage[--this._length];
  }

  size() {
    return this._length;
  }

  min() {
    return this._min.peek();
  }
}

const myMinStack = new MinStack(200);
myMinStack.push(1);
myMinStack.push(2);
myMinStack.push(3);
myMinStack.push(0);

console.log(myMinStack.peek());
console.log(myMinStack);
