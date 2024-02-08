# Moving Average

## Alias
- Leetcode (346): [Moving Average from Data Stream](https://leetcode.com/problems/moving-average-from-data-stream/)

## Problem
Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.

Implement the `MovingAverage` class:

- `MovingAverage(int n)`: Initializes the object with the size of the window size.
- `void put(int val)`: Add a new value
- `double movingAverage()`: Calculate the current moving average.

## Solutions
- **Solution 1: Queue**
   - Idea
      - Use a queue to capture the elements in the window.
      - Use a variable to store the sum of elements in the window
      - Iteratively calculate MA by subtracting the element which is exiting the window and adding the new element entering the window.

  ```java
  public class MovingAverage {
      public int size;
      public Queue<Integer> queue;
      public double sum;

      public MovingAverage(int n) {
          size = n;
          queue = new LinkedList<Integer>();
          sum = 0;
      }

      public void put(int val) {
          if (queue.size() == size) {
              sum = sum - queue.remove();
          }
          queue.add(val);
          sum = sum + val;
      }

      public double movingAverage() {
          if (q.size() == 0) {
              return 0;
          }
          return sum / q.size();
      }
  }
  ```
