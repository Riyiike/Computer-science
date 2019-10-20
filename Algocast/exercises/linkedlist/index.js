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
}

module.exports = { Node, LinkedList };
