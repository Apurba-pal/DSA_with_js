
// Code
// Testcase
// Test Result
// Test Result
// 36. Valid Sudoku
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.


// Input: board = 
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true
// Example 2:

// Input: board = 
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.


/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const rows = Array.from({length : 9}, () => new Set())
    const cols = Array.from({length : 9}, () => new Set())
    const boxes = Array.from({length : 9}, () => new Set())

for (let r = 0; r < 9; r++) {
  for (let c = 0; c < 9; c++) {
    const val = board[r][c]; // jo cell mein likha hai

    if (val === '.') continue; // agar khaali hai toh skip

    const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

    // Check karo agar number pahle se kisi set mein hai
    if (
      rows[r].has(val) ||
      cols[c].has(val) ||
      boxes[boxIndex].has(val)
    ) {
      return false; // invalid sudoku
    }

    // agar nahi hai, toh sab set mein daal do
    rows[r].add(val);
    cols[c].add(val);
    boxes[boxIndex].add(val);
  }
}
return true;
};