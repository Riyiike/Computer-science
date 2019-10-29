// Implement queue data structure

class Queue {
  constructor() {
    this._storage = {};
    this._length = 0;
    this._headIndex = 0;
  }

  enqueue(data) {
    if (data) {
      // Doing this make enqueue() to be constant time O(1)
      // because we don't have to shift
      const lastIndex = this._length + this._headIndex;
      this._storage[lastIndex] = data;
      this._length++;
    }
  }

  dequeue() {
    if (this._length) {
      const removedItem = this._storage[this._headIndex];
      delete this._storage[this._headIndex];
      this._length--;
      this._headIndex++;
      return removedItem;
    }
  }

  peek() {
    if (this._length) {
      return this._storage[this._headIndex];
    }

    return [];
  }
}

const myQueue = new Queue();
myQueue.enqueue('Zero');
myQueue.enqueue('One');
myQueue.enqueue('Two');
myQueue.dequeue();
myQueue.enqueue('Four');
console.log(myQueue.peek());
console.log(myQueue);
