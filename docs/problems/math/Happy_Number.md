# Happy Number

## Alias
- Leetcode (202): [Happy Number](https://leetcode.com/problems/happy-number/)

## Problem
Write an algorithm to determine if a number `n` is happy.

A **happy number** is a number defined by the following process:

- Starting with any positive integer, replace the number by the sum of the squares of its digits.
- Repeat the process until the number equals 1 (where it will stay), or it **loops endlessly in a cycle** which does not include 1.
- Those numbers for which this process **ends in 1** are happy.

Return true if n is a happy number, and false if not.

## Examples
- Example 1
   - Input
     ```
     19
     ```
   - Output
     ```
     true
     ```
   - Explanation
      - 1<sup>2</sup> + 9<sup>2</sup> = 82
      - 8<sup>2</sup> + 2<sup>2</sup> = 68
      - 6<sup>2</sup> + 8<sup>2</sup> = 100
      - 1<sup>2</sup> + 0<sup>2</sup> + 0<sup>2</sup> = 1
- Example 2
   - Input
     ```
     7
     ```
   - Output
     ```
     true
     ```
   - Explanation

     ![image1](https://github.com/wuyichen24/coding-interview/assets/8989447/82ddf1a4-6e9b-470b-83aa-4c85c6e7c7c5)
     
- Example 1
   - Input
     ```
     116
     ```
   - Output
     ```
     false
     ```
   - Explanation
 
     ![image2](https://github.com/wuyichen24/coding-interview/assets/8989447/f72dbd81-d217-4ab3-bf35-149aab5e9d62)

## Solutions
- **Solution 1: Hashset to detect cycle**
   - Idea
      - Use hashset to remember which value has been visited.
   - Complexity
      - Time complexity: *O(logn)*
  ```java
  class Solution {
      public boolean isHappy(int n) {
          Set<Integer> seen = new HashSet<>();
          while (n != 1 && !seen.contains(n)) {
              seen.add(n);
              n = getNext(n);
          }
          return n == 1;
      }
      private int getNext(int n) {
          int totalSum = 0;
          while (n > 0) {
              int d = n % 10;
              n = n / 10;
              totalSum += d * d;
          }
          return totalSum;
      }
  }
  ```
- **Solution 2: Floyd's cycle-finding algorithm**
   - Idea
      - Use fast and slow pointers: The slow pointer moves one step at a time while the fast pointer moves two steps at a time.
      - If the linked list has a cycle, the fast pointer can chase the slow pointer from back (slower racing car that have been lapped by faster racing car).

  ```java
  class Solution {
      public boolean isHappy(int n) {
          int slowRunner = n;
          int fastRunner = getNext(n);
          while (fastRunner != 1 && slowRunner != fastRunner) {
              slowRunner = getNext(slowRunner);
              fastRunner = getNext(getNext(fastRunner));
          }
          return fastRunner == 1;
      }
  
      public int getNext(int n) {
          int totalSum = 0;
          while (n > 0) {
              int d = n % 10;
              n = n / 10;
              totalSum += d * d;
          }
          return totalSum;
      }
  }
  ```
