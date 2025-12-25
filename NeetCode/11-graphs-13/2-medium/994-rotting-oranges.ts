/**
 * You are given an m x n grid where each cell can have one of three values:

0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

 

Example 1:


Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
Output: 4
Example 2:

Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
Output: -1
Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
Example 3:

Input: grid = [[0,2]]
Output: 0
Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 10
grid[i][j] is 0, 1, or 2.
 */

function orangesRotting(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;

  const queue: [number, number][] = [];
  let freshCount = 0;

  // Step 1: Add all initially rotten oranges to the queue
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 2) {
        queue.push([r, c]);
      } else if (grid[r][c] === 1) {
        freshCount++;
      }
    }
  }

  if (freshCount === 0) return 0; // no fresh oranges to rot

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  let minutes = 0;

  // Step 2: BFS
  while (queue.length > 0) {
    const size = queue.length;
    let rottedThisRound = false;

    for (let i = 0; i < size; i++) {
      const [r, c] = queue.shift()!;

      for (const [dr, dc] of directions) {
        const nr = r + dr;
        const nc = c + dc;

        // Skip out of bounds or non-fresh oranges
        if (
          nr < 0 || nr >= rows || nc < 0 || nc >= cols || grid[nr][nc] !== 1
        ) {
          continue;
        }

        grid[nr][nc] = 2; // rot the fresh orange
        queue.push([nr, nc]);
        freshCount--;
        rottedThisRound = true;
      }
    }

    if (rottedThisRound) minutes++;
  }

  return freshCount === 0 ? minutes : -1;
}
