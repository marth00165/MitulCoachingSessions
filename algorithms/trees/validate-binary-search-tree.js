/**
 * Problem: Validate Binary Search Tree
 *
 * Description:
 * Given the root of a binary tree, determine if it is a valid binary search tree (BST).
 * A valid BST is defined as follows:
 * - The left subtree of a node contains only nodes with keys less than the node's key
 * - The right subtree of a node contains only nodes with keys greater than the node's key
 * - Both the left and right subtrees must also be binary search trees
 *
 * Algorithm Logic (BFS with Range Validation):
 * This solution uses Breadth-First Search with min/max range tracking for each node:
 *
 * KEY INSIGHT: Instead of just comparing with parent, maintain valid range bounds
 * for each node. Every node must satisfy: min < node.val < max. Update bounds
 * as we traverse down the tree.
 *
 * STEPS:
 * 1. Initialize queue with root and initial bounds (-∞, +∞)
 * 2. For each node, validate it's within its allowed range
 * 3. Add left child with updated max bound (node.val becomes new max)
 * 4. Add right child with updated min bound (node.val becomes new min)
 * 5. If any node violates its range, return false
 * 6. If all nodes pass validation, return true
 *
 * Example with tree:     5
 *                       / \
 *                      3   8
 *                     / \ / \
 *                    2 4 7 9
 *
 * BFS with range validation:
 * Queue: [[5, -∞, +∞]]
 * Process 5: valid (-∞ < 5 < +∞), add children
 * Queue: [[3, -∞, 5], [8, 5, +∞]]
 * Process 3: valid (-∞ < 3 < 5), add children
 * Queue: [[8, 5, +∞], [2, -∞, 3], [4, 3, 5]]
 * Process 8: valid (5 < 8 < +∞), add children
 * Queue: [[2, -∞, 3], [4, 3, 5], [7, 5, 8], [9, 8, +∞]]
 * Continue... all nodes satisfy their ranges → return true
 *
 * Invalid example:  5
 *                  / \
 *                 3   8
 *                / \
 *               2   6  ← 6 > 5 but in left subtree!
 *
 * Process 6: range is (-∞, 5), but 6 >= 5 → return false
 *
 * Alternative: Inorder traversal approach:
 * Inorder traversal of BST should produce sorted sequence. Compare adjacent elements.
 * Both approaches are O(n) time, but range validation is more intuitive.
 *
 * Time Complexity: O(n) - visit each node exactly once
 * Space Complexity: O(n) - queue storage for BFS
 *
 * Tags: #binary-search-tree #bfs #validation #tree #medium
 * URL: https://leetcode.com/problems/validate-binary-search-tree/
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
   * @return {boolean}
   */
  isValidBST(root) {
    // Set up queue for BFS with [node, min_bound, max_bound]
    let q = [[root, -Infinity, Infinity]];
    let idx = 0;

    // Use index instead of shift() for better performance
    while (q.length > idx) {
      // Get the node and its allowed range bounds
      let [node, min, max] = q[idx++];

      if (node) {
        // Validate node is within bounds (exclusive)
        if (node.val <= min || node.val >= max) {
          return false;
        }

        // Add left child with updated max bound
        // Left child must be < current node value
        if (node.left) {
          q.push([node.left, min, node.val]);
        }

        // Add right child with updated min bound
        // Right child must be > current node value
        if (node.right) {
          q.push([node.right, node.val, max]);
        }
      }
    }

    return true;
  }

  /**
   * Alternative DFS implementation using stack (LIFO)
   * @param {TreeNode} root
   * @return {boolean}
   */
  isValidBST_DFS(root) {
    // Set up stack for DFS with [node, min_bound, max_bound]
    let stack = [[root, -Infinity, Infinity]];

    while (stack.length > 0) {
      // Pop from stack (LIFO - Last In, First Out)
      let [node, min, max] = stack.pop();

      if (node) {
        // Validate node is within bounds (exclusive)
        if (node.val <= min || node.val >= max) {
          return false;
        }

        // Add children to stack for DFS traversal
        // Note: Order doesn't matter for validation, but affects traversal order
        if (node.left) {
          stack.push([node.left, min, node.val]);
        }
        if (node.right) {
          stack.push([node.right, node.val, max]);
        }
      }
    }

    return true;
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

  // Test both BFS and DFS implementations
  console.log('Testing BFS (Queue) Implementation:');

  // Test case 1: Valid BST [2,1,3]
  //     2
  //    / \
  //   1   3
  let tree1 = createBinaryTree([2, 1, 3]);
  let result1 = solution.isValidBST(tree1);
  console.assert(
    result1 === true,
    'Test 1 (BFS) failed: Expected true, got ' + result1,
  );

  // Test case 2: Invalid BST [5,1,4,null,null,3,6]
  //       5
  //      / \
  //     1   4
  //        / \
  //       3   6
  // Invalid because 3 < 5 but is in right subtree
  let tree2 = createBinaryTree([5, 1, 4, null, null, 3, 6]);
  let result2 = solution.isValidBST(tree2);
  console.assert(
    result2 === false,
    'Test 2 (BFS) failed: Expected false, got ' + result2,
  );

  // Test case 3: Single node [1]
  let tree3 = createBinaryTree([1]);
  let result3 = solution.isValidBST(tree3);
  console.assert(
    result3 === true,
    'Test 3 failed: Expected true, got ' + result3,
  );

  // Test case 4: Empty tree
  let tree4 = createBinaryTree([]);
  let result4 = solution.isValidBST(tree4);
  console.assert(
    result4 === true,
    'Test 4 failed: Expected true, got ' + result4,
  );

  // Test case 5: Valid larger BST [5,3,8,2,4,7,9]
  //       5
  //      / \
  //     3   8
  //    / \ / \
  //   2 4 7 9
  let tree5 = createBinaryTree([5, 3, 8, 2, 4, 7, 9]);
  let result5 = solution.isValidBST(tree5);
  console.assert(
    result5 === true,
    'Test 5 failed: Expected true, got ' + result5,
  );

  // Test case 6: Invalid due to duplicate values [1,1]
  //   1
  //  /
  // 1
  let tree6 = createBinaryTree([1, 1]);
  let result6 = solution.isValidBST(tree6);
  console.assert(
    result6 === false,
    'Test 6 failed: Expected false, got ' + result6,
  );

  // Test case 7: Edge case with Integer.MIN_VALUE
  let tree7 = new TreeNode(-2147483648);
  let result7 = solution.isValidBST(tree7);
  console.assert(
    result7 === true,
    'Test 7 failed: Expected true, got ' + result7,
  );

  // Test case 8: Invalid case where right child equals parent [2,1,2]
  //   2
  //  / \
  // 1   2
  let tree8 = createBinaryTree([2, 1, 2]);
  let result8 = solution.isValidBST(tree8);
  console.assert(
    result8 === false,
    'Test 8 (BFS) failed: Expected false, got ' + result8,
  );

  console.log('✅ All BFS test cases passed!');

  // Test DFS implementation with same test cases
  console.log('\nTesting DFS (Stack) Implementation:');

  // Run same tests with DFS method
  let dfsResult1 = solution.isValidBST_DFS(createBinaryTree([2, 1, 3]));
  console.assert(
    dfsResult1 === true,
    'Test 1 (DFS) failed: Expected true, got ' + dfsResult1,
  );

  let dfsResult2 = solution.isValidBST_DFS(
    createBinaryTree([5, 1, 4, null, null, 3, 6]),
  );
  console.assert(
    dfsResult2 === false,
    'Test 2 (DFS) failed: Expected false, got ' + dfsResult2,
  );

  let dfsResult3 = solution.isValidBST_DFS(createBinaryTree([1]));
  console.assert(
    dfsResult3 === true,
    'Test 3 (DFS) failed: Expected true, got ' + dfsResult3,
  );

  let dfsResult4 = solution.isValidBST_DFS(createBinaryTree([]));
  console.assert(
    dfsResult4 === true,
    'Test 4 (DFS) failed: Expected true, got ' + dfsResult4,
  );

  let dfsResult5 = solution.isValidBST_DFS(
    createBinaryTree([5, 3, 8, 2, 4, 7, 9]),
  );
  console.assert(
    dfsResult5 === true,
    'Test 5 (DFS) failed: Expected true, got ' + dfsResult5,
  );

  let dfsResult6 = solution.isValidBST_DFS(createBinaryTree([1, 1]));
  console.assert(
    dfsResult6 === false,
    'Test 6 (DFS) failed: Expected false, got ' + dfsResult6,
  );

  let dfsTree7 = new TreeNode(-2147483648);
  let dfsResult7 = solution.isValidBST_DFS(dfsTree7);
  console.assert(
    dfsResult7 === true,
    'Test 7 (DFS) failed: Expected true, got ' + dfsResult7,
  );

  let dfsResult8 = solution.isValidBST_DFS(createBinaryTree([2, 1, 2]));
  console.assert(
    dfsResult8 === false,
    'Test 8 (DFS) failed: Expected false, got ' + dfsResult8,
  );

  console.log('✅ All DFS test cases passed!');
  console.log('✅ All Validate Binary Search Tree test cases passed!');
}

// Run tests
test();

module.exports = { Solution, TreeNode };
