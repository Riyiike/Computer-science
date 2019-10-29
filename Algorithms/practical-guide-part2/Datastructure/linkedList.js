// Implement a linkedList

class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(head) {
    this.head = head;
    this.tail = head;
  }

  getAllNodeValues() {
    const result = [];
    let node = this.head;
    while (node) {
      result.push(node.value);
      node = node.next;
    }

    return result;
  }

  insertAfter(data) {
    if (data) {
      const newNode = new Node(data);

      if (!this.head) {
        this.head = newNode;
        this.tail = this.head;
        return this.head;
      }

      if (!this.head.next) {
        this.head.next = newNode;
        this.tail = newNode;
        return this.tail;
      }

      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  contains(value) {
    let currentNode = this.head;

    while (currentNode) {
      if (value === currentNode.value) {
        return true;
      }

      currentNode = currentNode.next;
    }

    return false;
  }

  removeTail() {
    if (!this.head.next) {
      this.head = null;
      this.tail = null;
      return;
    }

    let currentNode = this.head;
    let previousNode;

    while (currentNode.next) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    previousNode.next = null;
    this.tail = previousNode;
  }

  isHead(node) {
    return node === this.head;
  }

  isTail(node) {
    return node === this.tail;
  }
}

const newNode = new Node(1);
const myList = new LinkedList(newNode);

myList.insertAfter(2);
myList.insertAfter(3);
myList.insertAfter(4);
myList.insertAfter(5);
myList.insertAfter(6);
myList.insertAfter(7);
console.log(myList.contains(8));
// console.log(myList.isHead(newNode));
// console.log(myList.removeTail());
// console.log(myList.getAllNodeValues());
