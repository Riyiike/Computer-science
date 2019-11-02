// class Node {
//   constructor(data = null) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }

class Bst {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    const newNode = new Bst(data);

    if (data < this.data) {
      if (this.left) {
        this.left.insert(data);
      } else {
        this.left = newNode;
      }
    } else {
      if (this.right) {
        this.right.insert(data);
      } else {
        this.right = newNode;
      }
    }

    return this;
  }

  contains(data) {
    if (data === this.data) {
      return true;
    }

    if (data < this.data && this.left) {
      // Note: the exclamation (!!) is to default left (null) to false if not exist
      //   return !!this.left && this.left.contains(data);
      return this.left.contains(data);
    } else if (data > this.data && this.right) {
      // Note: the exclamation (!!) is to default right (null) to false if not exist
      //   return !!this.right && this.right.contains(data);
      return this.right.contains(data);
    }

    return false;
  }
}

// const newNode = new Node(1);
const myBst = new Bst(10);
myBst.insert(9);
myBst.insert(8);
myBst.insert(7);
myBst.insert(11);
myBst.insert(12);

console.log(myBst.contains(20));
console.log(myBst);
