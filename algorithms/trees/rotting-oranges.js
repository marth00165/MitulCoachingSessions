/**
 * Problem: Rotting Oranges
 *
 * Description:
 * You are given an m x n grid where each cell can have one of three values:
 * - 0 representing an empty cell
 * - 1 representing a fresh orange
 * - 2 representing a rotten orange
 *
 * Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.
 * Return the minimum number of minutes that must elapse until no cell has a fresh orange.
 * If this is impossible, return -1.
 *
 * Algorithm:
 * Use BFS (Breadth-First Search) to simulate the rotting process level by level.
 * Each level represents one minute. Use queue with index tracking to avoid O(n) shift operations.
 *
 * Time Complexity: O(m × n) - visit each cell at most once
 * Space Complexity: O(m × n) - queue size in worst case
 *
 * Example:
 * Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
 * Output: 4 (minutes to rot all oranges)
 *
 * Tags: #bfs #queue #grid #medium
 * URL: https://leetcode.com/problems/rotting-oranges/
 */

class Solution {
  /**
   * @param {number[][]} grid
   * @return {number}
   */
  orangesRotting(grid) {
    /*
         - create a queue
         - track total number of fresh
         - add the rotten fruit to queue
         - iterate through each level of the queue per minute
         - rot fresh oranges and add them to queue
         */
    let rows = grid.length;
    let columns = grid[0].length;
    let fresh = 0;
    let minutes = 0;
    let q = [];
    let qIdx = 0;

    let directions = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ];

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < columns; c++) {
        let fruit = grid[r][c];

        if (fruit === 1) {
          fresh++;
        }

        if (fruit === 2) {
          q.push([r, c]);
        }
      }
    }

    while (qIdx < q.length && fresh > 0) {
      let rotLevel = q.length - qIdx;
      for (let i = 0; i < rotLevel; i++) {
        let [r, c] = q[qIdx];
        qIdx++;

        for (let [dr, dc] of directions) {
          let newRow = r + dr;
          let newCol = c + dc;

          if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < columns) {
            let fruit = grid[newRow][newCol];
            if (fruit === 1) {
              grid[newRow][newCol] = 2;
              q.push([newRow, newCol]);
              fresh--;
            }
          }
        }
      }
      minutes++;
    }

    if (fresh === 0) {
      return minutes;
    } else {
      return -1;
    }
  }
}

// Test cases
function test() {
  const solution = new Solution();

  // Test case 1: Basic case
  let grid1 = [
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ];
  console.log('Test 1 - Expected: 4, Got:', solution.orangesRotting(grid1)); // 4

  // Test case 2: Impossible case
  let grid2 = [
    [2, 1, 1],
    [0, 1, 1],
    [1, 0, 1],
  ];
  console.log('Test 2 - Expected: -1, Got:', solution.orangesRotting(grid2)); // -1

  // Test case 3: Already all rotten/empty
  let grid3 = [[0, 2]];
  console.log('Test 3 - Expected: 0, Got:', solution.orangesRotting(grid3)); // 0

  // Test case 4: Single fresh orange isolated
  let grid4 = [[1]];
  console.log('Test 4 - Expected: -1, Got:', solution.orangesRotting(grid4)); // -1
}

// Run tests
test();

module.exports = Solution;
