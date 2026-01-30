/**
 * Problem: Binary Tree Inorder Traversal
 *
 * Description:
 * Given the root of a binary tree, return the inorder traversal of its nodes' values.
 * Inorder traversal visits nodes in the order: Left subtree → Root → Right subtree.
 * This produces a sorted sequence for Binary Search Trees.
 *
 * Algorithm Logic (Iterative Stack with State Tracking):
 * This solution uses an iterative approach with explicit stack and state tracking:
 *
 * KEY INSIGHT: Use a stack with state flags to simulate recursion and control
 * when to visit (process) vs when to just traverse nodes. The visitedLeft flag
 * tracks whether we've already processed the left subtree.
 *
 * STEPS:
 * 1. Initialize stack with [root, false] (false = haven't processed left subtree)
 * 2. While stack is not empty:
 *    - Pop [node, visitedLeft] from stack
 *    - If node exists and visitedLeft is true: add node value to result
 *    - If node exists and visitedLeft is false: push right, current (with true), left
 * 3. The reverse order push ensures proper inorder processing
 *
 * Example with tree:     2
 *                       / \
 *                      1   3
 *
 * Stack evolution:
 * Initial: [[2, false]]
 * Pop [2, false]: Push [3, false], [2, true], [1, false] → [[3, false], [2, true], [1, false]]
 * Pop [1, false]: Push [1, true] → [[3, false], [2, true], [1, true]]
 * Pop [1, true]: Visit 1, result = [1] → [[3, false], [2, true]]
 * Pop [2, true]: Visit 2, result = [1, 2] → [[3, false]]
 * Pop [3, false]: Push [3, true] → [[3, true]]
 * Pop [3, true]: Visit 3, result = [1, 2, 3] → []
 * Final result: [1, 2, 3]
 *
 * Alternative: Recursive approach is more intuitive:
 * function inorder(root) { if (root) { inorder(root.left); result.push(root.val); inorder(root.right); }}
 * But iterative approach avoids potential stack overflow and shows explicit control.
 *
 * Time Complexity: O(n) - visit each node exactly once
 * Space Complexity: O(h) - stack depth equals tree height
 *
 * Tags: #binary-tree #traversal #stack #iterative #medium
 * URL: https://leetcode.com/problems/binary-tree-inorder-traversal/
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
   * @return {number[]}
   */
  inorderTraversal(root) {
    let answer = [];
    let stack = [[root, false]];

    while (stack.length) {
      let [node, visitedLeft] = stack.pop();

      // If node exists and we've processed its left subtree, visit the node
      if (node && visitedLeft) {
        answer.push(node.val);
      }

      // If node exists and we haven't processed left subtree yet
      if (node && !visitedLeft) {
        // Push in reverse order: right, current (with true flag), left
        // This ensures left is processed first (LIFO stack)

        if (node.right) {
          stack.push([node.right, false]);
        }

        // Mark current node as ready to visit (left subtree will be processed)
        stack.push([node, true]);

        if (node.left) {
          stack.push([node.left, false]);
        }
      }
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

  // Test case 1: Simple tree [1,null,2,3] - right skewed with left child
  //       1
  //        \
  //         2
  //        /
  //       3
  let tree1 = createBinaryTree([1, null, 2, 3]);
  let result1 = solution.inorderTraversal(tree1);
  console.assert(
    JSON.stringify(result1) === JSON.stringify([1, 3, 2]),
    'Test 1 failed: Expected [1,3,2], got ' + JSON.stringify(result1),
  );

  // Test case 2: Empty tree
  let tree2 = createBinaryTree([]);
  let result2 = solution.inorderTraversal(tree2);
  console.assert(
    JSON.stringify(result2) === JSON.stringify([]),
    'Test 2 failed: Expected [], got ' + JSON.stringify(result2),
  );

  // Test case 3: Single node [1]
  let tree3 = createBinaryTree([1]);
  let result3 = solution.inorderTraversal(tree3);
  console.assert(
    JSON.stringify(result3) === JSON.stringify([1]),
    'Test 3 failed: Expected [1], got ' + JSON.stringify(result3),
  );

  // Test case 4: Complete binary tree [4,2,6,1,3,5,7]
  //       4
  //      / \
  //     2   6
  //    / \ / \
  //   1 3 5 7
  let tree4 = createBinaryTree([4, 2, 6, 1, 3, 5, 7]);
  let result4 = solution.inorderTraversal(tree4);
  console.assert(
    JSON.stringify(result4) === JSON.stringify([1, 2, 3, 4, 5, 6, 7]),
    'Test 4 failed: Expected [1,2,3,4,5,6,7], got ' + JSON.stringify(result4),
  );

  // Test case 5: Left skewed tree [1,2,null,3]
  //   1
  //  /
  // 2
  ///
  //3
  let tree5 = createBinaryTree([1, 2, null, 3]);
  let result5 = solution.inorderTraversal(tree5);
  console.assert(
    JSON.stringify(result5) === JSON.stringify([3, 2, 1]),
    'Test 5 failed: Expected [3,2,1], got ' + JSON.stringify(result5),
  );

  // Test case 6: Right skewed tree [1,null,2,null,3]
  // 1
  //  \
  //   2
  //    \
  //     3
  let tree6 = createBinaryTree([1, null, 2, null, 3]);
  let result6 = solution.inorderTraversal(tree6);
  console.assert(
    JSON.stringify(result6) === JSON.stringify([1, 2, 3]),
    'Test 6 failed: Expected [1,2,3], got ' + JSON.stringify(result6),
  );

  console.log('✅ All Binary Tree Inorder Traversal test cases passed!');
}

// Run tests
test();

module.exports = { Solution, TreeNode };
