/**
 * There is an undirected graph with n nodes. There is also an edges array, where edges[i] = [a, b] means that there is an edge between node a and node b in the graph.

The nodes are numbered from 0 to n - 1.

Return the total number of connected components in that graph.

Example 1:

Input:
n=3
edges=[[0,1], [0,2]]

Output:
1
Example 2:

Input:
n=6
edges=[[0,1], [1,2], [2,3], [4,5]]

Output:
2
Constraints:

1 <= n <= 100
0 <= edges.length <= n * (n - 1) / 2

 */

function countComponents(n: number, edges: number[][]): number {
  // Build adjacency list
  const graph: number[][] = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  const visited: boolean[] = new Array(n).fill(false);
  let count = 0;

  // DFS to mark all nodes in the current component
  function dfs(node: number) {
    visited[node] = true;
    for (const neighbor of graph[node]) {
      if (!visited[neighbor]) {
        dfs(neighbor);
      }
    }
  }

  // Iterate all nodes
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      count++;
      dfs(i); // visit all nodes in this component
    }
  }

  return count;
}

function countComponents2(n: number, edges: number[][]): number {
  const graph: number[][] = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  const visited: boolean[] = new Array(n).fill(false);
  let count = 0;

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      count++;
      const queue: number[] = [i];
      visited[i] = true;

      while (queue.length > 0) {
        const node = queue.shift()!;
        for (const neighbor of graph[node]) {
          if (!visited[neighbor]) {
            visited[neighbor] = true;
            queue.push(neighbor);
          }
        }
      }
    }
  }

  return count;
}
