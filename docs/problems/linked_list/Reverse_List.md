# Reverse List

## Alias
- Leetcode (206): [Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/)

## Problem
Given the `head` of a singly linked list, **reverse the list, and return the reversed list**.

## Solutions
- **Solution 1: 3 pointers**
   - Idea
      - Let the middle pointer point (p2) to the previous one (p1).
    
        ![Reverse_List drawio](https://github.com/wuyichen24/coding-interview/assets/8989447/5ba64fe8-89bd-481a-beeb-651ca5bebb3e)

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

- **Solution 2: Recursion**
   - Explanation
     - After `reverse(head.next)`
       
       ![3](https://github.com/wuyichen24/coding-interview/assets/8989447/d25d11fd-db50-4d53-a43d-2f996d725786)

     - After `head.next.next = head`

       ![4](https://github.com/wuyichen24/coding-interview/assets/8989447/29f2b446-c345-48c3-b3a0-9110c29a8f57)

     - After `head.next = null;`
    
       ![5](https://github.com/wuyichen24/coding-interview/assets/8989447/5fb0490e-8da3-492e-a67c-40d1f38ebe6c)

  ```
  ListNode reverse(ListNode head) {
      if (head == null || head.next == null) {
          return head;
      }
      ListNode last = reverse(head.next);
      head.next.next = head;
      head.next = null;

      return last;
  }
  ```
