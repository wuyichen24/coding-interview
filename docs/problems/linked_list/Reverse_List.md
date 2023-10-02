# Reverse List

## Alias
- Leetcode (206): [Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/)

## Problem
Given the `head` of a singly linked list, **reverse the list, and return the reversed list**.

## Solutions
- Solution 1: 3 pointers.
  ```java
  public ListNode reverseList(ListNode head) {
      if (head == null || head.next == null) {
          return head; 
      }
        
      ListNode originalHead = head;
      ListNode p1 = head;
      ListNode p2 = head.next;
      ListNode p3 = head.next.next;
        
      while (p3 != null) {
          p2.next = p1;
          p1 = p2;
          p2 = p3;
          p3 = p3.next;
      }
        
      p2.next = p1;
      originalHead.next = null;
        
      return p2;
  }
  ```
