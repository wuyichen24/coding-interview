# Remove Duplicates from Sorted List

## Alias
- Leetcode (83): [Remove Duplicates from Sorted List](https://leetcode.com/problems/remove-duplicates-from-sorted-list/)

## Problem
- Remove all duplicates from a sorted list.
- Return the head of the new linked list.
- The new linked should be sorted as well.

## Solutions
- **Solution 1: 2 pointers**
   - Idea
      - Compare the `current` node with the `current.next` node.

  ```java
  public ListNode deleteDuplicates(ListNode head) {
      if (head == null || head.next == null) {
          return head;
      }
        
      ListNode current = head;
        
      while (current.next != null) {
          if (current.val == current.next.val) {   // if current is same with current.next
              current.next = current.next.next;    // jump over current.next
          } else {
              current = current.next;
          }
      }
        
      return head;
  }
  ```
