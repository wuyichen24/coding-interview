# Jump Game II

## Alias
- Leetcode (55): [Jump Game II](https://leetcode.com/problems/jump-game-ii/)

## Problem
You are given an integer array `nums`. You are initially positioned at the array's **first index**, and each element in the array represents your maximum jump length at that position.

Return the minimum number of jumps to reach the **last index**

## Examples
- Example 1
   - Input
     ```
     [2,3,1,1,4]
     ```
   - Output
     ```
     2
     ```
   - Explanation
      - Jump 1 step from index 0 to 1, then 3 steps to the last index.
- Example 2
   - Input
     ```
     [2,3,0,1,4]
     ```
   - Output
     ```
     2
     ```
   - Explanation
      - Jump 1 step from index 0 to 1, jump 2 from index 1 to last.

## Solutions
- Solution 1: Greedy

  ```java
  public int jump(int[] nums) {
      // The starting range of the first jump is [0, 0]
      int answer = 0, n = nums.length;
      int curEnd = 0, curFar = 0;
        
      for (int i = 0; i < n - 1; ++i) {
          // Update the farthest reachable index of this jump.
          curFar = Math.max(curFar, i + nums[i]);

          // If we finish the starting range of this jump,
          // Move on to the starting range of the next jump.
          if (i == curEnd) {
              answer++;
              curEnd = curFar;
          }
      }
        
      return answer;
  }
  ```
