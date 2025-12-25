/**
 * Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 300
grid[i][j] is '0' or '1'.
 */

function numIslands(grid: string[][]): number {
  const rows = grid.length;
  if (rows === 0) return 0;
  const cols = grid[0].length;

  let count = 0;

  function dfs(r: number, c: number) {
    // Check boundaries and water
    if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === '0') return;

    // Mark current land as visited
    grid[r][c] = '0';

    // Visit all 4 neighbors (up, down, left, right)
    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === '1') {
        count++;
        dfs(r, c); // Mark all connected land
      }
    }
  }

  return count;
}

function numIslands2(grid: string[][]): number {
  const rows = grid.length;
  if (rows === 0) return 0;
  const cols = grid[0].length;

  let count = 0;

  const directions = [
    [1, 0], [-1, 0], [0, 1], [0, -1]
  ];

  function bfs(r: number, c: number) {
    const queue: [number, number][] = [[r, c]];
    grid[r][c] = '0';

    while (queue.length > 0) {
      const [x, y] = queue.shift()!;
      for (const [dx, dy] of directions) {
        const nx = x + dx, ny = y + dy;
        if (nx >= 0 && nx < rows && ny >= 0 && ny < cols && grid[nx][ny] === '1') {
          grid[nx][ny] = '0';
          queue.push([nx, ny]);
        }
      }
    }
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === '1') {
        count++;
        bfs(r, c);
      }
    }
  }

  return count;
}
