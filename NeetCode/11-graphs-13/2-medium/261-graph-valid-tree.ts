/**
 * Given n nodes labeled from 0 to n - 1 and a list of undirected edges (each edge is a pair of nodes), write a function to check whether these edges make up a valid tree.

Example 1:

Input:
n = 5
edges = [[0, 1], [0, 2], [0, 3], [1, 4]]

Output:
true
Example 2:

Input:
n = 5
edges = [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]]

Output:
false
Note:

You can assume that no duplicate edges will appear in edges. Since all edges are undirected, [0, 1] is the same as [1, 0] and thus will not appear together in edges.
Constraints:

1 <= n <= 100
0 <= edges.length <= n * (n - 1) / 2

 */

function validTree(n: number, edges: number[][]): boolean {
  if (edges.length !== n - 1) return false; // Quick check: a tree has exactly n-1 edges

  // Build adjacency list
  const graph: number[][] = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  const visited: boolean[] = new Array(n).fill(false);

  function dfs(node: number, parent: number): boolean {
    visited[node] = true;

    for (const neighbor of graph[node]) {
      if (!visited[neighbor]) {
        if (!dfs(neighbor, node)) return false;
      } else if (neighbor !== parent) {
        // Found a cycle
        return false;
      }
    }

    return true;
  }

  // Start DFS from node 0
  if (!dfs(0, -1)) return false;

  // Check if all nodes are connected
  return visited.every(v => v);
}

function validTree2(n: number, edges: number[][]): boolean {
  if (edges.length !== n - 1) return false;

  const graph: number[][] = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  const visited: boolean[] = new Array(n).fill(false);
  const queue: [number, number][] = [[0, -1]]; // [node, parent]

  while (queue.length > 0) {
    const [node, parent] = queue.shift()!;
    visited[node] = true;

    for (const neighbor of graph[node]) {
      if (!visited[neighbor]) {
        queue.push([neighbor, node]);
      } else if (neighbor !== parent) {
        // Found a cycle
        return false;
      }
    }
  }

  return visited.every(v => v);
}
