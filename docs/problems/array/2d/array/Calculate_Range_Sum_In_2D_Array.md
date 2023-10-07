# Calculate Range Sum in 2D Array

## Alias
- Leetcode (304): [Range Sum Query 2D - Immutable](https://leetcode.com/problems/range-sum-query-2d-immutable/)

## Problem
Given a 2D matrix `matrix`, handle multiple queries of the following type:
- Calculate the sum of the elements of matrix inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).

Implement the NumMatrix class:
- `NumMatrix(int[][] matrix)`: Initializes the object with the integer matrix `matrix`.
- `int sumRegion(int row1, int col1, int row2, int col2)`: Returns the sum of the elements of `matrix` inside the rectangle defined by its upper left corner `(row1, col1)` and lower right corner `(row2, col2)`.

You must design an algorithm where sumRegion works on *O(1)* time complexity.

## Examples
- Example 1
   - Input
     ```
     ["NumMatrix", "sumRegion", "sumRegion", "sumRegion"]
     [[[[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]], [2, 1, 4, 3], [1, 1, 2, 2], [1, 2, 2, 4]]
     ```
   - Output
     ```
     [null, 8, 11, 12]
     ```
   - Explanation
      - `NumMatrix numMatrix = new NumMatrix([[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]);`
      - `numMatrix.sumRegion(2, 1, 4, 3); // return 8 (i.e sum of the red rectangle)`
      - `numMatrix.sumRegion(1, 1, 2, 2); // return 11 (i.e sum of the green rectangle)`
      - `numMatrix.sumRegion(1, 2, 2, 4); // return 12 (i.e sum of the blue rectangle)`

## Solutions
- **Solution 1: Prefix sum array**
   - Idea
      - `NumMatrix()`: Build up the prefix sum array.
         - `prefixSum[i][j] means the sum of the matrix from `(0,0)` to `(i-1, j-1)`
         - `preSum[i][j] = preSum[i-1][j] + preSum[i][j-1] + matrix[i - 1][j - 1] - preSum[i-1][j-1]`
      - `sumRange()`: Calculate the range sum by prefix sum array.
         - The sum of range from `(x1, y1)` to `(x2, y2)`: `preSum[x2+1][y2+1] - preSum[x1][y2+1] - preSum[x2+1][y1] + preSum[x1][y1]`

        ![5](https://github.com/wuyichen24/coding-interview/assets/8989447/cf28f141-f058-4c0c-9f07-d67f62f43c10)

  ```java
  class NumMatrix {
      private int[][] preSum;

      public NumMatrix(int[][] matrix) {
          int m = matrix.length, n = matrix[0].length;
          if (m == 0 || n == 0) return;

          preSum = new int[m + 1][n + 1];
          for (int i = 1; i <= m; i++) {
              for (int j = 1; j <= n; j++) {
                  preSum[i][j] = preSum[i-1][j] + preSum[i][j-1] + matrix[i - 1][j - 1] - preSum[i-1][j-1];
              }
          }
      }
    
      public int sumRegion(int row1, int col1, int row2, int col2) {
          return preSum[row2+1][col2+1] - preSum[row1][col2+1] - preSum[row2+1][col1] + preSum[row1][col1];
      }
  }
  ```
