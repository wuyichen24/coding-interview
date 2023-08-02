# Is Palindrome List

## Alias
- Leetcode (234): [Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/)

## Problem
- Check a linked list is palindrome or not.
- Return true if the linked list a palindrome.

## Solutions
- Solution 1: Fast slow pointers + Stack
   - Get the middle node (use fast and slow pointers) and add all the node of the first half into a stack.
   - Ignore the middle node if the linked list has a odd number of nodes.
   - Pop each value from the stack and compare it with each node in the second half of the linked list.

  ![Screen Shot 2021-04-16 at 12 00 19 PM](https://user-images.githubusercontent.com/8989447/115065432-5e159100-9eab-11eb-80c7-6e4acdea2827.png)

  ```java
  public boolean isPalindrome(ListNode head) {
      if (head == null || head.next == null) {
          return true;
      }
        
      Stack<Integer> stack = new Stack<>();
      ListNode fast = head;
      ListNode slow = head;
        
      while (fast != null && fast.next != null) {
          stack.add(slow.val);
          slow = slow.next;            // slow pointer just moves 1
          fast = fast.next.next;       // fast pointer moves 2
      }
        
      if (fast != null) {
          slow = slow.next;
      }
        
      while (slow != null) {
          if (slow.val != stack.pop()) {
              return false;
          }
          slow = slow.next;
      }
        
      return true;
  }
  ```
