class Graph {
  constructor() {
    this._vertices = {};
  }

  addVertex(vertex_id) {
    if (vertex_id === undefined) {
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

    delete this._vertices[vertex];
  }

  removeEdge(value1, value2) {
    if (!this._vertices[value1] || !this._vertices[value2]) {
      return;
    }

    let value1Neighbors = this._vertices[value1];
    value1Neighbors.splice(value1Neighbors.indexOf(value2), 1);
    let value2Neighbors = this._vertices[value2];
    value2Neighbors.splice(value2Neighbors.indexOf(value1), 1);
  }

  addEdge(value1, value2) {
    if (!this._vertices[value1] || !this._vertices[value2]) {
      return 'Invalid vertex';
    }

    this._vertices[value1].push(value2);
    this._vertices[value2].push(value1);
  }

  hasEdge(value1, value2) {
    return this._vertices[value1].indexOf(value2) > -1;
  }

  contains(value) {
    return this._vertices[value] !== undefined;
  }

  forEach(cb) {
    for (let vertex in this._vertices) {
      cb(vertex, this._vertices[vertex], this._vertices);
    }
  }

  deptFirstTraversal(value, cb, visited = {}, distance = 0) {
    if (!this._vertices[value] || typeof cb !== 'function') {
      return 'Invalid value or function';
    }

    // visited = visited || {}
    // distance = distance || 0
    cb(value, distance);
    visited[value] = true;

    this._vertices[value].forEach(neighbor => {
      if (visited[neighbor]) {
        return;
      }
      this.deptFirstTraversal(neighbor, cb, visited, distance + 1);
    }, this);
  }

  traverseBreadthFirst(value, cb) {
    if (!this._vertices[value] || typeof cb !== 'function') {
      return 'Invalid value or function';
    }

    let visited = {};
    let queue = [value];
    visited[value] = 0;

    while (queue.length) {
      let node = queue.shift();
      cb(node, visited[node]);

      let neighbors = this._vertices[node].filter(neighbor => {
        if (visited[neighbor] === undefined) {
          visited[neighbor] = visited[node] + 1;
          return true;
        }
      });

      queue = queue.concat(neighbors);
    }
  }
}

const graph = new Graph();

graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);

// console.log(graph._vertices, 'should have 5');

// graph.removeVertex(5);
// console.log(graph._vertices, 'should NOT have 5');
// console.log(graph.contains(4), 'should be true');
// console.log(graph.contains(7), 'should be false');

graph.addEdge(1, 2);
graph.addEdge(1, 4);
graph.addEdge(3, 2);
graph.addEdge(2, 4);
graph.addEdge(3, 4);

// console.log(graph._vertices);
// graph.removeEdge(4, 3);
// console.log('=======================');
// console.log(graph._vertices);

// console.log(graph.hasEdge(1, 2), 'should be true');
// console.log(graph.hasEdge(1, 3), 'should be false');
// graph.forEach(function(node, neighbors) {
//   console.log(node, 'has neighbors:', neighbors);
// });
// graph.addVertex(5);
// graph.addEdge(3, 5);
// console.log(graph._vertices);
// const traverseDF = [];
// graph.deptFirstTraversal(1, function(val, dist) {
//   traverseDF.push([val, dist]);
// });
// console.log(
//   traverseDF,
//   'should be [ [ 1, 0 ], [ 2, 1 ], [ 3, 2 ], [ 5, 3 ], [ 4, 2 ] ]'
// );
// const traverseBF = [];
// graph.traverseBreadthFirst(1, function(val, dist) {
//   traverseBF.push([val, dist]);
// });
// console.log(
//   traverseBF,
//   'should be [ [ 1, 0 ], [ 2, 1 ], [ 4, 1 ], [ 3, 2 ], [ 5, 3 ] ]'
// );
