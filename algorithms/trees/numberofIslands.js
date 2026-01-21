/**
 * Problem: Number of Islands
 *
 * Description:
 * Given an m x n 2D binary grid which represents a map of '1's (land) and '0's (water),
 * return the number of islands. An island is surrounded by water and is formed by
 * connecting adjacent lands horizontally or vertically. You may assume all four edges
 * of the grid are all surrounded by water.
 *
 * Algorithm:
 * Use BFS (Breadth-First Search) to traverse each island. When we find a '1', we
 * increment island count and use BFS to mark all connected land as visited ('0').
 *
 * Time Complexity: O(m × n) - visit each cell at most once
 * Space Complexity: O(min(m,n)) - BFS queue size in worst case
 *
 * Example:
 * Input: grid = [["1","1","0"],["0","1","0"],["0","0","1"]]
 * Output: 2 (two separate islands)
 *
 * Edge Cases:
 * - Empty grid
 * - All water (no islands)
 * - All land (one big island)
 * - Single cell
 *
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  if (!grid || grid.length === 0) return 0;

  let q = [];
  let directions = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];
  let rows = grid.length;
  let columns = grid[0].length;
  let pointer = 0;
  let islands = 0;

  let bfs = () => {
    while (pointer < q.length) {
      let [cr, cc] = q[pointer++];
      for (let [dr, dc] of directions) {
        let nr = cr + dr;
        let nc = cc + dc;
        if (
          nr >= 0 &&
          nr < rows &&
          nc >= 0 &&
          nc < columns &&
          grid[nr][nc] === '1'
        ) {
          q.push([nr, nc]);
          grid[nr][nc] = '0';
        }
      }
    }
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      if (grid[r][c] === '1') {
        grid[r][c] = '0';
        q.push([r, c]);
        bfs();
        islands++;
      }
    }
  }

  return islands;
};

/**
 * Test function for Number of Islands
 */
function testNumIslands() {
  console.log('Testing Number of Islands...');

  // Helper function to create a deep copy of the grid
  const copyGrid = (grid) => grid.map((row) => [...row]);

  let result;

  // Test case 1: Basic single island
  let grid1 = [
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0'],
  ];
  result = numIslands(copyGrid(grid1));
  console.assert(result === 1, 'Test case 1 failed: Expected 1 island');

  // Test case 2: Multiple separate islands
  let grid2 = [
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1'],
  ];
  result = numIslands(copyGrid(grid2));
  console.assert(result === 3, 'Test case 2 failed: Expected 3 islands');

  // Test case 3: No islands (all water)
  let grid3 = [
    ['0', '0', '0'],
    ['0', '0', '0'],
    ['0', '0', '0'],
  ];
  result = numIslands(copyGrid(grid3));
  console.assert(result === 0, 'Test case 3 failed: Expected 0 islands');

  // Test case 4: Single cell island
  let grid4 = [['1']];
  result = numIslands(copyGrid(grid4));
  console.assert(result === 1, 'Test case 4 failed: Expected 1 island');

  // Test case 5: All land (one big island)
  let grid5 = [
    ['1', '1', '1'],
    ['1', '1', '1'],
    ['1', '1', '1'],
  ];
  result = numIslands(copyGrid(grid5));
  console.assert(result === 1, 'Test case 5 failed: Expected 1 island');

  // Test case 6: Diagonal pattern (should NOT be connected)
  let grid6 = [
    ['1', '0', '1'],
    ['0', '1', '0'],
    ['1', '0', '1'],
  ];
  result = numIslands(copyGrid(grid6));
  console.assert(result === 5, 'Test case 6 failed: Expected 5 islands');

  // Test case 7: L-shaped connected island
  let grid7 = [
    ['1', '1', '0'],
    ['0', '1', '0'],
    ['0', '1', '1'],
  ];
  result = numIslands(copyGrid(grid7));
  console.assert(result === 1, 'Test case 7 failed: Expected 1 island');

  // Test case 8: Complex pattern
  let grid8 = [
    ['1', '1', '0', '0', '1'],
    ['1', '0', '0', '0', '1'],
    ['0', '0', '1', '0', '0'],
    ['0', '1', '1', '1', '0'],
  ];
  result = numIslands(copyGrid(grid8));
  console.assert(result === 4, 'Test case 8 failed: Expected 4 islands');

  console.log('✅ All number of islands test cases passed!');
}

// Export for use in other files
module.exports = {
  numIslands,
  testNumIslands,
};

// Run tests if this file is executed directly
if (require.main === module) {
  testNumIslands();
}
module.exports = { numIslands };
