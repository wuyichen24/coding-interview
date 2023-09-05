# House Robber

## Alias
- Leetcode (198): [House Robber](https://leetcode.com/problems/house-robber/)

## Problem
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and **it will automatically contact the police if two adjacent houses were broken into on the same night**.

Given an integer array `nums` representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

## Examples
- Example 1
   - Input
     ```
     [1,2,3,1]
     ```
   - Output
     ```
     4
     ```
   - Explanation
      - Rob house 1 (money = 1) and then rob house 3 (money = 3).
      - Total amount you can rob = 1 + 3 = 4.
- Example 2
   - Input
     ```
     [2,7,9,3,1]
     ```
   - Output
     ```
     12
     ```
   - Explanation
      - Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
      - Total amount you can rob = 2 + 9 + 1 = 12.

## Solutions
- **Solution 1: Recursion**
   - Idea
      - For the current house `i`, there are 2 options:
         - Rob the current house `i`, rob the previous `i-2` house.
         - Don't rob the current house `i`, roble the previous `i-1` house.
      - So the recursion logic would be
         - `rob(i) = Math.max( rob(i - 2) + currentHouseValue, rob(i - 1) )`.

  ```java
  class Solution {
      public int rob(int[] nums) {
          return rob(nums, nums.length - 1);
      }

      private int rob(int[] nums, int i) {
          if (i < 0) {
              return 0;
          }
          return Math.max(rob(nums, i - 2) + nums[i], rob(nums, i - 1));
      }
  }
  ```
  
- **Solution 2: Recursion + memoization**
   - Idea
      - Use an array to store the result at each house.
      - If want to calculate the same result again, we could return the result from the array directly.
    
  ```java
  class Solution {
      int[] memo;

      public int rob(int[] nums) {
          memo = new int[nums.length + 1];
          Arrays.fill(memo, -1);
          return rob(nums, nums.length - 1);
      }

      private int rob(int[] nums, int i) {
          if (i < 0) {
              return 0;
          }
          if (memo[i] >= 0) {                // if the memo already has the answer, return it directly
              return memo[i];
          }
          int result = Math.max(rob(nums, i - 2) + nums[i], rob(nums, i - 1));
          memo[i] = result;
          return result;
      }
  }
  ```

- **Solution 3: Dynamic programming**
   - Idea
      - Use the relationship to calculate the result at each house directly
         - `rob(i) = Math.max( rob(i - 2) + currentHouseValue, rob(i - 1) )`

  ```java
  class Solution {
      public int rob(int[] nums) {
        
          int N = nums.length;
        
          // Special handling for empty array case.
          if (N == 0) {
              return 0;
          }
        
          int[] maxRobbedAmount = new int[nums.length + 1];
        
          // Base case initializations.
          maxRobbedAmount[N] = 0;
          maxRobbedAmount[N - 1] = nums[N - 1];
        
          // DP table calculations.
          for (int i = N - 2; i >= 0; --i) {
              // Same as the recursive solution.
              maxRobbedAmount[i] = Math.max(maxRobbedAmount[i + 1], maxRobbedAmount[i + 2] + nums[i]);
          }
        
          return maxRobbedAmount[0];
      }
  }
  ```
