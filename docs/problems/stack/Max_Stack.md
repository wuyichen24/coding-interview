# Max Stack

## Alias
- Leetcode (716): [Max Stack](https://leetcode.com/problems/max-stack/)

## Problem
Design a max stack data structure that supports the stack operations and supports finding the stack's maximum element.

Implement the MaxStack class:
- `MaxStack()` Initializes the stack object.
- `void push(int x)` Pushes element `x` onto the stack.
- `int pop()` Removes the element on top of the stack and returns it.
- `int top()` Gets the element on the top of the stack without removing it.
- `int peekMax()` Retrieves the maximum element in the stack without removing it.
- `int popMax()` Retrieves the maximum element in the stack and removes it. If there is more than one maximum element, only remove the top-most one.

## Note
- Main difference comparing to [Min Stack](Min_Stack.md) is you need to remove the maximum value from stack.

## Solutions
- **Solution 1: Double linked list + TreeMap**
   - Need to consider following cases:
       - After getting the maximum value, you need to know what is the next maximum value.
       - It is possible that the input has duplicated values, especially duplicated maximum value.
   - Idea
      - Use double linked list to store the elements, the node next to the tail node will be the top element of the stack.
      - Use `TreeMap` to store:
         - Key is the value sorted by increasing order, value will be list of nodes which has that value.

  ![Max_Stack drawio](https://github.com/wuyichen24/coding-interview/assets/8989447/f8e2004b-5d2b-494f-93c8-c5e37037cd14)

  ```java
  class MaxStack {
      private static class ListNode {
          public ListNode prev, next;
          public int value;
        
          public ListNode(int val) {
              this.value = val;
          }
      }

      ListNode head, tail;
      TreeMap<Integer, LinkedList<ListNode>> map; 

      public MaxStack() {
          head = new ListNode(0);
          tail = new ListNode(0);
          head.next = tail;
          tail.prev = head;
          map  = new TreeMap<>();
      }
    
      public void push(int x) {
          ListNode node = new ListNode(x);

          node.next = tail;
          tail.prev.next = node;
          node.prev = tail.prev;
          tail.prev = node;

          map.putIfAbsent(x, new LinkedList<>());
          map.get(x).add(node);
      }
    
      public int pop() {
          if (head.next == tail) {
              return 0;
          }

          ListNode last = tail.prev;
          deleteNode(last);

          map.get(last.value).removeLast();
          if (map.get(last.value).isEmpty()) {
              map.remove(last.value);
          }
          return last.value;
      }
    
      public int top() {
          return tail.prev.value;
      }
    
      public int peekMax() {
          return map.lastKey();
      }
    
      public int popMax() {
          int max = peekMax();
          ListNode node = map.get(max).removeLast();
          deleteNode(node);
          if (map.get(max).isEmpty()) {
              map.remove(max);
          }
          return max;
      }

      private void deleteNode(ListNode node) {
          node.prev.next = node.next;
          node.next.prev = node.prev;
      }
  }
  ```
