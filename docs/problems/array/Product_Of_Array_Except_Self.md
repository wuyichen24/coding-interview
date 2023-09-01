# Product of Array Except Self

## Alias
- Leetcode (238): [Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/)

## Problem
Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`.

You must write an algorithm that runs in `O(n)` time and without using the division operation.

## Examples
- Example 1
   - Input
     ```
     [1,2,3,4]
     ```
   - Output
     ```
     [24,12,8,6]
     ```
- Example 2
   - Input
     ```
     [-1,1,0,-3,3]
     ```
   - Output
     ```
     [0,0,9,0,0]
     ```

## Solutions
- Solution 1: Prefix product and suffix product
   - Idea
      - Calculate the prefix product of each element and add it to the final result array.
      - Calculate the suffix product of each element and combine it to the final result array.

  ```java
  public int[] productExceptSelf(int[] nums) {
      int n = nums.length;
      int[] res = new int[n];
      res[0] = 1;

      // build prefix product array
      for (int i = 1; i < n; i++) {
          res[i] = res[i - 1] * nums[i - 1];
      }
      int right = 1;

      // calculate the suffix product of each element (all product on the right)
      for (int i = n - 1; i >= 0; i--) {
          res[i] *= right;
          right *= nums[i];
      }
      return res;
  }
  ```
