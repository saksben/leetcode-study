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
    let row, col, subbox, cell;

    // Iterate through each value and create a unique entry in the Set. If the same entry is found again, return false
    for (let x = 0; x < board.length; ++x) { // iterate through the rows
        for (let y = 0; y < board.length; ++y) { // iterate through the column values of the row
            cell = board[x][y]; // the number in question
            if (cell === ".") continue; // if the value is blank, go on to the next because there's nothing that can be determined with it
            row = "row " + x + ": " + cell;
            col = "col " + y + ": " + cell;
            subbox = "square " + Math.floor(x / 3) + ":" + Math.floor(y / 3) + ": " + cell;

            if (set.has(row) || set.has(col) || set.has(subbox)) return false;
            set.add(row).add(col).add(subbox)
        }
    }

    return true;
}

function isValidSudoku2(board: string[][]): boolean {
    // We will use Sets to track duplicates
    // Each index 0-8 represents a row, column, or sub-box.

    const rows: Set<string>[] = Array.from({length: 9}, () => new Set()); // Create a new Set with a length of 9 values 
    const cols: Set<string>[] = Array.from({length: 9}, () => new Set());
    const boxes: Set<string>[] = Array.from({length: 9}, () => new Set());
    
    // Iterate through every cell of the 9x9 board
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const value = board[row][col];

            // Skip empty cells represented by "."
            if (value === ".") continue;
            
            // Calculate which 3x3 sub-box this cell belongs to
            const boxIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3); // Both floors are going to be 0, 1, or 2, and there are 3 sets of x/y to make 9 subboxes

            // Check for duplicates in the corresponding row, column, and box
            if (rows[row].has(value)) return false;
            if (cols[col].has(value)) return false;
            if (boxes[boxIndex].has(value)) return false;

            // Otherwise, record the number in the Sets
            rows[row].add(value);
            cols[col].add(value);
            boxes[boxIndex].add(value);
        }
    }

    return true;
}