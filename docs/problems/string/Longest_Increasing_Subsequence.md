# Longest Increasing Subsequence

## Alias
- Leetcode (300): [Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/)

## Problem
Given an integer array nums, **return the length of the longest strictly increasing subsequence**.

## Examples
- Example 1
   - Input
     ```
     [10,9,2,5,3,7,101,18]
     ```
   - Output
     ```
     4
     ```
   - Explanation
      - The longest increasing subsequence is `[2,3,7,101]`
- Example 2
   - Input
     ```
     [0,1,0,3,2,3]
     ```
   - Output
     ```
     4
     ```
   - Explanation
      - The longest increasing subsequence is `[0,1,2,3]`
- Example 3
   - Input
     ```
     [7,7,7,7,7,7,7]
     ```
   - Output
     ```
     1
     ```
   - Explanation
      - The longest increasing subsequence is `[7]`

## Solutions
- **Solution 1: Dynamic programming**
   - Idea
      - `dp[i]` means the length of the longest increasing subsequence from `nums[0 ... i]`.
      - Initialize each element in the `dp` array as `1`
         - The longest increasing subsequence should include the current element `nums[i]` itself.
      - The final result should be the maximum value amoung the `dp` array.
      - State transition equation
         - For `dp[i]`, find all the numbers which is less than `nums[i]` in the range of `nums[0 ... i-1]`.
         - The `dp[i]` will be `max(dp[j]) + 1` (conditions: 1. `j` from `0` to `i-1` 2. `nums[j] < nums[i]`).

           ```
           for (j from 0 to i-1):
               if (nums[i] > nums[j]):
                   dp[i] = max(dp[i], dp[j] + 1)
           ```

  ```java
  ```
