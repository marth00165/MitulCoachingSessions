"""
Data Structure: Singly Linked List

Description:
Implementation of a singly linked list with common operations.
Each node contains data and a reference to the next node.

Operations:
- append(data): Add element to end
- prepend(data): Add element to beginning  
- delete(data): Remove first occurrence of data
- find(data): Search for element
- size(): Get length of list
- to_list(): Convert to Python list

Time Complexities:
- append: O(n) - need to traverse to end
- prepend: O(1) - add at beginning
- delete: O(n) - may need to traverse entire list
- find: O(n) - may need to search entire list
- size: O(n) - need to count all nodes
"""

class ListNode:
    """Node in a singly linked list"""
    
    def __init__(self, data):
        self.data = data
        self.next = None

class SinglyLinkedList:
    """Singly Linked List implementation"""
    
    def __init__(self):
        self.head = None
    
    def append(self, data):
        """Add element to end of list"""
        new_node = ListNode(data)
        
        if not self.head:
            self.head = new_node
            return
        
        current = self.head
        while current.next:
            current = current.next
        current.next = new_node
    
    def prepend(self, data):
        """Add element to beginning of list"""
        new_node = ListNode(data)
        new_node.next = self.head
        self.head = new_node
    
    def delete(self, data):
        """Remove first occurrence of data"""
        if not self.head:
            return False
        
        # If head needs to be deleted
        if self.head.data == data:
            self.head = self.head.next
            return True
        
        current = self.head
        while current.next:
            if current.next.data == data:
                current.next = current.next.next
                return True
            current = current.next
        
        return False
    
    def find(self, data):
        """Search for element and return True if found"""
        current = self.head
        while current:
            if current.data == data:
                return True
            current = current.next
        return False
    
    def size(self):
        """Return the number of elements in the list"""
        count = 0
        current = self.head
        while current:
            count += 1
            current = current.next
        return count
    
    def to_list(self):
        """Convert linked list to Python list"""
        result = []
        current = self.head
        while current:
            result.append(current.data)
            current = current.next
        return result
    
    def reverse(self):
        """Reverse the linked list in place"""
        prev = None
        current = self.head
        
        while current:
            next_temp = current.next
            current.next = prev
            prev = current
            current = next_temp
        
        self.head = prev
    
    def __str__(self):
        """String representation of the list"""
        return " -> ".join(str(data) for data in self.to_list()) + " -> None"

# Test cases
def test_linked_list():
    """Test cases for singly linked list"""
    
    # Create new list
    ll = SinglyLinkedList()
    
    # Test empty list
    assert ll.size() == 0
    assert ll.to_list() == []
    assert ll.find(1) == False
    
    # Test append
    ll.append(1)
    ll.append(2)
    ll.append(3)
    assert ll.to_list() == [1, 2, 3]
    assert ll.size() == 3
    
    # Test prepend
    ll.prepend(0)
    assert ll.to_list() == [0, 1, 2, 3]
    
    # Test find
    assert ll.find(2) == True
    assert ll.find(5) == False
    
    # Test delete
    assert ll.delete(2) == True
    assert ll.to_list() == [0, 1, 3]
    assert ll.delete(0) == True  # Delete head
    assert ll.to_list() == [1, 3]
    assert ll.delete(5) == False  # Delete non-existent
    
    # Test reverse
    ll.reverse()
    assert ll.to_list() == [3, 1]
    
    print("✅ All linked list test cases passed!")

if __name__ == "__main__":
    test_linked_list()