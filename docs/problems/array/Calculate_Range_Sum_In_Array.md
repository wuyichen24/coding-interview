# Calculate Range Sum in Array

## Alias
- Leetcode (303): [Range Sum Query - Immutable](https://leetcode.com/problems/range-sum-query-immutable/)

## Problem
Given an integer array `nums`, handle multiple queries of the following type:
- Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.

Implement the NumArray class:
- `NumArray(int[] nums)`: Initializes the object with the integer array `nums`.
- `int sumRange(int left, int right)`: Returns the sum of the elements of nums between indices `left` and `right` inclusive (i.e. `nums[left] + nums[left + 1] + ... + nums[right]`).

## Examples
- Example 1
   - Input
     ```
     ["NumArray", "sumRange", "sumRange", "sumRange"]
     [[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
     ```
   - Output
     ```
     [null, 1, -1, -3]
     ```
   - Explanation
      - `NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);`
      - `numArray.sumRange(0, 2); // return (-2) + 0 + 3 = 1`
      - `numArray.sumRange(2, 5); // return 3 + (-5) + 2 + (-1) = -1`
      - `numArray.sumRange(0, 5); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3`

## Solutions
- **Solution 1: Prefix sum array**
   - Idea
      - `NumArray()`: Build up the prefix sum array.
         - `prefixSum[i] = prefixSum [i-1] + input[i]`
      - `sumRange()`: Calculate the range sum by prefix sum array.
         - The sum of range `[i, j]` of the input array: `prefixSum[j] - prefixSum[i-1]`
       
  ```java
  class NumArray {
      private int[] preSum;

      public NumArray(int[] nums) {
          preSum = new int[nums.length + 1];

          for (int i = 1; i < preSum.length; i++) {
              preSum[i] = preSum[i - 1] + nums[i - 1];
          }
      }
    
      public int sumRange(int left, int right) {
          return preSum[right + 1] - preSum[left];
      }
  }
  ```
