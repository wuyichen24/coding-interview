# City Generator

## Problem
Given a list of city names and their corresponding populations, write a program to output a city name subject to the following constraint: the probability of the program to output a city's name is based on its population divided by the sum of all cities' population. Assume the program will be repeatedly called many times.

For example:
- NY: 7M
- SF: 5M
- LA: 8M

The probability to generate NY is 7/20, SF is 5/20 and LA 8/20.

## Solutions
- **Solution 1: Prefix sum array + binary search**
   - Idea
      - Use prefix sum array and binary search to build a random generator.
   - Steps
      - Constructor
         - Build a prefix sum array and shift one position for `preSum[0]`
      - Generator
         - Generate a random number between `[1,preSum[n-1])`.
         - Use binary search to find minimum `i` which `preSum[i] >` target.
           
  ```java
  class Solution {
      private int[] preSum;
      private Random rand = new Random();

      public Solution(int[] w) {
          int n = w.length;
          // build prefix sum array, shift one position for preSum[0]
          preSum = new int[n + 1];
          preSum[0] = 0;
          // preSum[i] = sum(w[0..i-1])
          for (int i = 1; i <= n; i++) {
              preSum[i] = preSum[i - 1] + w[i - 1];
          }
      }
    
      public int pickIndex() {
          int n = preSum.length;
          // generate a random number between [0, n) 
          // + 1 means pick a random number between [1, preSum[n - 1]]
          int target = rand.nextInt(preSum[n - 1]) + 1;

          // get the min index which prefix(i) > target 
          return left_bound(preSum, target) - 1;
      }

      int left_bound(int[] nums, int target) {
          if (nums.length == 0) return -1;
          int left = 0, right = nums.length;
          while (left < right) {
              int mid = left + (right - left) / 2;
              if (nums[mid] == target) {
                  right = mid;
              } else if (nums[mid] < target) {
                  left = mid + 1;
              } else if (nums[mid] > target) {
                  right = mid;
              }
          }
          return left;
      }
  }
  ```
