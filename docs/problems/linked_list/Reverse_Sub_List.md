# Reverse Sub-list

## Alias
- Leetcode (92): [Reverse Linked List II](https://leetcode.com/problems/reverse-linked-list-ii/)

## Problem
Given the `head` of a singly linked list and two integers `left` and `right` where `left <= right`, reverse the nodes of the list from position `left` to position `right`, and return the reversed list.

![rev2ex2](https://user-images.githubusercontent.com/8989447/114976266-e90e7100-9e42-11eb-9a58-ec12941a8167.jpeg)

## Solutions
- Solution 1: Separate, reverse and merge.
  ```java
  public ListNode reverseBetween(ListNode head, int left, int right) {
      if (head == null || head.next == null) {
          return head;
      }
        
      if (left == right) {
          return head;
      }
        
      ListNode current     = head;
      ListNode leftPreNode = null;
      ListNode leftNode    = null;
      ListNode rightNode   = null;
      ListNode rightNextNode = null;
      int i = 1;
        
      // Get the left node and the previous node of the left node
      if (left == 0) {
          leftNode = head;
      } else {
          while (current.next != null && i < left) {
              current = current.next;
              i++;
          }
            
          leftPreNode = current;
          leftNode = current.next;
      }
        
      // Get the right node and the next node of the right node
      while (current.next != null && i < right) {
          current = current.next;
          i++;
      }
      rightNode = current.next;
      rightNextNode = current.next.next;
        
      // Cut the link between right node and the next node of the right node
      rightNode.next = null;
        
      // Reverse the sub-list
      ListNode newLeftNode = reverseList(leftNode);
        
      // Join the head sub-list list to the reversed middle sub-list
      if (leftPreNode != null) {
          leftPreNode.next = newLeftNode;
      }
        
      // Join the tail sub-list to the reversed middle sub-list
      leftNode.next = rightNextNode;
        
      if (leftPreNode != null) {
          return head;
      } else {
          return newLeftNode;
      }
  }
    
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
