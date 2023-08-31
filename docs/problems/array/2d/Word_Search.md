# Word Search

## Alias
- Leetcode (79): [Word Search](https://leetcode.com/problems/subsets-ii/)

## Problem
Given an `m x n` grid of characters `board` and a string `word`, return `true` if `word` exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

## Examples
- Example 1
   - Input
     ```
     board = [
       ["A","B","C","E"],
       ["S","F","C","S"],
       ["A","D","E","E"]
     ]
     word = "ABCCED"
     ```
   - Output
     ```
     true
     ```
   - Explanation

     ![word2](https://github.com/wuyichen24/coding-interview/assets/8989447/4eec5b23-dace-4f33-89c7-956a214e3626)

- Example 2
   - Input
     ```
     board = [
       ["A","B","C","E"],
       ["S","F","C","S"],
       ["A","D","E","E"]
     ]
     word = "SEE"
     ```
   - Output
     ```
     true
     ```
   - Explanation
 
     ![word-1](https://github.com/wuyichen24/coding-interview/assets/8989447/a103e176-dfea-4a3b-b021-50d730c2badb)
     
- Example 3
   - Input
     ```
     board = [
       ["A","B","C","E"],
       ["S","F","C","S"],
       ["A","D","E","E"]
     ]
     word = "ABCB"
     ```
   - Output
     ```
     false
     ```
   - Explanation
 
     ![word3](https://github.com/wuyichen24/coding-interview/assets/8989447/71189e97-1a6b-4092-86a4-a80e15a890fe)

## Solutions
- Solution 1: DFS
   - Idea: Traverse the 2D array, when the first letter matched, start the DFS recursion function.
 
  ```java
  class Solution {
      static int[] dx = {-1, 1, 0, 0}; // Directional changes in x-coordinate
      static int[] dy = {0, 0, -1, 1}; // Directional changes in y-coordinate
      static boolean[][] visited;

      public boolean exist(char[][] board, String word) {
          int rows = board.length;
          int cols = board[0].length;
          visited = new boolean[rows][cols];

          char[] words = word.toCharArray();

          for (int i = 0; i < rows; i++) {
              for (int j = 0; j < cols; j++) {
                  if (words[0] == board[i][j] && recursion(board, words, i, j, 0)) {    // only start DSF when first letter matched
                      return true;
                  }
              }
          }

          return false;
      }

      private boolean recursion(char[][] board, char[] words, int x, int y, int index) {
          if (index == words.length) {
              return true;
          }

          int rows = board.length;
          int cols = board[0].length; 

          // if it is out of boundary or if current letter doesn't match or if current cell is visited, stop
          if (x < 0 || x >= rows || y < 0 || y >= cols || board[x][y] != words[index] || visited[x][y]) {
              return false;
          }

          visited[x][y] = true;

          for (int k = 0; k < 4; k++) {
              int newX = x + dx[k];
              int newY = y + dy[k];

              boolean result = recursion(board, words, newX, newY, index+1);
              if (result) {
                  return true;
              }
          }

          visited[x][y] = false;
          return false;
      }
  }
  ```
