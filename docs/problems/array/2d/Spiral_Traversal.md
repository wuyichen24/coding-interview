# Spiral Traversal

## Alias
- Leetcode (54): [Spiral Matrix](https://leetcode.com/problems/spiral-matrix/)

## Problem
Given an `m x n` `matrix`, return all elements of the `matrix` in spiral order.

## Examples
- Example 1
   - Input
     ```
     [
       [1,2,3],
       [4,5,6],
       [7,8,9]
     ]
     ```
   - Output
     ```
     [1,2,3,6,9,8,7,4,5]
     ```
   - Explanation
     
     ![spiral1](https://github.com/wuyichen24/coding-interview/assets/8989447/fec58a08-16bd-4a13-9cda-e7e757b6686f)

- Example 2
   - Input
     ```
     [
       [1,2,3,4],
       [5,6,7,8],
       [9,10,11,12]
     ]
     ```
   - Output
     ```
     [1,2,3,4,8,12,11,10,9,5,6,7]
     ```
   - Explanation

     ![spiral](https://github.com/wuyichen24/coding-interview/assets/8989447/5310830c-6eda-424f-a0f4-9734f41a13e5)

## Solutions
- Solution 1
   - Idea
      - Use `rowBegin`, `rowEnd`, `colBegin` and `colEnd` to mark the end of the traversal boundary
      - Consider 4 directions
         - Right: Increment `rowBegin` by 1.
         - Down:  Decrement `colEnd` by 1.
         - Left:  Decrement `rowEnd` by 1.
         - Up:    Increment `colBegin` by 1.

  ```java
  public List<Integer> spiralOrder(int[][] matrix) {
      List<Integer> res = new ArrayList<Integer>();
        
      if (matrix.length == 0) {
          return res;
      }
        
      int rowBegin = 0;
      int rowEnd   = matrix.length - 1;
      int colBegin = 0;
      int colEnd   = matrix[0].length - 1;
        
      while (rowBegin <= rowEnd && colBegin <= colEnd) {
          // Traverse Right
          for (int i = colBegin; i <= colEnd; i++) {
              res.add(matrix[rowBegin][i]);
          }
          rowBegin++;
            
          // Traverse Down
          for (int i = rowBegin; i <= rowEnd; i++) {
              res.add(matrix[i][colEnd]);
          }
          colEnd--;

          // Traverse Left
          if (rowBegin <= rowEnd) {
              for (int i = colEnd; i >= colBegin; i--) {
                  res.add(matrix[rowEnd][i]);
              }
          }
          rowEnd--;

          // Traverse Up
          if (colBegin <= colEnd) {
              for (int i = rowEnd; i >= rowBegin; i--) {
                  res.add(matrix[i][colBegin]);
              }
          }
          colBegin++;
      }  
      return res;
  }
  ```
