# Maximum Product Subarray

## Alias
- Leetcode (152): [Maximum Product Subarray](https://leetcode.com/problems/maximum-product-subarray/)

## Problem
Given an integer array `nums`, find a subarray that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.

## Examples
- Example 1
   - Input
     ```
     [2,3,-2,4]
     ```
   - Output
     ```
     6
     ```
   - Explanation
      - `[2,3]` has the largest product `6`.
- Example 2
   - Input
     ```
     [-2,0,-1]
     ```
   - Output
     ```
     0
     ```
   - Explanation
      - The result cannot be `2`, because `[-2,-1]` is not a subarray.

## Solutions
- Solution 1: Brute force
   - Idea
      - Get all the possible subarrays and check the maximal product.

  ```java
  public int maxProduct(int[] nums) {
      if (nums.length == 0) return 0;

      int result = nums[0];

      for (int i = 0; i < nums.length; i++) {
          int accu = 1;
          for (int j = i; j < nums.length; j++) {
              accu *= nums[j];
              result = Math.max(result, accu);
          }
      }

      return result;
  }
  ```
- Solution 2: Prefix product and suffix product
   - Idea
      - Calculate prefix product in array.
      - Calculate suffix product in array.
      - Return the max.
    
  ```java
  public int maxProduct(int[] nums) {
      int n = nums.length, res = nums[0], l = 0, r = 0;
      for (int i = 0; i < n; i++) {
          l =  (l == 0 ? 1 : l) * nums[i];
          r =  (r == 0 ? 1 : r) * nums[n - 1 - i];
          res = Math.max(res, Math.max(l, r));
      }
      return res;
  }
  ```
- Solution 3: Dynamic programming

  ```java
  public int maxProduct(int[] nums) {
      if (nums.length == 0) return 0;

      int maxSoFar = nums[0];   // keep track of the maximum product up to that number
      int minSoFar = nums[0];   // keep track of the minimum product up to that number
      int result = maxSoFar;

      for (int i = 1; i < nums.length; i++) {
          int curr = nums[i];
          int tempMax = Math.max(curr, Math.max(maxSoFar * curr, minSoFar * curr));
          minSoFar = Math.min(curr, Math.min(maxSoFar * curr, minSoFar * curr));
          maxSoFar = tempMax;

          result = Math.max(maxSoFar, result);
      }

      return result;
  }
  ```
  
