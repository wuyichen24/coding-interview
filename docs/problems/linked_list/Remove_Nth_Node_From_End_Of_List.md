# Remove Nth Node From End of List

## Alias
- Leetcode (19): [Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)

## Problem
Given the `head` of a linked list, **remove the `nth` node from the end of the list and return its head**.

## Examples
- Example 1
   - Input
     ```
     head = [1,2,3,4,5]
     n = 2
     ```
   - Output
     ```
     [1,2,3,5]
     ```
   - Explanation

     ![remove_ex1](https://github.com/wuyichen24/coding-interview/assets/8989447/588f4928-b958-4c73-946f-a9f495181367)

## Solutions
- **Soluton 1: 2 pointers**
   - Idea
      - Get the Nth node from the end:
         - Use 2 pointers, keep the distance of those 2 pointers as `N`, let both pointers move toward the end. If one pointer is reaching the end, another one is pointing to the Nth node from the end.
      - Logic for the problem:
         - Get the (N+1)th node from the end, and then remove the Nth node from the end.

  ```java
  class Solution {
      public ListNode removeNthFromEnd(ListNode head, int n) {
          ListNode dummy = new ListNode(-1);
          dummy.next = head;

          ListNode x = findFromEnd(dummy, n + 1);  // get (n+1)th node from the end

          x.next = x.next.next;                    // remove nth node from the end
          return dummy.next;
      }

      ListNode findFromEnd(ListNode head, int k) {
          ListNode p1 = head;
          ListNode p2 = head;
 
          for (int i = 0; i < k; i++) {   // let p1 move k steps first
              p1 = p1.next;
          }
        
          while (p1 != null) {            // let p1 and p2 move toward the end
              p2 = p2.next;
              p1 = p1.next;
          }

          return p2;                      // when p1 reaches the end, the p2 points to the kth node from the end
      }
  }
  ```
