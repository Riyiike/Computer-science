const Stack = require('./Stack');

class QueueTwoStacks {
  constructor(stackIn, stackOut) {
    this._stackIn = stackIn;
    this._stackOut = stackOut;
  }

  enqueue(value) {
    if (value !== undefined) {
      return this._stackIn.push(value);
    }
  }

  dequeue() {
    if (this._stackOut.size() === 0) {
      this._transferStack();
    }

    return this._stackOut.pop();
  }

  _transferStack() {
    while (this._stackIn.size() > 0) {
      this._stackOut.push(this._stackIn.pop());
    }
  }
}

const myTwoStack = new QueueTwoStacks(new Stack(), new Stack());

myTwoStack.enqueue(20);
myTwoStack.enqueue(30);
myTwoStack.enqueue(40);

console.log(myTwoStack.dequeue());
console.log(myTwoStack.dequeue());
console.log(myTwoStack.dequeue());

myTwoStack.enqueue(50);

console.log(myTwoStack.dequeue());

console.log(myTwoStack);
