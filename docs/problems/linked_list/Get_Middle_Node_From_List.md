# Get Middle Node from List

## Alias
- Leetcode (876): [Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/)

## Problem
- Get the middle node of a linked list.
- Return the middle node of the linked list.
- If there are two middle nodes, return the second middle node.

## Solutions
- **Solution 1: Fast slow pointers**
   - Idea
      - Faster pointer moves 2 steps while slower pointer moves 1 step each time.
  ```java
  public ListNode middleNode(ListNode head) {
      if (head == null || head.next == null) {
          return head;
      }
        
      ListNode fast = head;
      ListNode slow = head;
        
      while (fast != null && fast.next != null) {
          slow = slow.next;
          fast = fast.next.next;
      }
        
      return slow;
  }
  ```
