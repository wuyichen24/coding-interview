# Maximum Subarray

## Alias
- Leetcode (53): [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/)

## Problem
Given an integer array `nums`, find the subarray with the largest sum, and return its sum.

## Examples
- Example 1
   - Input
   - Output
   - Explanation
- Example 2
   - Input
   - Output
   - Explanation
- Example 3
   - Input
   - Output
   - Explanation

## Solutions
- **Solution 1: Kadane's Algorithm**
   - Idea:
      - Traverse array from left to right:
         - Calculate the current sum.
         - Compare the current sum with the max sum. Update the max sum if the current sum is larger.
         - If the current sum is negative, no need to keep it (0 > negative), so just set the current sum as 0.
         - If at any point sum becomes negative then no point keeping it because 0 is obviously greater than negative, so just make your sum 0.
   - Time complexity
      - *O(n)*
  ```java
  class Solution {
      public int maxSubArray(int[] nums) {
          int n = nums.length;
          int max = Integer.MIN_VALUE; // max sum
          int sum = 0;
        
          for(int i=0;i<n;i++){
              sum += nums[i];          // calculate current sum.
              max = Math.max(sum,max); // compare current sum with max sum, update max sum if current sum is larger.
            
              if(sum < 0) sum = 0;     // if current sum is negative, just set it as 0.
          }
        
          return max;
      }
  }
  ```

- **Solution 2: My solution**
  ```java
  class Solution {
      public int maxSubArray(int[] nums) {
          if (nums.length == 1) {
              return nums[0];
          }
        
          int maxSum = Integer.MIN_VALUE;
          int curSum = Integer.MIN_VALUE;
        
          for (int i = 0; i < nums.length; i++) {
              if (nums[i] > curSum) {
                  if (curSum < 0) {
                      curSum = nums[i];
                  } else {
                      curSum = curSum + nums[i];
                  }
              } else {
                  curSum = curSum + nums[i];
              }
            
              if (curSum > maxSum) {
                  maxSum = curSum;
              }
          }
        
          return maxSum;
      }
  }
  ```
