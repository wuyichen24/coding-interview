# Generate 2D Array by Spiral Traversal

## Alias
- Leetcode (59): [Spiral Matrix II](https://leetcode.com/problems/spiral-matrix-ii/)

## Problem
Given a positive integer `n`, generate an `n x n` `matrix` filled with elements from 1 to n<sup>2</sup> in spiral order.

## Examples
- Example 1
   - Input
     ```
     n = 3
     ```
   - Output
     ```
     [
       [1,2,3],
       [8,9,4],
       [7,6,5]
     ]
     ```
   - Explanation

     ![spiraln](https://github.com/wuyichen24/coding-interview/assets/8989447/fb853397-e8b3-413b-bfed-de194671da86)

## Solutions
- **Solution 1**
   - Idea
      - Use `rowBegin`, `rowEnd`, `colBegin` and `colEnd` to mark the end of the traversal boundary
      - Consider 4 directions
         - Right: Increment `rowBegin` by 1.
         - Down:  Decrement `colEnd` by 1.
         - Left:  Decrement `rowEnd` by 1.
         - Up:    Increment `colBegin` by 1.

  ```java
  public int[][] generateMatrix(int n) {
      int[][] matrix = new int[n][n];
      int upper_bound = 0, lower_bound = n - 1;
      int left_bound = 0, right_bound = n - 1;

      int num = 1;
    
      while (num <= n * n) {
          // Traverse Right
          if (upper_bound <= lower_bound) {
              for (int j = left_bound; j <= right_bound; j++) {
                  matrix[upper_bound][j] = num++;
              }

              upper_bound++;
          }

          // Traverse Down
          if (left_bound <= right_bound) {
              for (int i = upper_bound; i <= lower_bound; i++) {
                  matrix[i][right_bound] = num++;
              }
              right_bound--;
          }

          // Traverse Left
          if (upper_bound <= lower_bound) {
              for (int j = right_bound; j >= left_bound; j--) {
                  matrix[lower_bound][j] = num++;
              }
              lower_bound--;
          }

          // Traverse Up
          if (left_bound <= right_bound) {
              for (int i = lower_bound; i >= upper_bound; i--) {
                  matrix[i][left_bound] = num++;
              }
              left_bound++;
          }
      }
      return matrix;
  }
  ```
