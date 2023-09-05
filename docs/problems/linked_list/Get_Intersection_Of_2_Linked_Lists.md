# Get Intersection of 2 Linked Lists

## Alias
- Leetcode (160): [Intersection of Two Linked Lists](https://leetcode.com/problems/intersection-of-two-linked-lists/description/)

## Problem
Given the heads of two singly linked-lists `headA` and `headB`, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return `null`.

- For example, the following two linked lists begin to intersect at node `c1`:

  ![160_statement](https://github.com/wuyichen24/coding-interview/assets/8989447/e09a825a-0d06-4daa-89ac-4ea23acbc5ff)

## Examples
- Example 1
   - Input
     ```
     listA = [4,1,8,4,5]
     listB = [5,6,1,8,4,5]
     ```
   - Output
     ```
     8
     ```
   - Explanation

     ![160_example_1_1](https://github.com/wuyichen24/coding-interview/assets/8989447/03ebe864-2c64-44f2-9f0d-dd530108bc20)
     
- Example 2
   - Input
     ```
     listA = [1,9,1,2,4]
     listB = [3,2,4]
     ```
   - Output
     ```
     2
     ```
   - Explanation
 
     ![160_example_2](https://github.com/wuyichen24/coding-interview/assets/8989447/1ab023d5-5028-4dee-8aca-284858f1e34e)

- Example 3
   - Input
     ```
     listA = [2,6,4]
     listB = [1,5]
     ```
   - Output
     ```
     null
     ```
   - Explanation

     ![160_example_3](https://github.com/wuyichen24/coding-interview/assets/8989447/1cf654c8-b328-4a6f-b0c6-0bc2eed89fba)

## Solutions
- Solution 1: 2 pointers
   - Steps
      - Set pointer `pA` to point at `headA`.
      - Set pointer `pB` to point at `headB`.
      - While `pA` and `pB` are not pointing at the same node:
         - If `pA` is pointing to a `null`, set `pA` to point to `headB`.
            - Else, set `pA` to point at `pA.next`.
         - If `pB` is pointing to a `null`, set `pB` to point to `headA`.
            - Else, set `pB` to point at `pB.next`.
      - Return the value pointed to by `pA` (or by `pB`; they're the same now).
    
  ```java
  public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
      ListNode pA = headA;
      ListNode pB = headB;
      while (pA != pB) {
          pA = pA == null ? headB : pA.next;
          pB = pB == null ? headA : pB.next;
      }
      return pA;
  }
  ```
