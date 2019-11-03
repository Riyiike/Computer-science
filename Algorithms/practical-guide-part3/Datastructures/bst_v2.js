class Bst {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    const newNode = new Bst(data);

    if (this.data === data) {
      return false;
    }

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

    if (this.left && this.data > data) {
      return this.left.contains(data);
    }

    if (this.right && this.data < data) {
      return this.right.contains(data);
    }

    return false;
  }

  deptFirstInOrderTraversal(cb) {
    // When reaches leaf node
    // Note: pattern is => last left leave node => self => right
    if (!this.left && !this.right) {
      return cb(this);
    }

    // left
    if (this.left) {
      this.left.deptFirstInOrderTraversal(cb);
    }

    // self
    cb(this);

    // right
    if (this.right) {
      this.right.deptFirstInOrderTraversal(cb);
    }
  }

  deptFirstPreOrderTraversal(cb) {
    // Note: pattern is => self => left => right

    // self
    cb(this);

    // left
    if (this.left) {
      this.left.deptFirstPreOrderTraversal(cb);
    }

    // right
    if (this.right) {
      this.right.deptFirstPreOrderTraversal(cb);
    }
  }

  deptFirstPostOrderTraversal(cb) {
    // Note: pattern is => left => right => self

    // left
    if (this.left) {
      this.left.deptFirstPostOrderTraversal(cb);
    }

    // right
    if (this.right) {
      this.right.deptFirstPostOrderTraversal(cb);
    }

    // self
    cb(this);
  }
}

const myBst = new Bst(10);
myBst.insert(9);
myBst.insert(8);
myBst.insert(20);
myBst.insert(40);

// console.log(myBst.contains(10));

// console.log(myBst);

// myBst.deptFirstInOrderTraversal(currentNode => {
//   console.log(currentNode.data);
// });

// myBst.deptFirstPreOrderTraversal(currentNode => {
//   console.log(currentNode.data);
// });

myBst.deptFirstPostOrderTraversal(currentNode => {
  console.log(currentNode.data);
});
