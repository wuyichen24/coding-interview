# Merge k Sorted Lists

## Alias
- Leetcode (23): [Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/)

## Problem
You are given an array of `k` linked-lists `lists`, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

## Examples
- Example 1
   - Input
     ```
     lists = [[1,4,5],[1,3,4],[2,6]]
     ```
   - Output
     ```
     [1,1,2,3,4,4,5,6]
     ```
   - Explanation
      - The linked-lists are:
        ```
        [
          1->4->5,
          1->3->4,
          2->6
        ]
        ```
      - Merge them into one sorted list:
        ```
        1->1->2->3->4->4->5->6
        ```

## Solutions
- **Solution 1: Priority queue**
   - Idea
      - Define a priority queue (pq) of head nodes, let the pq always return the smallest head node among k linked lists.
   - Steps
      - Define a priority queue of `ListNode` to store k head nodes.
      - Define the sorting order by comparing the value of `ListNode`.
      - Add all the k `ListNode`s to the priority queue.
      - While the priority queue is not empty:
         - Poll the `ListNode` (the smallest) from pq.
         - Add the `ListNode` to the final linked list.
         - Add the next node of the `ListNode` to the priority queue. 

  ```java
  ListNode mergeKLists(ListNode[] lists) {
      if (lists.length == 0) return null;
    // 虚拟头结点
      ListNode dummy = new ListNode(-1);     // create a new dummy head node
      ListNode p = dummy;

      PriorityQueue<ListNode> pq =           // create a new priority queue
          new PriorityQueue<>(lists.length,
          (a, b)->(a.val - b.val));

      for (ListNode head : lists) {          // push k head nodes into priority queue
          if (head != null)
              pq.add(head);
      }

      while (!pq.isEmpty()) {
          ListNode node = pq.poll();         // always get the smallest head node from priority queue
          p.next = node;
          if (node.next != null) {           // after merging, add the next node into priority queue
              pq.add(node.next);
          }
          p = p.next;
      }
      return dummy.next;
  }
  ```
