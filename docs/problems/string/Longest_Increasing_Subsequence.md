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
      - `dp[i]` means the length of the longest increasing subsequence from `nums[0 ... i]` (the longest increasing subsequence ended by `nums[i]`).
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
   - Complexity
      - Time complexity: *O(n<sup>2</sup>)*

  ```java
  int lengthOfLIS(int[] nums) {
      int[] dp = new int[nums.length];

      // fill each element in the dp array as 1
      Arrays.fill(dp, 1);         

      // calculate the dp[i]: max(dp[j]) + 1
      for (int i = 0; i < nums.length; i++) {
          for (int j = 0; j < i; j++) {
              if (nums[i] > nums[j]) 
                  dp[i] = Math.max(dp[i], dp[j] + 1);

          }
      }

      // get maximum value amoung the dp array.
      int res = 0;
      for (int i = 0; i < dp.length; i++) {
          res = Math.max(res, dp[i]);
      }
      return res;
  }
  ```

- **Solution 2: Binary search**
   - Idea
      - Consider each number is a poker card and separate poker cards into multiple piles:
         - You can only put a card with a lower value onto a card with a higher value (只能把点数小的牌压到点数比它大的牌上).
         - If the current card has a higher value and there is no pile that can be placed, create a new pile and put this card into it (如果当前牌点数较大，没有可以放置的堆，则新建一个堆).
         - If there are multiple piles for the current card, select the leftmost pile to place (如果当前牌有多个堆可供选择，则选择最左边的那一堆放置).
      - The top of each pile is a sorted array, you can do binary search on it.
      - The number of piles is the final answer.

        ![poker4](https://github.com/wuyichen24/coding-interview/assets/8989447/8b385f74-6a1a-421c-9215-c9c1666a43d2)

  ```java
  int lengthOfLIS(int[] nums) {
      int[] top = new int[nums.length];

      int piles = 0;                           // number of piles
  
      for (int i = 0; i < nums.length; i++) {
          int poker = nums[i];                 // the current poker card needs to be put

          int left = 0, right = piles;         // find the pile for the current card
          while (left < right) {
              int mid = (left + right) / 2;
              if (top[mid] > poker) {
                  right = mid;
              } else if (top[mid] < poker) {
                  left = mid + 1;
              } else {
                  right = mid;
              }
          }
        
          if (left == piles) piles++;          // if there is no pile for the current card, create a new pile
          top[left] = poker;                   // put the card into the pile
      }
      
      return piles;                            // number of piles is the final answer
 }
  ```
