# Min Stack

## Alias
- Leetcode (155): [Min Stack](https://leetcode.com/problems/min-stack/)

## Problem
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:
- `MinStack()` initializes the stack object.
- `void push(int val)` pushes the element `val` onto the stack.
- `void pop()` removes the element on the top of the stack.
- `int top()` gets the top element of the stack.
- `int getMin()` retrieves the minimum element in the stack.

## Note
- Main difference comparing to [Max Stack](Max_Stack.md) is you don't need to remove the minimum value from stack.

## Solutions
- **Solution 1: 2 stacks**
   - Idea
      - Use one stack as a normal stack, use another stack to remember the minimum value when inserting the corresonding value.

  <img width="234" alt="Screenshot 2023-10-30 at 3 11 53 PM" src="https://github.com/wuyichen24/coding-interview/assets/8989447/1598d74e-87b2-473e-bf71-6a22c5b594d9">

  ```java
  class MinStack {
      Stack<Integer> stk = new Stack<>();
      Stack<Integer> minStk = new Stack<>();

      public MinStack() {
        
      }
    
      public void push(int val) {
          stk.push(val);

          // check if new val is the new minimum value 
          // comparing to the current minumum value (top of minStk)
          if (minStk.isEmpty() || val <= minStk.peek()) {
              minStk.push(val);
          } else {
              minStk.push(minStk.peek());
          }
      }
    
      public void pop() {
          stk.pop();
          minStk.pop();
      }
    
      public int top() {
          return stk.peek();
      }
    
      public int getMin() {
          return minStk.peek();
      }
  }
  ```
