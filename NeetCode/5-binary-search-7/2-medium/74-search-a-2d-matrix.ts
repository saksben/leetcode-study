/**
 * You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.

 

Example 1:


Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true
Example 2:


Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false
 

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 100
-104 <= matrix[i][j], target <= 104
 */

function searchMatrix(matrix: number[][], target: number): boolean {
    if (matrix.length === 0 || matrix[0].length === 0) return false;

    const rows = matrix.length;
    const cols = matrix[0].length;

    let left = 0;
    let right = rows * cols - 1; // Treat matrix as 1d array

    while (left <= right) {
        // Step 1: find middle index
        const mid = Math.floor(left + (right - left) / 2);

        // Step 2: Map flat index to 2d to find middle value
        const row = Math.floor(mid / cols);
        const col = mid % cols;
        const midValue = matrix[row][col];

        // Step 3: Compare mid value with target
        if (midValue === target) {
            return true;
        } else if (midValue < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return false; // Target not found
}