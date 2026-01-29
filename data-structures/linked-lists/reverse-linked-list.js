/**
 * Problem: Reverse Linked List
 *
 * Description:
 * Given the head of a singly linked list, reverse the list and return the new head.
 * The reversal should be done in-place without using extra space for a new list.
 *
 * Algorithm Logic (Iterative Three-Pointer Approach):
 * This solution uses an iterative approach with three pointers to reverse the links:
 *
 * KEY INSIGHT: We need to reverse the direction of each 'next' pointer while
 * maintaining references to avoid losing nodes during the process.
 *
 * STEPS:
 * 1. Initialize prev = null, curr = head
 * 2. While curr is not null:
 *    - Store curr.next in temp (to avoid losing the rest of the list)
 *    - Reverse the link: curr.next = prev
 *    - Move pointers forward: prev = curr, curr = temp
 * 3. Return prev (which is now the new head)
 *
 * Example with list: 1 → 2 → 3 → 4 → 5
 *
 * Initial:     prev=null, curr=1→2→3→4→5
 * Iteration 1: prev=1,    curr=2→3→4→5,  Result: null←1  2→3→4→5
 * Iteration 2: prev=2,    curr=3→4→5,    Result: null←1←2  3→4→5
 * Iteration 3: prev=3,    curr=4→5,      Result: null←1←2←3  4→5
 * Iteration 4: prev=4,    curr=5,        Result: null←1←2←3←4  5
 * Iteration 5: prev=5,    curr=null,     Result: null←1←2←3←4←5
 * Final: 5 → 4 → 3 → 2 → 1 → null
 *
 * Alternative: Recursive approach exists but uses O(n) stack space:
 * Base case: if !head || !head.next return head
 * Recursive: newHead = reverseList(head.next), head.next.next = head, head.next = null
 *
 * Time Complexity: O(n) - visit each node exactly once
 * Space Complexity: O(1) - only use three pointer variables
 *
 * Tags: #linked-list #two-pointers #iterative #easy
 * URL: https://leetcode.com/problems/reverse-linked-list/
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
   * @return {ListNode}
   */
  reverseList(head) {
    let prev = null;
    let curr = head;

    while (curr) {
      // Store next node before we lose reference
      let temp = curr.next;

      // Reverse the link
      curr.next = prev;

      // Move pointers forward
      prev = curr;
      curr = temp;
    }

    // prev is now the new head of reversed list
    return prev;
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

  // Test case 1: Normal list [1,2,3,4,5]
  let list1 = createLinkedList([1, 2, 3, 4, 5]);
  let reversed1 = solution.reverseList(list1);
  let result1 = linkedListToArray(reversed1);
  console.assert(
    JSON.stringify(result1) === JSON.stringify([5, 4, 3, 2, 1]),
    'Test 1 failed: Expected [5,4,3,2,1], got ' + JSON.stringify(result1),
  );

  // Test case 2: Two elements [1,2]
  let list2 = createLinkedList([1, 2]);
  let reversed2 = solution.reverseList(list2);
  let result2 = linkedListToArray(reversed2);
  console.assert(
    JSON.stringify(result2) === JSON.stringify([2, 1]),
    'Test 2 failed: Expected [2,1], got ' + JSON.stringify(result2),
  );

  // Test case 3: Single element [1]
  let list3 = createLinkedList([1]);
  let reversed3 = solution.reverseList(list3);
  let result3 = linkedListToArray(reversed3);
  console.assert(
    JSON.stringify(result3) === JSON.stringify([1]),
    'Test 3 failed: Expected [1], got ' + JSON.stringify(result3),
  );

  // Test case 4: Empty list []
  let list4 = createLinkedList([]);
  let reversed4 = solution.reverseList(list4);
  let result4 = linkedListToArray(reversed4);
  console.assert(
    JSON.stringify(result4) === JSON.stringify([]),
    'Test 4 failed: Expected [], got ' + JSON.stringify(result4),
  );

  // Test case 5: Longer list [1,2,3,4,5,6,7,8]
  let list5 = createLinkedList([1, 2, 3, 4, 5, 6, 7, 8]);
  let reversed5 = solution.reverseList(list5);
  let result5 = linkedListToArray(reversed5);
  console.assert(
    JSON.stringify(result5) === JSON.stringify([8, 7, 6, 5, 4, 3, 2, 1]),
    'Test 5 failed: Expected [8,7,6,5,4,3,2,1], got ' + JSON.stringify(result5),
  );

  console.log('✅ All Reverse Linked List test cases passed!');
}

// Run tests
test();

module.exports = { Solution, ListNode };
