# Climbing Stairs

## Alias
- Leetcode (70): [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)

## Problem
You are climbing a staircase. It takes `n` steps to reach the top.

Each time you can either climb `1` or `2` steps. In how many distinct ways can you climb to the top?

## Examples
- Example 1
   - Input
     ```
     n = 2
     ```
   - Output
     ```
     2
     ```
   - Explanation
      - There are two ways to climb to the top:
         - 1 step + 1 step
         - 2 steps
- Example 2
   - Input
     ```
     n = 3
     ```
   - Output
     ```
     3
     ```
   - Explanation
      - There are three ways to climb to the top.
         - 1 step + 1 step + 1 step
         - 1 step + 2 steps
         - 2 steps + 1 step
       
## Solutions
- **Solution 1: Recursion**
  ```java
  class Solution {
      public int climbStairs(int n) {
          return recursion(0, n);
      }
      public int recursion(int i, int n) {
          if (i > n) {
              return 0;
          }
          if (i == n) {
              return 1;
          }
          return recursion(i + 1, n) + recursion(i + 2, n);
      }
  }
  ```
- **Solution 2: Dynamic programming**
   - Idea
      - One problem can be broken into 2 subproblems
         - `dp[i] = dp[i - 1] + dp[i - 2]`

  ```java
  public int climbStairs(int n) {
      if (n == 1) {
          return 1;
      }
      int[] dp = new int[n + 1];
      dp[1] = 1;
      dp[2] = 2;
      for (int i = 3; i <= n; i++) {
          dp[i] = dp[i - 1] + dp[i - 2];
      }
      return dp[n];
  }
  ```
