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
  /**
   * Definition for singly-linked list.
   * public class ListNode {
   *     int val;
   *     ListNode next;
   *     ListNode() {}
   *     ListNode(int val) { this.val = val; }
   *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
   * }
   */
  class Solution {
      public ListNode mergeKLists(ListNode[] lists) {
          if (lists.length==0) return null;
        
          PriorityQueue<ListNode> queue= new PriorityQueue<ListNode>(lists.length,new Comparator<ListNode>(){
              @Override
              public int compare(ListNode o1,ListNode o2){
                  if (o1.val<o2.val)
                      return -1;
                  else if (o1.val==o2.val)
                      return 0;
                  else 
                      return 1;
              }
          });
        
          ListNode head = new ListNode(0);
          ListNode tail=head;

          // add k nodes to priority queue
          for (ListNode node:lists)
              if (node!=null)
                  queue.add(node);

          // poll the smallest node from priority queue 
          while (!queue.isEmpty()){
              tail.next=queue.poll();  // add the node to the final list
              tail=tail.next;
            
              if (tail.next!=null)
                  queue.add(tail.next);// add the next node of the node to priority queue
          }
          return head.next;
      }
  }
  ```
