# Is Palindrome List

## Alias
- Leetcode (234): [Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/)

## Problem
- Check a linked list is palindrome or not.
- Return `true` if the linked list a palindrome.

## Solutions
- **Solution 1: Fast slow pointers + Stack**
   - Idea
      - Get the middle node by fast and slow pointers and add all the node of the first half into a stack.
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

      // get the middle node
      while (fast != null && fast.next != null) { 
          stack.add(slow.val);
          slow = slow.next;            // slow pointer just moves 1
          fast = fast.next.next;       // fast pointer moves 2
      }

      // if fast is not null, it means length is odd, so move slow pointer 1 step further 
      if (fast != null) {              
          slow = slow.next;
      }

      // compare the slow with top element in stack
      while (slow != null) {
          if (slow.val != stack.pop()) {
              return false;
          }
          slow = slow.next;
      }
        
      return true;
  }
  ```
- **Solution 2: Fast slow pointers + reverse 2nd half list**
   - Idea
      - Get the middle node by fast and slow pointers.
      - Ignore the middle node if the linked list has a odd number of nodes.
      - Reverse all the nodes starting the slower pointer.
      - Compare the left pointer with the right pointer.

  ```java
  class Solution {
      public boolean isPalindrome(ListNode head) {
          ListNode slow, fast;
          slow = fast = head;

          // get the middle node
          while (fast != null && fast.next != null) {
              slow = slow.next;
              fast = fast.next.next;
          }
    
          // if fast is not null, it means length is odd, so move slow pointer 1 step further 
          if (fast != null)
              slow = slow.next;
    
          ListNode left = head;
          ListNode right = reverse(slow);   // reverse the 2nd half list starting from slow pointer

          // compare left pointer with right pointer
          while (right != null) {
              if (left.val != right.val)
                  return false;
              left = left.next;
              right = right.next;
          }
    
          return true;
      }

      // reverse a list
      ListNode reverse(ListNode head) {
          ListNode pre = null, cur = head;
          while (cur != null) {
             ListNode next = cur.next;
              cur.next = pre;
              pre = cur;
              cur = next;
          }
          return pre;
      }
  }
  ```
