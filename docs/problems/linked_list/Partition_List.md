# Partition List

## Alias
- Leetcode (86): [Partition List](https://leetcode.com/problems/partition-list/)

## Problem
Given the `head` of a linked list and a value `x`, **partition it such that all nodes less than `x` come before nodes greater than or equal to `x`**.

You should preserve the original relative order of the nodes in each of the two partitions.

## Examples
- Example 1
   - Input
     ```
     head = [1,4,3,2,5,2]
     x = 3
     ```
   - Output
     ```
     [1,2,2,4,3,5]
     ```
   - Explanation
 
     ![partition](https://github.com/wuyichen24/coding-interview/assets/8989447/240a67ed-c083-477f-b948-afc182bda1e2)

## Solutions
- **Solution 1: Split list to 2 lists**
   - Idea
      - Create 2 linked lists, one list store the nodes which are less than `x`, another list store the nodes which are greater than or equal to `x`.
      - Merge 2 linked lists as one list.
    
  ```java
  public ListNode partition(ListNode head, int x) {
      ListNode dummy1 = new ListNode(-1);  // dummy head node for new list (node < x)
      ListNode dummy2 = new ListNode(-1);
      ListNode p1 = dummy1, p2 = dummy2;
      ListNode p = head;

      while (p != null) {
          if (p.val >= x) {
              p2.next = p;
              p2 = p2.next;
          } else {
              p1.next = p;
              p1 = p1.next;
          }

          ListNode temp = p.next;          // clean the next pointer of current node p
          p.next = null;
          p = temp;
      }

      p1.next = dummy2.next;               // merge 2 lists

      return dummy1.next;
  }
  ```
