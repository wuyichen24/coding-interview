# Maximal Square

## Alias
- Leetcode (221): [Maximal Square](https://leetcode.com/problems/maximal-square/)

## Problem
Given an `m x n` binary `matrix` filled with `0`'s and `1`'s, **find the largest square containing only `1`'s and return its area**.

## Examples
- Example 1
   - Input
     ```
     [
       ["1","0","1","0","0"],
       ["1","0","1","1","1"],
       ["1","1","1","1","1"],
       ["1","0","0","1","0"]
     ]
     ```
   - Output
     ```
     4
     ```
   - Explanation
 
     ![max1grid](https://github.com/wuyichen24/coding-interview/assets/8989447/89b5d6ae-3549-4950-a28b-5354d4fe041f)

- Example 2
   - Input
     ```
     [
       ["0","1"],
       ["1","0"]
     ]
     ```
   - Output
     ```
     1
     ```
   - Explanation
 
     ![max2grid](https://github.com/wuyichen24/coding-interview/assets/8989447/8d0c4b79-08a4-4894-8da3-82e84f1024b9)

## Solutions
- **Solution 1: Dynamic programming**
   - Idea
      - `dp[i][j]` is `matrix[i][j]` as the lower right corner element, the maximum side length of the square (以 `matrix[i][j]` 为右下角元素的全为 1 正方形矩阵的最大边长).
      - State transition equation:
        ```
        if (matrix[i][j] == 1)
            dp[i][j] = min(dp[i-1][j], dp[i-1][j-1], dp[i][j-1]) + 1; // similar to the "bucket effect", the maximum side length depends on the square with the shortest side lengt
        else
            dp[i][j] = 0;
        ```

  ```java
  public int maximalSquare(char[][] matrix) {
      int m = matrix.length, n = matrix[0].length;
      int[][] dp = new int[m][n];

      // base case: calculate first row and first column
      for (int i = 0; i < m; i++) {
          dp[i][0] = matrix[i][0] - '0';
      }
      for (int j = 0; j < n; j++) {
          dp[0][j] = matrix[0][j] - '0';
      }

      // calculate the rest position
      for (int i = 1; i < m; i++) {
          for (int j = 1; j < n; j++) {
              if (matrix[i][j] == '0') {
                  continue;
              }
              dp[i][j] = Math.min(Math.min(dp[i-1][j] , dp[i][j-1]) , dp[i-1][j-1]) + 1;
          }
      }

      // find the max side length
      int len = 0;
      for (int i = 0; i < m; i++) {
          for (int j = 0; j < n; j++) {
              len = Math.max(len, dp[i][j]);
          }
      }
      return len * len;
  }
  ```
