# Split Array And Minimize Sum Of Subarray

## Alias
- Leetcode (410): [Split Array Largest Sum](https://leetcode.com/problems/split-array-largest-sum/)

## Problem
Given an integer array `nums` and an integer `k`, split `nums` into `k` non-empty subarrays such that the largest sum of any subarray is minimized.

Return the minimized largest sum of the split.

## Examples
- Example 1
   - Input
     ```
     nums = [7,2,5,10,8]
     k = 2
     ```
   - Output
     ```
     18
     ```
   - Explanation
      - There are four ways to split nums into two subarrays.
      - The best way is to split it into `[7,2,5]` and `[10,8]`, where the largest sum among the two subarrays is only `18`.
- Example 2
   - Input
     ```
     nums = [1,2,3,4,5]
     k = 2
     ```
   - Output
     ```
     9
     ```
   - Explanation
      - There are four ways to split nums into two subarrays.
      - The best way is to split it into `[1,2,3]` and `[4,5]`, where the largest sum among the two subarrays is only 9.

## Solutions
- **Solution 1: Binary search**
   - Idea
      - The problem is same with [Capacity To Ship Packages Within D Days](../other/Capacity_To_Ship_Packages_Within_D_Days.md)
         - There package weights array `nums`. The `ith` package has a weight of `nums`. You need to ship all those packages within `k` days. What is the least weight capacity of the ship?

  ```java
  class Solution {
      public int splitArray(int[] nums, int k) {
          return shipWithinDays(nums, k);
      }

      public int shipWithinDays(int[] weights, int days) {
          int left = 0;
          int right = 0;
          for (int w : weights) {
              left = Math.max(left, w);   // max among weights
              right += w;                 // sum of weights
          }

          while (left <= right) {
              int mid = left + (right - left) / 2;
              if (f(weights, mid) <= days) {
                  right = mid - 1;
              } else {
                  left = mid + 1;
              }
          }

          return left;
      }

      public int f(int[] weights, int x) {
          int days = 0;
          for (int i = 0; i < weights.length; ) {
              int cap = x;
              while (i < weights.length) {
                  if (cap < weights[i]) break;
                  else cap -= weights[i];
                  i++;
              }
              days++;
          }
          return days;
      }
  }
  ```
