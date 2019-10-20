// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let current_node = this.head;
    while (current_node) {
      counter++;
      current_node = current_node.next;
    }

    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let current_node = this.head;
    if (!current_node) {
      return null;
    }

    if (!current_node.next) {
      return current_node;
    }

    while (current_node.next) {
      current_node = current_node.next;
    }

    return current_node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return null;
    }

    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return null;
    }

    if (!this.head.next) {
      this.head = null;
      return null;
    }

    let previousNode = this.head;
    let currentNode = this.head.next;

    while (currentNode.next) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    previousNode.next = null;
  }

  insertLast(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return this.head;
    }

    if (!this.head.next) {
      this.head.next = newNode;
      return this.head.next;
    }

    // First pass solution

    // let previousNode = this.head;
    // let currentNode = this.head.next;

    // while (currentNode.next) {
    //   previousNode = currentNode;
    //   currentNode = currentNode.next;
    // }

    // currentNode.next = newNode;
    // return currentNode;

    // Second pass solution
    const lastNode = this.getLast();
    lastNode.next = newNode;
  }
}

module.exports = { Node, LinkedList };
