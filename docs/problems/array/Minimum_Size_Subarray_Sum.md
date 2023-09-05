# Minimum Size Subarray Sum

## Alias
- Leetcode (209): [Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/)

## Problem
Given an array of positive integers `nums` and a positive integer `target`, return **the minimal length of a subarray** whose sum is greater than or equal to `target`. If there is no such subarray, return `0` instead.

## Examples
- Example 1
   - Input
     ```
     nums = [2,3,1,2,4,3]
     target = 7
     ```
   - Output
     ```
     2
     ```
   - Explanation
      - The subarray `[4,3]` has the minimal length under the problem constraint.
- Example 2
   - Input
     ```
     nums = [1,4,4]
     target = 4
     ```
   - Output
     ```
     1
     ```
- Example 3
   - Input
     ```
     nums = [1,1,1,1,1,1,1,1]
     target = 11
     ```
   - Output
     ```
     0
     ```

## Solutions
- Solution 1: 2 pointers
   - Idea
      - Use 2 pointers to track the start and the end of the current subarray.
      - When the current sum is greater than the target, make a optimal move.

  ```java
  public int minSubArrayLen(int target, int[] nums) {
      int sum = 0, from = 0, minLength = Integer.MAX_VALUE;
      for (int i = 0; i < nums.length; i++) {
          sum += nums[i];
          while (sum >= target) {
              minLength = Math.min(minLength, i - from + 1);
              sum -= nums[from++];
          }
      }
      return (minLength == Integer.MAX_VALUE) ? 0 : minLength;
  }
  ```
