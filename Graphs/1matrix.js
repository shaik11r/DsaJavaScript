function intialMatrix(n) {
  const matrix = [];
  for (let i = 0; i < n; i++) {
    matrix[i] = Array(n).fill(0);
  }
  return matrix;
}
const edges = [
  [1, 2],
  [1, 3],
  [2, 4],
  [3, 4],
  [2, 5],
  [4, 5],
];
const graphMatrix = intialMatrix(6);

for (let i = 0; i < edges.length; i++) {
  addedge(graphMatrix, edges[i][0], edges[i][1]);
}
function addedge(matrix, u, v) {
  matrix[u][v] = 1;
  matrix[v][u] = 1;
}

console.log(graphMatrix);
