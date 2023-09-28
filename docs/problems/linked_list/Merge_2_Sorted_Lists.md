# Merge 2 Sorted Lists

## Alias
- Leetcode (21): [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)

## Problem
You are given the heads of two sorted linked lists `list1` and `list2`.

**Merge the two lists into one sorted list**. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

## Examples
- Example 1
   - Input
     ```
     list1 = [1,2,4], list2 = [1,3,4]
     ```
   - Output
     ```
     [1,1,2,3,4,4]
     ```
   - Explanation

     ![merge_ex1](https://github.com/wuyichen24/coding-interview/assets/8989447/74d63c60-94a1-44af-b173-d45db6d879ac)

## Solutions
- **Solution 1: 2 pointers**
   - Idea
      - Compare the heads of 2 linked list, merge the smaller one first.
      - Create the dummy head node for the new merged linked list, it is for simplifying the code.

  ```java
  public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
      ListNode dummy = new ListNode(-1);  // the dummy head of new linked list
      ListNode p = dummy;                 // p is pointer for new linked list
      ListNode p1 = l1, p2 = l2;          // p1 and p2 are the pointers for 2 linked lists needs to be merged.

      while (p1 != null && p2 != null) {  // compare p1 and p2, only merge the smaller one to p     
          if (p1.val > p2.val) {
              p.next = p2;
              p2 = p2.next;
          } else {
              p.next = p1;
              p1 = p1.next;
          }
          p = p.next;
      }

      if (p1 != null) {
          p.next = p1;
      }

      if (p2 != null) {
          p.next = p2;
      }

      return dummy.next;   // the next node of the dummy head node is the real head of new linked list
  }
  ```
