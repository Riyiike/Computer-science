// Stack implementation using string as a storage

class Stack {
  constructor() {
    this._storage = '';
  }

  push(value) {
    if (value) {
      this._storage += `${value}-`;
    }
  }

  pop() {
    if (this._storage.length) {
      const result = this._storage.replace('-', '');
      this._storage = this._storage.slice(0, this._storage.length - 2);

      return result;
    }
  }

  size() {
    const result = this._storage.replace('-', '');
    return result.length;
  }

  peek() {
    if (this._storage.length) {
      const result = this._storage.replace('-', '');
      return result[this._storage.length - 1];
    }
  }
}

const myStack = new Stack();

myStack.push('1');
myStack.push('2');
myStack.push('3');
myStack.push('4');
myStack.push('5');

// console.log(myStack.peek());

console.log(myStack.pop());
// myStack.pop();
// console.log(myStack.peek());
// myStack.pop();
// myStack.pop();
// myStack.pop();
// myStack.pop();

console.log(myStack);
