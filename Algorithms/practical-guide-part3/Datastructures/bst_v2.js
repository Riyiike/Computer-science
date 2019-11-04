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

  deleteMin(parent) {
    // if current node is the minimum
    if (!this.left && !this.right) {
      //Note: current node is the minimum => set its parent left node to null
      if (parent) {
        // left node will always be smaller than parent node
        parent.left = null;
      } else {
        // Note: when current node is the root and only node
        this.data = null;
      }
    } else if (!this.left && this.right) {
      if (parent) {
        // set current parent node to current right node
        parent.left = this.right;
      } else {
        // Note: when all node are greater than current node and its the root node
        this.data = this.right.data;
        this.right = this.right.right;
      }
    }

    // If both left and right node exist
    // we recurs till the last node
    if (this.left) {
      this.left.deleteMin(this);
    }
  }

  deleteMax(parent) {
    if (!this.right && !this.left) {
      if (parent) {
        parent.right = null;
      } else {
        this.data = null;
      }
    } else if (!this.right && this.left) {
      if (parent) {
        parent.right = this.left;
      } else {
        this.data = this.left.data;
        this.left = this.left.left;
      }
    }

    if (this.right) {
      this.right.deleteMax(this);
    }
  }

  traverseBreathFirst(cb) {
    const queue = [this];

    while (queue.length) {
      const node = queue.shift();

      cb(node);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }

  checkIfFull() {
    let result = true;

    this.traverseBreathFirst(currentNode => {
      if (!currentNode.left && currentNode.right) {
        result = false;
      } else if (currentNode.left && !currentNode.right) {
        result = false;
      }
    });

    return result;
  }

  checkIfBalanced() {
    const heights = [];

    const recurs = (node, height) => {
      if (!node.left && !node.right) {
        heights.push(height);
      }

      node.left && recurs(node.left, height + 1);
      node.right && recurs(node.right, height + 1);
    };

    recurs(this, 1);
    let min = Math.min(heights);
    let max = Math.max(heights);

    return max - min <= 1;
  }
}

const myBst = new Bst(10);
myBst
  .insert(5)
  .insert(15)
  .insert(8)
  .insert(3)
  .insert(7)
  .insert(20)
  .insert(17)
  .insert(9)
  .insert(14);

const fullBSTree = new Bst(10);
fullBSTree
  .insert(5)
  .insert(20)
  .insert(15)
  .insert(21)
  .insert(16)
  .insert(13);
// console.log(fullBSTree.checkIfFull(), 'should be true');
// console.log(fullBSTree.checkIfBalanced(), 'should be false');

console.log(fullBSTree);

// console.log(myBst.contains(10));

// console.log(myBst);

// myBst.deptFirstInOrderTraversal(currentNode => {
//   console.log(currentNode.data);
// });

// myBst.deptFirstPreOrderTraversal(currentNode => {
//   console.log(currentNode.data);
// });

// myBst.deptFirstPostOrderTraversal(currentNode => {
//   console.log(currentNode.data);
// });

// myBst.deleteMax();
// myBst.deleteMax();
// console.log(myBst);

// myBst.traverseBreathFirst(currentNode => {
//   console.log(currentNode.data);
// });

// console.log(myBst.checkIfFull());
console.log(myBst.checkIfBalanced());
