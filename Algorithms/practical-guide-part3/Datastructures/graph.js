class Graph {
  constructor() {
    this._vertices = {};
  }

  addVertex(vertex_id) {
    if (value === undefined) {
      return;
    }

    this._vertices[vertex_id] = this._vertices[vertex_id] || [];
  }

  removeVertex(vertex) {
    this._vertices[vertex].forEach(neighbor => {
      let neighborsNeighbors = this._vertices[neighbor];
      let index = neighborsNeighbors.indexOf(value);
      neighborsNeighbors.splice(index, 1);
    });

    delete this._vertices[value];
  }

  addEdge(value1, value2) {
    if (!this._vertices[value1] || !this._vertices[value2]) {
      return 'Invalid vertex';
    }

    this._vertices[value1].push(value2);
    this._vertices[value2].push(value1);
  }

  hasEdge(value1, value2) {
    this._vertices[value1].index(value2) > -1;
  }

  contains(value) {
    return this._vertices[value] !== undefined;
  }

  forEach(cb) {
    for (let vertex in this._vertices) {
      cb(vertex_id, this._vertices[vertex], this._vertices);
    }
  }
}
