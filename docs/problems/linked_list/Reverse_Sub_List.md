# Reverse Sub-list

## Alias
- Leetcode (92): [Reverse Linked List II](https://leetcode.com/problems/reverse-linked-list-ii/)

## Problem
Given the `head` of a singly linked list and two integers `left` and `right` where `left <= right`, reverse the nodes of the list from position `left` to position `right`, and return the reversed list.

## Examples
- Example 1
   - Input
     ```
     head = [1,2,3,4,5]
     left = 2
     right = 4
     ```
   - Output
     ```
     [1,4,3,2,5]
     ```
   - Explanation

     ![rev2ex2](https://user-images.githubusercontent.com/8989447/114976266-e90e7100-9e42-11eb-9a58-ec12941a8167.jpeg)

## Solutions
- **Solution 1: Recursion**
   - Idea
      - Move forward to the start of the range.
      - When reaching the start of the range, call the function for reversing first N nodes.
  
  ```java
  class Solution {
      public ListNode reverseBetween(ListNode head, int left, int right) {
          if (left == 1) {                                             // base case
              return reverseN(head, right);
          }
          head.next = reverseBetween(head.next, left - 1, right - 1);  // move forward the the position will trigger base case
          return head;
      }

      ListNode successor = null;                                       // get the node next to the range

      ListNode reverseN(ListNode head, int n) {                        // reverse first N nodes
          if (n == 1) {
              successor = head.next;                                   // remember the N+1 node
              return head;
          }
          ListNode last = reverseN(head.next, n - 1);

          head.next.next = head;
          head.next = successor;                                       // link the range to the original successor
          return last;
      }
  }
  ```
