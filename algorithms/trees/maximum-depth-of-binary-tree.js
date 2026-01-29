/**
 * Problem: Maximum Depth of Binary Tree
 *
 * Description:
 * Given the root of a binary tree, return its maximum depth.
 * A binary tree's maximum depth is the number of nodes along the longest path
 * from the root node down to the farthest leaf node.
 *
 * Algorithm Logic (Iterative DFS with Stack):
 * This solution uses an iterative approach with a stack to perform depth-first traversal:
 *
 * KEY INSIGHT: Use a stack to store [node, current_depth] pairs. Track the maximum
 * depth encountered as we traverse the tree.
 *
 * STEPS:
 * 1. Start with root at depth 1 in the stack
 * 2. While stack is not empty:
 *    - Pop a [node, depth] pair
 *    - Update maxDepth if current depth is greater
 *    - Push children with incremented depth
 * 3. Continue until all nodes are visited
 *
 * Example with tree:
 *       3
 *      / \
 *     9   20
 *        /  \
 *       15   7
 *
 * Traversal: [3,1] → max=1 → [9,2],[20,2] → max=2 → [15,3],[7,3] → max=3
 * Result: 3
 *
 * Alternative: Recursive approach would be simpler:
 * return !root ? 0 : 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
 *
 * Time Complexity: O(n) - visit each node once
 * Space Complexity: O(h) - stack depth equals height of tree
 *
 * Tags: #binary-tree #dfs #stack #iterative #easy
 * URL: https://leetcode.com/problems/maximum-depth-of-binary-tree/
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
   * @return {number}
   */
  maxDepth(root) {
    if (!root) return 0;

    let maxDepth = 0;
    let stack = [[root, 1]]; // [node, depth] pairs

    while (stack.length > 0) {
      let [node, depth] = stack.pop();

      // Update maximum depth encountered so far
      maxDepth = Math.max(depth, maxDepth);

      // Add children to stack with incremented depth
      if (node.left) {
        stack.push([node.left, depth + 1]);
      }

      if (node.right) {
        stack.push([node.right, depth + 1]);
      }
    }

    return maxDepth;
  }
}

// Helper function to create test trees
function createTree(arr) {
  if (!arr.length || arr[0] === null) return null;

  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;

  while (queue.length && i < arr.length) {
    const node = queue.shift();

    if (i < arr.length && arr[i] !== null) {
      node.left = new TreeNode(arr[i]);
      queue.push(node.left);
    }
    i++;

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

  // Test case 1: Example tree [3,9,20,null,null,15,7]
  let tree1 = createTree([3, 9, 20, null, null, 15, 7]);
  console.assert(solution.maxDepth(tree1) === 3, 'Test 1 failed: Expected 3');

  // Test case 2: Single node
  let tree2 = createTree([1]);
  console.assert(solution.maxDepth(tree2) === 1, 'Test 2 failed: Expected 1');

  // Test case 3: Empty tree
  let tree3 = null;
  console.assert(solution.maxDepth(tree3) === 0, 'Test 3 failed: Expected 0');

  // Test case 4: Skewed tree (like linked list)
  let tree4 = createTree([1, null, 2, null, 3, null, 4]);
  console.assert(solution.maxDepth(tree4) === 4, 'Test 4 failed: Expected 4');

  // Test case 5: Balanced tree
  let tree5 = createTree([1, 2, 3, 4, 5, 6, 7]);
  console.assert(solution.maxDepth(tree5) === 3, 'Test 5 failed: Expected 3');

  console.log('✅ All Maximum Depth of Binary Tree test cases passed!');
}

// Run tests
test();

module.exports = { Solution, TreeNode };
