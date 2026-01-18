/**
 * Data Structure: Singly Linked List
 *
 * Description:
 * Implementation of a singly linked list with common operations.
 * Each node contains data and a reference to the next node.
 *
 * Operations:
 * - append(data): Add element to end
 * - prepend(data): Add element to beginning
 * - delete(data): Remove first occurrence of data
 * - find(data): Search for element
 * - size(): Get length of list
 * - toArray(): Convert to JavaScript array
 *
 * Time Complexities:
 * - append: O(n) - need to traverse to end
 * - prepend: O(1) - add at beginning
 * - delete: O(n) - may need to traverse entire list
 * - find: O(n) - may need to search entire list
 * - size: O(n) - need to count all nodes
 */

/**
 * Node in a singly linked list
 */
class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

/**
 * Singly Linked List implementation
 */
class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  /**
   * Add element to end of list
   * @param {any} data - Data to add
   */
  append(data) {
    const newNode = new ListNode(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  /**
   * Add element to beginning of list
   * @param {any} data - Data to add
   */
  prepend(data) {
    const newNode = new ListNode(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  /**
   * Remove first occurrence of data
   * @param {any} data - Data to remove
   * @returns {boolean} True if element was found and removed
   */
  delete(data) {
    if (!this.head) {
      return false;
    }

    // If head needs to be deleted
    if (this.head.data === data) {
      this.head = this.head.next;
      return true;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next;
        return true;
      }
      current = current.next;
    }

    return false;
  }

  /**
   * Search for element and return True if found
   * @param {any} data - Data to search for
   * @returns {boolean} True if found
   */
  find(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  /**
   * Return the number of elements in the list
   * @returns {number} Size of the list
   */
  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  /**
   * Convert linked list to JavaScript array
   * @returns {Array} Array representation of the list
   */
  toArray() {
    const result = [];
    let current = this.head;
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    return result;
  }

  /**
   * Reverse the linked list in place
   */
  reverse() {
    let prev = null;
    let current = this.head;

    while (current) {
      const nextTemp = current.next;
      current.next = prev;
      prev = current;
      current = nextTemp;
    }

    this.head = prev;
  }

  /**
   * String representation of the list
   * @returns {string} String representation
   */
  toString() {
    return this.toArray().join(' -> ') + ' -> null';
  }
}

/**
 * Test cases for singly linked list
 */
function testLinkedList() {
  console.log('Testing Singly Linked List...');

  // Create new list
  const ll = new SinglyLinkedList();

  // Test empty list
  console.assert(ll.size() === 0, 'Empty list size test failed');
  console.assert(
    JSON.stringify(ll.toArray()) === JSON.stringify([]),
    'Empty list array test failed',
  );
  console.assert(ll.find(1) === false, 'Empty list find test failed');

  // Test append
  ll.append(1);
  ll.append(2);
  ll.append(3);
  console.assert(
    JSON.stringify(ll.toArray()) === JSON.stringify([1, 2, 3]),
    'Append test failed',
  );
  console.assert(ll.size() === 3, 'Size after append test failed');

  // Test prepend
  ll.prepend(0);
  console.assert(
    JSON.stringify(ll.toArray()) === JSON.stringify([0, 1, 2, 3]),
    'Prepend test failed',
  );

  // Test find
  console.assert(ll.find(2) === true, 'Find existing element test failed');
  console.assert(ll.find(5) === false, 'Find non-existing element test failed');

  // Test delete
  console.assert(ll.delete(2) === true, 'Delete existing element test failed');
  console.assert(
    JSON.stringify(ll.toArray()) === JSON.stringify([0, 1, 3]),
    'Array after delete test failed',
  );
  console.assert(ll.delete(0) === true, 'Delete head test failed');
  console.assert(
    JSON.stringify(ll.toArray()) === JSON.stringify([1, 3]),
    'Array after head delete test failed',
  );
  console.assert(
    ll.delete(5) === false,
    'Delete non-existing element test failed',
  );

  // Test reverse
  ll.reverse();
  console.assert(
    JSON.stringify(ll.toArray()) === JSON.stringify([3, 1]),
    'Reverse test failed',
  );

  console.log('✅ All linked list test cases passed!');
}

// Export for use in other files
module.exports = {
  ListNode,
  SinglyLinkedList,
  testLinkedList,
};

// Run tests if this file is executed directly
if (require.main === module) {
  testLinkedList();
}
