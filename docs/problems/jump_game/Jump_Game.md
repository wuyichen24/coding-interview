# Jump Game

## Alias
- Leetcode (55): [Jump Game](https://leetcode.com/problems/jump-game/)

## Problem
You are given an integer array `nums`. You are initially positioned at the array's **first index**, and each element in the array represents your maximum jump length at that position.

Return `true` if you can reach the **last index**, or `false` otherwise.

## Examples
- Example 1
   - Input
     ```
     [2,3,1,1,4]
     ```
   - Output
     ```
     true
     ```
   - Explanation
      - Jump 1 step from index 0 to 1, then 3 steps to the last index.
- Example 2
   - Input
     ```
     [3,2,1,0,4]
     ```
   - Output
     ```
     false
     ```
   - Explanation
     ```
     You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
     ```

## Solutions
- Solution 1: Jump backwards
   - Idea
      - Jump backwards from the last index
      - Keep track of the smallest index that can "jump" to the last index.
      - Check whether the current index can jump to this smallest index.

  ```java
  public boolean canJump(int[] nums) {
      int last=nums.length - 1;
      for(int i = nums.length - 2 ;i >= 0; i--){
          if(i+nums[i]>=last) last = i;
      }
      return last<=0;
  }
  ```
- Solution 2: Backtracking

  ```java
  class Solution {
      public boolean canJump(int[] nums) {
          return canJumpFromPosition(0, nums);
      }

      public boolean canJumpFromPosition(int position, int[] nums) {
          if (position == nums.length - 1) {
              return true;
          }

          int furthestJump = Math.min(position + nums[position], nums.length - 1);
          for (int nextPosition = position + 1; nextPosition <= furthestJump; nextPosition++) {
              if (canJumpFromPosition(nextPosition, nums)) {
                  return true;
              }
          }

          return false;
      }
  }
  ```
