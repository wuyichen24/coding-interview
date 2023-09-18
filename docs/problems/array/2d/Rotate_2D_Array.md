# Rotate 2D Array

## Alias
- Leetcode (48): [Rotate Image](https://leetcode.com/problems/rotate-image/)

## Problem
You are given an `n x n` 2D `matrix` representing an image, **rotate the image by 90 degrees (clockwise)**.

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. **DO NOT allocate another 2D matrix and do the rotation**.

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
     [
       [7,4,1],
       [8,5,2],
       [9,6,3]
     ]
     ```
   - Explanation
     
     ![mat1](https://github.com/wuyichen24/coding-interview/assets/8989447/9b3a64e5-8bfc-4c02-a9e5-5a0ac5d7d617)
      
- Example 2
   - Input
     ```
     [
       [5,1,9,11],
       [2,4,8,10],
       [13,3,6,7],
       [15,14,12,16]
     ]
     ```
   - Output
     ```
     [
       [15,13,2,5],
       [14,3,4,1],
       [12,6,8,9],
       [16,7,10,11]
     ]
     ```
   - Explanation

     ![mat2](https://github.com/wuyichen24/coding-interview/assets/8989447/13d3287e-f35c-4281-b9bb-606986323aad)

## Solutions
- **Solution 1: Mirror on diagonal and reverse left to right**
   - Idea
      - Mirror on diagonal
        
        ![2](https://github.com/wuyichen24/coding-interview/assets/8989447/3dd17297-8df6-44ed-b253-8338f688e378)

      - Reverse left to right

        ![3](https://github.com/wuyichen24/coding-interview/assets/8989447/b015b5b5-d100-4c90-be04-25dff8eb02e7)

  ```java
  class Solution {
      public void rotate(int[][] matrix) {
          mirrorOnDiagonal(matrix);
          reverseLeftToRight(matrix);
      }
    
      public void mirrorOnDiagonal(int[][] matrix) {
          int n = matrix.length;
          for (int i = 0; i < n; i++) {
              for (int j = i + 1; j < n; j++) {
                  int tmp = matrix[j][i];
                  matrix[j][i] = matrix[i][j];
                  matrix[i][j] = tmp;
              }
          }
      }
    
      public void reverseLeftToRight(int[][] matrix) {
          int n = matrix.length;
          for (int i = 0; i < n; i++) {
              for (int j = 0; j < n / 2; j++) {
                  int tmp = matrix[i][j];
                  matrix[i][j] = matrix[i][n - j - 1];
                  matrix[i][n - j - 1] = tmp;
              }
          }
      }
  }
  ```
