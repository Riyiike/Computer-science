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
}

const newNode = new Node(1);
const myList = new LinkedList(newNode);

myList.insertAfter(2);
myList.insertAfter(3);
myList.insertAfter(4);
myList.insertAfter(5);

console.log(myList.getAllNodeValues());
