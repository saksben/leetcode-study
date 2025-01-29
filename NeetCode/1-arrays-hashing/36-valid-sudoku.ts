// Valid Sudoku
// Medium

/**
 Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
 

Example 1:

Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true
Example 2:

Input: board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

Constraints:

board.length == 9
board[i].length == 9
board[i][j] is a digit 1-9 or '.'.
 */

// Throw each number into a Set of rows, columns, and squares and if any reappear then it's false
// Per Constraint 3, a blank value is "."
function isValidSudoku(board: string[][]): boolean {
    const set = new Set<string>();
    let row, col, subbox, ceil;

    // Iterate through each value and create a unique entry in the Set. If the same entry is found again, return false
    for (let x = 0; x < board.length; ++x) { // iterate through the rows
        for (let y = 0; y < board.length; ++y) { // iterate through the column values of the row
            ceil = board[x][y]; // the number in question
            if (ceil === ".") continue; // if the value is blank, go on to the next because there's nothing that can be determined with it
            row = "row " + x + ": " + ceil;
            col = "col " + y + ": " + ceil;
            subbox = "square " + Math.floor(x / 3) + ":" + Math.floor(y / 3) + ": " + ceil;

            if (set.has(row) || set.has(col) || set.has(subbox)) return false;
            set.add(row).add(col).add(subbox)
        }
    }

    return true;
}