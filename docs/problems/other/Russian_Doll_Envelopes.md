# Russian Doll Envelopes

## Alias
- Leetcode (354): [Russian Doll Envelopes](https://leetcode.com/problems/longest-valid-parentheses/)

## Problem
You are given a 2D array of integers envelopes where `envelopes[i] = [wi, hi]` represents the width and the height of an envelope.

One envelope can fit into another if and only if both the width and height of one envelope are greater than the other envelope's width and height.

**Return the maximum number of envelopes you can Russian doll** (i.e., put one inside the other).

**Note**: You cannot rotate an envelope.

## Examples
- Example 1
   - Input
     ```
     [[5,4],[6,4],[6,7],[2,3]]
     ```
   - Output
     ```
     3
     ```
   - Explanation
      - The maximum number of envelopes you can Russian doll is 3 (`[2,3] => [5,4] => [6,7]`). 

## Solutions
- **Solution 1: Dynamic programming**
   - Idea
      - Sort the envelopes as width ascending and height descending.
         - Make sure the envelopes can Russian doll on width.
        ```
        [1 , 8]
        [2 , 3]
        [5 , 4]
        [5 , 2]
        [6 , 7]
        [6 , 4]
        ```
      - Find the [Longest Increasing Subsequence](../string/Longest_Increasing_Subsequence.md) on height.
         - Make sure the envelopes can Russian doll on height.
        ```
        [1 , 8]
        [2 , 3] *
        [5 , 4] *
        [5 , 2]
        [6 , 7] *
        [6 , 4]
        ```

  ```java
  class Solution {
      public int maxEnvelopes(int[][] envelopes) {
          int n = envelopes.length;

          // Sort the envelopes as width ascending and height descending
          Arrays.sort(envelopes, new Comparator<int[]>() {
              public int compare(int[] a, int[] b) {
                  return a[0] == b[0] ? 
                      b[1] - a[1] : a[0] - b[0];
              }
          });
    
          // Get the height array
          int[] height = new int[n];
          for (int i = 0; i < n; i++)
              height[i] = envelopes[i][1];

          // Run LIS on the height array
          return lengthOfLIS(height);
      }

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
  }
  ```
