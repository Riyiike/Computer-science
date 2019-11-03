class Bst {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    // Note: if data is less than this.data go left else go right, if equal reject

    if (data === this.data) {
      return 'Duplicate node found';
    }

    const newNode = new Bst(data);

    if (data < this.data) {
      if (this.left) {
        this.left.insert(data);
      } else {
        this.left = newNode;
      }
    } else if (data > this.data) {
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
      return this.left.contains(data);
    }

    if (data > this.data && this.right) {
      return this.right.contains(data);
    }

    return false;
  }

  deptFirstInOrderTraversal(cb) {
    // Note: pattern => left => self => right
    if (!this.left && !this.right) {
      return cb(this);
    }

    if (this.left) {
      this.left.deptFirstInOrderTraversal(cb);
    }

    cb(this);

    if (this.right) {
      this.right.deptFirstInOrderTraversal(cb);
    }
  }

  deptFirstPreOrderTraversal(cb) {
    // Note: pattern => self => left => right

    cb(this);

    if (this.left) {
      this.left.deptFirstPreOrderTraversal(cb);
    }

    if (this.right) {
      this.right.deptFirstPreOrderTraversal(cb);
    }
  }

  deptFirstPostOrderTraversal(cb) {
    // Note: pattern => left => right => self
    if (this.left) {
      this.left.deptFirstPostOrderTraversal(cb);
    }

    if (this.right) {
      this.right.deptFirstPostOrderTraversal(cb);
    }

    cb(this);
  }
}

const myBst = new Bst(10);

myBst.insert(9);
myBst.insert(20);
myBst.insert(8);
myBst.insert(40);

// console.log(myBst);

// console.log(myBst.contains(0));

// myBst.deptFirstInOrderTraversal(currentNode => {
//   console.log(currentNode.data);
// });

// myBst.deptFirstPreOrderTraversal(currentNode => {
//   console.log(currentNode.data);
// });

// myBst.deptFirstPostOrderTraversal(currentNode => {
//   console.log(currentNode.data);
// });
