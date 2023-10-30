# Swap Every 2 Nodes In List

## Alias
- Leetcode (24): [Swap Nodes in Pairs](https://leetcode.com/problems/swap-nodes-in-pairs/)

## Problem
Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

## Examples
- Example 1
   - Input
     ```
     [1,2,3,4]
     ```
   - Output
     ```
     [2,1,4,3]
     ```
   - Explanation

     ![swap_ex1](https://github.com/wuyichen24/coding-interview/assets/8989447/2c9727e7-250b-4687-88a3-f69e55765207)

## Solutions
- **Solution 1: 2 pointers**
   - Idea
      - Remember the 2nd node of the previous pair (`last`) and the 1st node of the next pair (temp). Use them to link the current pair with the previous pair and the next pair.

  ```java
  public ListNode swapPairs(ListNode head) {
      if (head == null || head.next == null) {
          return head;
      }

      ListNode n1 = head;
      ListNode n2 = head.next;

      ListNode newHead = n2;
      ListNode last = null;           // save the 2nd node of the previous pair

      while (n1 != null && n2 != null) {
          if (last != null) {
              last.next = n2;         // link the previous pair with the current pair
          }
            
          ListNode temp = n2.next;    // save the 1st node of the next pair
          n2.next = n1;
          n1.next = temp;

          last = n1;
          n1 = temp;                  // link the next pair with the current pair
          if (n1 != null) {
              n2 = n1.next;
          }
      }

      return newHead;
  }
  ```
