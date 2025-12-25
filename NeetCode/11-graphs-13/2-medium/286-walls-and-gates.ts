/**
 * You are given a 
m
×
n
m×n 2D grid initialized with these three possible values:

-1 - A water cell that can not be traversed.
0 - A treasure chest.
INF - A land cell that can be traversed. We use the integer 2^31 - 1 = 2147483647 to represent INF.
Fill each land cell with the distance to its nearest treasure chest. If a land cell cannot reach a treasure chest then the value should remain INF.

Assume the grid can only be traversed up, down, left, or right.

Modify the grid in-place.

Example 1:

Input: [
  [2147483647,-1,0,2147483647],
  [2147483647,2147483647,2147483647,-1],
  [2147483647,-1,2147483647,-1],
  [0,-1,2147483647,2147483647]
]

Output: [
  [3,-1,0,1],
  [2,2,1,-1],
  [1,-1,2,-1],
  [0,-1,3,4]
]
Example 2:

Input: [
  [0,-1],
  [2147483647,2147483647]
]

Output: [
  [0,-1],
  [1,2]
]
Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 100
grid[i][j] is one of {-1, 0, 2147483647}

 */

function wallsAndGates(rooms: number[][]): void {
  const rows = rooms.length;
  const cols = rooms[0].length;
  const queue: [number, number][] = [];

  // Step 1: Add all gates to the BFS queue
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (rooms[r][c] === 0) {
        queue.push([r, c]);
      }
    }
  }

  // Directions: up, down, left, right
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  // Step 2: BFS from all gates simultaneously
  while (queue.length > 0) {
    const [r, c] = queue.shift()!;

    for (const [dr, dc] of directions) {
      const nr = r + dr;
      const nc = c + dc;

      // Skip out of bounds or non-empty rooms
      if (nr < 0 || nc < 0 || nr >= rows || nc >= cols || rooms[nr][nc] !== 2147483647) {
        continue;
      }

      // Fill with distance from nearest gate
      rooms[nr][nc] = rooms[r][c] + 1;

      // Add to queue to continue BFS outward
      queue.push([nr, nc]);
    }
  }
}
