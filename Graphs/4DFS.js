function intializeGraph(n) {
  let graph = new Map();
  for (let i = 0; i < n; i++) {
    graph.set(i, []);
  }
  return graph;
}
const graphList = intializeGraph(9);

let edges = [
  [1, 2],
  [1, 3],
  [2, 5],
  [2, 6],
  [3, 7],
  [3, 4],
  [8, 4],
  [7, 8],
];

for (let i = 0; i < edges.length; i++) {
  const [u, v] = edges[i];
  graphList.get(u).push(v);
  graphList.get(v).push(u);
}

console.log(graphList);

const visitedArray = Array(9).fill(0);

const stack = [1];
while (stack.length > 0) {
  let current = stack.pop();
  if (!visitedArray[current]) {
    console.log(current);
    visitedArray[current] = 1;
    const neighbours = graphList.get(current);
    for (const n of neighbours) {
      if (!visitedArray[n]) {
        stack.push(n);
      }
    }
    
  }
}
