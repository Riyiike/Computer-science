class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.tail = head;
    this.length = 0;
  }

  insertBefore(value) {
    if (value !== undefined) {
      this.head = new Node(value, this.head);
      this.length++;
    }
  }

  insertAfter(value) {
    if (value !== undefined) {
      const newNode = new Node(value);
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
  }

  getAt(index) {
    let count = 0;
    let currentNode = this.head;

    while (currentNode) {
      if (count === index) {
        return currentNode.value;
      }

      currentNode = currentNode.next;
      count++;
    }

    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return null;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let count = 0;
    let currentNode = this.head;
    let previousNode = null;

    while (currentNode) {
      if (count === index) {
        previousNode.next = currentNode.next;
      }

      previousNode = currentNode;
      currentNode = currentNode.next;
      count++;
    }
  }

  removeFirst() {
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return null;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let currentNode = this.head;
    let previousNode = null;

    while (currentNode) {
      if (!currentNode.next) {
        previousNode.next = null;
        this.tail = previousNode;
      }

      previousNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  contains(value) {
    if (!this.head) {
      return false;
    }

    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }

      currentNode = currentNode.next;
    }

    return false;
  }

  getFirstNode() {
    return this.head.value;
  }

  getLastNode() {
    return this.tail.value;
  }

  allNode() {
    let currentNode = this.head;
    let result = [];

    while (currentNode) {
      result.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return result;
  }
}

const newNode = new Node(1);
const node = new LinkedList(newNode);

// Insert after
node.insertAfter(2);
node.insertAfter(3);
node.insertAfter(4);
node.insertAfter(5);

// // Before
// node.insertBefore(0);
// node.insertBefore(-1);
// node.insertBefore(-2);

// console.log(node.getLastNode());
// console.log(node.getFirstNode());

// node.removeAt(1);

// node.removeFirst();

// node.removeLast();

// console.log(node.contains(5));

// Print all node value
console.log(node.allNode());

// Get at specific index
// console.log(node.getAt(2));

// Get total number of nodes
// console.log(node.length);

// console.log(node);
