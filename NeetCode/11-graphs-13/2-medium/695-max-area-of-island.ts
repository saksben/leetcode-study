/**
 * You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

The area of an island is the number of cells with a value 1 in the island.

Return the maximum area of an island in grid. If there is no island, return 0.

 

Example 1:


Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
Output: 6
Explanation: The answer is not 11, because the island must be connected 4-directionally.
Example 2:

Input: grid = [[0,0,0,0,0,0,0,0]]
Output: 0
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 50
grid[i][j] is either 0 or 1.
 */

function maxAreaOfIsland(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;
  let maxArea = 0;

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  function dfs(r: number, c: number): number {
    // Out of bounds or water
    if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 0) return 0;

    grid[r][c] = 0; // mark visited by sinking the land
    let area = 1;

    for (const [dr, dc] of directions) {
      area += dfs(r + dr, c + dc);
    }

    return area;
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1) {
        maxArea = Math.max(maxArea, dfs(r, c));
      }
    }
  }

  return maxArea;
}

function maxAreaOfIsland2(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;
  let maxArea = 0;
  const directions = [[1,0],[-1,0],[0,1],[0,-1]];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1) {
        let area = 0;
        const queue: [number, number][] = [[r, c]];
        grid[r][c] = 0; // mark visited

        while (queue.length > 0) {
          const [x, y] = queue.shift()!;
          area++;

          for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;
            if (nx >= 0 && nx < rows && ny >= 0 && ny < cols && grid[nx][ny] === 1) {
              grid[nx][ny] = 0;
              queue.push([nx, ny]);
            }
          }
        }

        maxArea = Math.max(maxArea, area);
      }
    }
  }

  return maxArea;
}
