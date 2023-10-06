# Reverse Nodes in k-Group

## Alias
- Leetcode (25): [Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group/)

## Problem
Given the `head` of a linked list, reverse the nodes of the list `k` at a time, and **return the modified list**.

`k` is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of `k` then left-out nodes, in the end, should remain as it is.

You may not alter the values in the list's nodes, only nodes themselves may be changed.

## Examples
- Example 1
   - Input
     ```
     head = [1,2,3,4,5]
     k = 2
     ```
   - Output
     ```
     [2,1,4,3,5]
     ```
   - Explanation

     ![reverse_ex1](https://github.com/wuyichen24/coding-interview/assets/8989447/6a4c93df-9cfa-48dd-aa3d-2afe75816b09)

- Example 2
   - Input
     ```
     head = [1,2,3,4,5]
     k = 3
     ```
   - Output
     ```
     [3,2,1,4,5]
     ```
   - Explanation

     ![reverse_ex2](https://github.com/wuyichen24/coding-interview/assets/8989447/d595b86e-327c-4861-b459-1eb0b2d608a8)

## Solutions
- **Solution 1: Recursion**
   - Idea
      - Reverse first K nodes, and then reverse the rest of list in k-group (sub-problem).
    
        ![2](https://github.com/wuyichen24/coding-interview/assets/8989447/4e1cc657-bd69-4bbb-a7d8-e1e78c59497f)

      - For reversing first K nodes, get the first node and the last node. And then reverse the sublist by those 2 nodes.

        ![8](https://github.com/wuyichen24/coding-interview/assets/8989447/55d03047-ed56-45f6-966c-61a466e386e0)

  ```java
  class Solution {
      public ListNode reverseKGroup(ListNode head, int k) {
          if (head == null) return null;

          // get first node and last node of first k nodes needs to be reversed
         ListNode a, b;
          a = b = head;
          for (int i = 0; i < k; i++) {
              if (b == null) return head;     // if rest of list doesn't have k nodes, no need to reverse (base case)
              b = b.next;
          }
        
          // reverse first k nodes
          ListNode newHead = reverse(a, b);
        
          // reverse the rest list in k-group (subproblem)
          a.next = reverseKGroup(b, k);

          return newHead;
      }

      // reverse nodes in the [a, b) range
      ListNode reverse(ListNode a, ListNode b) {
          ListNode pre, cur, nxt;
          pre = null; cur = a; nxt = a;

          while (cur != b) {
              nxt = cur.next;
              cur.next = pre;
              pre = cur;
              cur = nxt;
          }

          return pre;
      }
  }
  ```

## References
- [labuladong 的算法笔记 | 如何 K 个一组反转链表](https://labuladong.github.io/algo/di-yi-zhan-da78c/shou-ba-sh-8f30d/ru-he-k-ge-d591d/)
