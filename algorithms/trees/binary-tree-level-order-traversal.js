/**
 * Problem: Binary Tree Level Order Traversal
 *
 * Description:
 * Given the root of a binary tree, return the level order traversal of its nodes' values.
 * Level order traversal visits all nodes at each depth level from left to right before
 * moving to the next level.
 *
 * Algorithm Logic (BFS with Level Tracking):
 * This solution uses a modified Breadth-First Search approach with index-based level tracking:
 *
 * KEY INSIGHT: Instead of using separate queues for each level, use a single queue
 * with an index pointer. Track the queue length at each level start to know how many
 * nodes belong to the current level.
 *
 * STEPS:
 * 1. Handle edge case: return empty array if root is null
 * 2. Initialize queue with root and index pointer at 0
 * 3. For each level:
 *    - Calculate level size = current queue length - index
 *    - Process exactly 'level size' nodes
 *    - Add their values to current level array
 *    - Add their children to queue
 * 4. Add completed level to result and continue
 *
 * Example with tree:     3
 *                       / \
 *                      9   20
 *                         /  \
 *                        15   7
 *
 * Step-by-step execution:
 * Initial: q=[3], idx=0, answer=[]
 * Level 0: level=1, process node 3, add children → q=[3,9,20], idx=1, tempArr=[3]
 * Level 1: level=2, process nodes 9,20, add children → q=[3,9,20,15,7], idx=3, tempArr=[9,20]
 * Level 2: level=2, process nodes 15,7 → q=[3,9,20,15,7], idx=5, tempArr=[15,7]
 * Result: [[3], [9,20], [15,7]]
 *
 * Alternative: Classic BFS with separate level processing:
 * Use nested loops where outer tracks levels and inner processes current level.
 * Both approaches have same complexity but this version is more memory efficient.
 *
 * Time Complexity: O(n) - visit each node exactly once
 * Space Complexity: O(w) where w is maximum width of tree (queue storage)
 *
 * Tags: #binary-tree #bfs #level-order #queue #medium
 * URL: https://leetcode.com/problems/binary-tree-level-order-traversal/
 */

/**
 * Definition for a binary tree node.
 */
class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class Solution {
  /**
   * @param {TreeNode} root
   * @return {number[][]}
   */
  levelOrder(root) {
    if (!root) return [];

    let q = [root];
    let answer = [];
    let idx = 0;

    while (idx < q.length) {
      // Calculate how many nodes are at current level
      let level = q.length - idx;
      let tempArr = [];

      // Process all nodes at current level
      for (let i = 0; i < level; i++) {
        let node = q[idx];
        idx++;

        // Add current node's value to level array
        tempArr.push(node.val);

        // Add children to queue for next level
        if (node.left) {
          q.push(node.left);
        }
        if (node.right) {
          q.push(node.right);
        }
      }

      // Add completed level to result
      answer.push(tempArr);
    }

    return answer;
  }
}

// Helper function to create binary tree from array (level order)
function createBinaryTree(arr) {
  if (!arr.length || arr[0] === null) return null;

  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;

  while (queue.length && i < arr.length) {
    const node = queue.shift();

    // Left child
    if (i < arr.length && arr[i] !== null) {
      node.left = new TreeNode(arr[i]);
      queue.push(node.left);
    }
    i++;

    // Right child
    if (i < arr.length && arr[i] !== null) {
      node.right = new TreeNode(arr[i]);
      queue.push(node.right);
    }
    i++;
  }

  return root;
}

// Test cases
function test() {
  const solution = new Solution();

  // Test case 1: Standard example [3,9,20,null,null,15,7]
  //       3
  //      / \
  //     9   20
  //        /  \
  //       15   7
  let tree1 = createBinaryTree([3, 9, 20, null, null, 15, 7]);
  let result1 = solution.levelOrder(tree1);
  let expected1 = [[3], [9, 20], [15, 7]];
  console.assert(
    JSON.stringify(result1) === JSON.stringify(expected1),
    'Test 1 failed: Expected ' +
      JSON.stringify(expected1) +
      ', got ' +
      JSON.stringify(result1),
  );

  // Test case 2: Single node [1]
  let tree2 = createBinaryTree([1]);
  let result2 = solution.levelOrder(tree2);
  let expected2 = [[1]];
  console.assert(
    JSON.stringify(result2) === JSON.stringify(expected2),
    'Test 2 failed: Expected ' +
      JSON.stringify(expected2) +
      ', got ' +
      JSON.stringify(result2),
  );

  // Test case 3: Empty tree []
  let tree3 = createBinaryTree([]);
  let result3 = solution.levelOrder(tree3);
  let expected3 = [];
  console.assert(
    JSON.stringify(result3) === JSON.stringify(expected3),
    'Test 3 failed: Expected ' +
      JSON.stringify(expected3) +
      ', got ' +
      JSON.stringify(result3),
  );

  // Test case 4: Complete binary tree [1,2,3,4,5,6,7]
  //       1
  //      / \
  //     2   3
  //    / \ / \
  //   4 5 6 7
  let tree4 = createBinaryTree([1, 2, 3, 4, 5, 6, 7]);
  let result4 = solution.levelOrder(tree4);
  let expected4 = [[1], [2, 3], [4, 5, 6, 7]];
  console.assert(
    JSON.stringify(result4) === JSON.stringify(expected4),
    'Test 4 failed: Expected ' +
      JSON.stringify(expected4) +
      ', got ' +
      JSON.stringify(result4),
  );

  // Test case 5: Left skewed tree [1,2,null,3,null,4]
  //   1
  //  /
  // 2
  ///
  //3
  ///
  //4
  let tree5 = createBinaryTree([1, 2, null, 3, null, 4]);
  let result5 = solution.levelOrder(tree5);
  let expected5 = [[1], [2], [3], [4]];
  console.assert(
    JSON.stringify(result5) === JSON.stringify(expected5),
    'Test 5 failed: Expected ' +
      JSON.stringify(expected5) +
      ', got ' +
      JSON.stringify(result5),
  );

  // Test case 6: Right skewed tree [1,null,2,null,3,null,4]
  // 1
  //  \
  //   2
  //    \
  //     3
  //      \
  //       4
  let tree6 = createBinaryTree([1, null, 2, null, 3, null, 4]);
  let result6 = solution.levelOrder(tree6);
  let expected6 = [[1], [2], [3], [4]];
  console.assert(
    JSON.stringify(result6) === JSON.stringify(expected6),
    'Test 6 failed: Expected ' +
      JSON.stringify(expected6) +
      ', got ' +
      JSON.stringify(result6),
  );

  // Test case 7: Unbalanced tree [1,2,3,4,null,null,5]
  //       1
  //      / \
  //     2   3
  //    /     \
  //   4       5
  let tree7 = createBinaryTree([1, 2, 3, 4, null, null, 5]);
  let result7 = solution.levelOrder(tree7);
  let expected7 = [[1], [2, 3], [4, 5]];
  console.assert(
    JSON.stringify(result7) === JSON.stringify(expected7),
    'Test 7 failed: Expected ' +
      JSON.stringify(expected7) +
      ', got ' +
      JSON.stringify(result7),
  );

  console.log('✅ All Binary Tree Level Order Traversal test cases passed!');
}

// Run tests
test();

module.exports = { Solution, TreeNode };
