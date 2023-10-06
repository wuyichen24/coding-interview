# Reverse First N Nodes in List

## Alias

## Problem
Given the `head` of a singly linked list and one integer `n`, reverse the first `n` nodes of the list and return the new head of the list.

## Examples
- Example 1

![6](https://github.com/wuyichen24/coding-interview/assets/8989447/dc11c7f6-b591-4dd7-90ef-531fb5b85d5d)

## Solutions
- **Solution 1: Recursion**
   - Idea
      - Save the node next to the first N nodes (successor).
      - Operate on the`head.next` node:
         - Let the `head.next` node point to the `head` node.
      - Operate on the `head` node:
         - Let the `head` node point to the successor node.

  ![7](https://github.com/wuyichen24/coding-interview/assets/8989447/5b33734a-8831-4ecf-8203-db1a41c3c581)

  ```java
  class Solution {
      ListNode successor = null;                       // get the node next to first N node

      ListNode reverseN(ListNode head, int n) {        
          if (n == 1) {                                // if n = 1, just reverse head node
              successor = head.next;                   // remember the n+1 node
              return head;
          }
          ListNode last = reverseN(head.next, n - 1);

          head.next.next = head; 
          head.next = successor;                       // link the range to the original successor
          return last;
      }
  }
  ```
