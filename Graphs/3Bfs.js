function initializeGraph(n) {
  let graph = new Map();
  for (let i = 0; i < n; i++) {
    graph.set(i, []);
  }
  return graph;
}

const graphList = initializeGraph(9);
console.log(graphList);
const edges = [
  [1, 2],
  [1, 6],
  [2, 3],
  [2, 4],
  [6, 8],
  [6, 7],
  [4, 5],
  [7, 5],
];
for (let i = 0; i < edges.length; i++) {
  console.log(i);
  const [u, v] = edges[i];
  graphList.get(u).push(v);
  graphList.get(v).push(u);
}
console.log(graphList);
const queue = [];
const visitedArray = Array(9).fill(0);
queue.push(1);
let bfstraversal = [];

while (queue.length > 0) {
  let current = queue.shift();
  if (!visitedArray[current]) {
    visitedArray[current] = 1;
    let neighbours = graphList.get(current);
    for (let ele of neighbours) {
      if (!visitedArray[ele]) {
        queue.push(ele);
      }
    }
    bfstraversal.push(current);
  }
}
console.log(bfstraversal);
//explore all the neighbours
