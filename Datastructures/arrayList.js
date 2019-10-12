class ArrayList {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(value) {
    this.data[this.length] = value;
    this.length++;
    return this.data;
  }

  pop() {
    //     delete this.data[this.length - 1];
    //     this.length--;
    //same code be write like this
    return this.delete(this.length - 1);
  }

  get(index) {
    return this.data[index];
  }

  delete(index) {
    const ans = this.data[index];
    this._collapseTo(index);
    return ans;
  }

  _collapseTo(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
  }
}

const list = new ArrayList();
list.push(20);
list.push(30);
list.push(50);
list.get(0);
list.pop();
