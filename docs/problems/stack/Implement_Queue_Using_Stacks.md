# Implement Queue using Stacks

## Alias
- Leetcode (232): [Implement Queue using Stacks](https://leetcode.com/problems/implement-queue-using-stacks/)

## Problem
**Implement a first in first out (FIFO) queue using only two stacks**. The implemented queue should support all the functions of a normal queue (`push`, `peek`, `pop`, and `empty`).

Implement the MyQueue class:
- `void push(int x)` Pushes element x to the back of the queue.
- `int pop()` Removes the element from the front of the queue and returns it.
- `int peek()` Returns the element at the front of the queue.
- `boolean empty()` Returns true if the queue is empty, false otherwise.

Notes:
- You must use only standard operations of a stack, which means only `push to top`, `peek/pop from top`, `size`, and `is empty` operations are valid.

## Solutions
- **Solution 1: Using 2 stacks**
   - Idea
      - Using 2 stacks
      - For `peek()` and `pop()`, move all the elements from the 1st stack to the 2nd stack and then return the top of the 2nd stack.

  ```java
  class MyQueue {
      private Stack<Integer> s1, s2;

      public MyQueue() {
          s1 = new Stack<>();
          s2 = new Stack<>();
      }

      public void push(int x) {
          s1.push(x);
      }

      public int pop() {
          peek();
          return s2.pop();
      }

      public int peek() {
          if (s2.isEmpty())
              while (!s1.isEmpty())    // move all the elements from the 1st stack to the 2nd stack
                  s2.push(s1.pop());
          return s2.peek();
      }


      public boolean empty() {
          return s1.isEmpty() && s2.isEmpty();
      }
  }
  ```
