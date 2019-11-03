// Implement queue data structure

class Queue {
  constructor() {
    this._storage = {};
    this._startIndex = 0;
    this._length = 0;
  }

  enqueue(data) {
    if (data !== undefined) {
      this._storage[this._length + this._startIndex] = data;
      this._length++;
    }
  }

  dequeue() {
    if (this._length) {
      const removedItem = this._storage[this._startIndex];
      delete this._storage[this._startIndex];

      this._length--;
      this._startIndex++;

      return removedItem;
    }
  }

  peek() {
    return this._storage[this._startIndex];
  }

  size() {
    return this._length;
  }
}

const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);

// console.log(myQueue.dequeue());
// console.log(myQueue.dequeue());
// console.log(myQueue.size());
// console.log(myQueue);
