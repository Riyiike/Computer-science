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

    if (this.left && this.data > data) {
      return this.left.contains(data);
    }

    if (this.right && this.data < data) {
      return this.right.contains(data);
    }

    return false;
  }
}

const myBst = new Bst(10);
myBst.insert(9);
myBst.insert(8);
myBst.insert(20);
myBst.insert(40);

console.log(myBst.contains(10));

// console.log(myBst);
