# Get Node Where Cycle Begins In List

## Alias
- Leetcode (142): [Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii/)

## Problem
Given the `head` of a linked list, **return the node where the cycle begins**. If there is no cycle, return `null`.

## Examples
- Example 1
   - Input
     ```
     head = [3,2,0,-4]
     ```
   - Output
     ```
     ListNode = 2
     ```
   - Explanation

     ![circularlinkedlist (1)](https://github.com/wuyichen24/coding-interview/assets/8989447/7badf8f4-a927-4f6d-950d-d09724d84917)

## Solutions
- **Solution 1: Floyd's cycle finding algorithm**
   - Idea
       - Use fast and slow pointers: The slow pointer moves one step at a time while the fast pointer moves two steps at a time.
       - When fast and slow pointers 1st met, let any pointer start from the head again.
       - When fast and slow pointers 2nd met, the position will be the begin of the cycle.
   - Explanation
       - When fast and slow pointers 1st met, slow pointer takes `k` steps, fast pointer takes `2k` steps.
       - If the distance between the 1st met position and the cycle begin position is `m` steps, so the distance between the head and the cycle begine position is `k - m` steps.
       - If any pointer goes `k - m` steps from the 1st met position, it will reach the cycle begin too.
       - So you can see there are 2 same `k - m` steps in 2 above operations, so the conclusion is "When fast and slow pointers 1st met, let any pointer start from the head again. When fast and slow pointers 2nd met, the position will be the begin of the cycle."
          
