# Does Linked List Have Cycle

## Alias
- Leetcode (141): [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/)

## Problem
Check a linked list has a cycle or not.

## Examples
- Example 1: Has cycle

  ![circularlinkedlist](https://github.com/wuyichen24/coding-interview/assets/8989447/830fbc3b-3b06-4a42-93e4-f0a2e23fbbd6)

- Example 2: No cycle

  ![circularlinkedlist_test3](https://github.com/wuyichen24/coding-interview/assets/8989447/a31bba4a-89b4-4cb8-bfc9-82d327b5a3d1)

## Solution 1
- **Solution 1: Hash table**
   - Idea: Use a hash table to remember which node has been visited.
   - Complexity
      - Time complexity: *O(n)*
      - Space complexity: *O(n)*
 
  ```java
  public boolean hasCycle(ListNode head) {
      Set<ListNode> nodesSeen = new HashSet<>();
      while (head != null) {
      if (nodesSeen.contains(head)) {
          return true;
      }
      nodesSeen.add(head);
          head = head.next;
      }
      return false;
  }
  ```
- **Solution 2: Floyd's cycle finding algorithm**
   - Idea:
      - Use fast and slow pointers: The slow pointer moves one step at a time while the fast pointer moves two steps at a time.
      - If the linked list has a cycle, the fast pointer can chase the slow pointer from back (slower racing car that have been lapped by faster racing car).
   - Complexity
      - Time complexity: *O(n)*
      - Space complexity: *O(1)*

  ```java
  public boolean hasCycle(ListNode head) {
      if (head == null) {
          return false;
      }

      ListNode slow = head;
      ListNode fast = head.next;
      while (slow != fast) {
          if (fast == null || fast.next == null) {
              return false;
          }
          slow = slow.next;
          fast = fast.next.next;
      }
      return true;
  }
  ```
