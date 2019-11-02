class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(value) {
    const child = new Tree(value);
    this.children.push(child);

    return child;
  }
}

const myTree = new Tree(1);

const branch1 = myTree
  .addChild(2)
  .addChild(4)
  .addChild(5);
const branch2 = myTree.addChild(3);
const branch3 = myTree.addChild(4);
const branch4 = myTree.addChild(5);

console.log(myTree);
