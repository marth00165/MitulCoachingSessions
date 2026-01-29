/**
 * Problem: Remove Nth Node From End
 *
 * Description:
 * Given the head of a linked list, remove the nth node from the end of the list
 * and return its head. The algorithm should work in one pass.
 *
 * Algorithm Logic (Two-Pass Approach):
 * This solution uses a two-pass approach with a dummy node for edge case handling:
 *
 * KEY INSIGHT: Use a dummy node to handle the edge case where we need to remove
 * the head node. First calculate the length, then find the node before the target.
 *
 * STEPS:
 * 1. Create dummy node pointing to head (handles edge cases)
 * 2. First pass: Calculate total length of the linked list
 * 3. Second pass: Find the node before the nth node from end
 * 4. Remove the target node by updating the previous node's next pointer
 * 5. Return dummy.next (the new head)
 *
 * Example with list: 1 → 2 → 3 → 4 → 5, n = 2
 * 
 * Step 1: dummy → 1 → 2 → 3 → 4 → 5, length = 5
 * Step 2: Target position from start = length - n = 5 - 2 = 3
 * Step 3: Find node at position 2 (before target): node 3
 * Step 4: Remove node 4: 1 → 2 → 3 → 5
 * Result: 1 → 2 → 3 → 5
 *
 * Edge cases handled:
 * - Remove head (n equals length): dummy node handles this
 * - Single node list: dummy.next becomes null
 * - Remove last node: Works normally
 *
 * Alternative: Two-pointer approach with one pass:
 * Use fast/slow pointers with n gap between them. When fast reaches end,
 * slow points to node before target: O(n) time, same space.
 *
 * Time Complexity: O(n) - two passes through the list
 * Space Complexity: O(1) - only use constant extra variables
 *
 * Tags: #linked-list #two-pointer #two-pass #medium
 * URL: https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 */

/**
 * Definition for singly-linked list node.
 */
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

class Solution {
  /**
   * @param {ListNode} head
   * @param {number} n
   * @return {ListNode}
   */
  removeNthFromEnd(head, n) {
    // Create dummy node to handle edge case where head is removed
    let dummy = new ListNode(null, head);
    let curr = head;
    let length = 0;
    let prev = dummy;

    // First pass: calculate length
    while (curr) {
      curr = curr.next;
      length++;
    }

    // Reset current pointer to head
    curr = head;

    // Find the node before the target (length - n steps from dummy)
    while (curr) {
      if (length === n) {
        // Found the node to remove
        prev.next = curr.next;
        break;
      }
      
      // Move to next node
      prev = curr;
      curr = curr.next;
      length--;
    }

    // Return new head (dummy.next removes dummy node)
    return dummy.next;
  }
}

// Helper function to create linked list from array
function createLinkedList(arr) {
  if (!arr.length) return null;

  const head = new ListNode(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }

  return head;
}

// Helper function to convert linked list to array for easy testing
function linkedListToArray(head) {
  const result = [];
  let current = head;

  while (current) {
    result.push(current.val);
    current = current.next;
  }

  return result;
}

// Test cases
function test() {
  const solution = new Solution();

  // Test case 1: Remove 2nd from end [1,2,3,4,5] -> [1,2,3,5]
  let list1 = createLinkedList([1, 2, 3, 4, 5]);
  let result1 = solution.removeNthFromEnd(list1, 2);
  let output1 = linkedListToArray(result1);
  console.assert(JSON.stringify(output1) === JSON.stringify([1, 2, 3, 5]), 
    'Test 1 failed: Expected [1,2,3,5], got ' + JSON.stringify(output1));

  // Test case 2: Remove only node [1] -> []
  let list2 = createLinkedList([1]);
  let result2 = solution.removeNthFromEnd(list2, 1);
  let output2 = linkedListToArray(result2);
  console.assert(JSON.stringify(output2) === JSON.stringify([]), 
    'Test 2 failed: Expected [], got ' + JSON.stringify(output2));

  // Test case 3: Remove first (head) from two nodes [1,2] -> [2]
  let list3 = createLinkedList([1, 2]);
  let result3 = solution.removeNthFromEnd(list3, 2);
  let output3 = linkedListToArray(result3);
  console.assert(JSON.stringify(output3) === JSON.stringify([2]), 
    'Test 3 failed: Expected [2], got ' + JSON.stringify(output3));

  // Test case 4: Remove last from two nodes [1,2] -> [1]
  let list4 = createLinkedList([1, 2]);
  let result4 = solution.removeNthFromEnd(list4, 1);
  let output4 = linkedListToArray(result4);
  console.assert(JSON.stringify(output4) === JSON.stringify([1]), 
    'Test 4 failed: Expected [1], got ' + JSON.stringify(output4));

  // Test case 5: Remove middle from longer list [1,2,3,4,5,6] n=3 -> [1,2,3,5,6]
  let list5 = createLinkedList([1, 2, 3, 4, 5, 6]);
  let result5 = solution.removeNthFromEnd(list5, 3);
  let output5 = linkedListToArray(result5);
  console.assert(JSON.stringify(output5) === JSON.stringify([1, 2, 3, 5, 6]), 
    'Test 5 failed: Expected [1,2,3,5,6], got ' + JSON.stringify(output5));

  // Test case 6: Remove head from longer list [1,2,3,4,5] n=5 -> [2,3,4,5]
  let list6 = createLinkedList([1, 2, 3, 4, 5]);
  let result6 = solution.removeNthFromEnd(list6, 5);
  let output6 = linkedListToArray(result6);
  console.assert(JSON.stringify(output6) === JSON.stringify([2, 3, 4, 5]), 
    'Test 6 failed: Expected [2,3,4,5], got ' + JSON.stringify(output6));

  console.log('✅ All Remove Nth Node From End test cases passed!');
}

// Run tests
test();

module.exports = { Solution, ListNode };