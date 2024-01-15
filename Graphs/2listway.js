function intializeGraph(vertices) {
  const graph = new Map();
  for (let i = 0; i < vertices; i++) {
    graph.set(i, []);
  }
  return graph;
}
const numberOfVertices = 6;
const graphList = intializeGraph(numberOfVertices);
console.log(graphList);

const edges = [
  [1, 2],
  [1, 3],
  [2, 4],
  [3, 4],
  [2, 5],
  [4, 5],
];
for (let i = 0; i < edges.length; i++) {
  const [u, v] = edges[i];
  graphList.get(u).push(v);
  graphList.get(v).push(u);
}
console.log(graphList);
