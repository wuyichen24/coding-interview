# Number of Islands

## Alias
- Leetcode (200): [Number of Islands](https://leetcode.com/problems/number-of-islands/)

## Problem
Given an `m x n` 2D binary grid `grid` which represents a map of `'1'`s (land) and `'0'`s (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

## Examples
- Example 1
   - Input
     ```
     grid = [
       ["1","1","1","1","0"],
       ["1","1","0","1","0"],
       ["1","1","0","0","0"],
       ["0","0","0","0","0"]
     ]
     ```
   - Output
     ```
     1
     ```
- Example 2
   - Input
     ```
     grid = [
       ["1","1","0","0","0"],
       ["1","1","0","0","0"],
       ["0","0","1","0","0"],
       ["0","0","0","1","1"]
     ]
     ```
   - Output
     ```
     3
     ```

## Solutions
- **Solution 1: DFS**
   - Idea
      - Use DFS to count number of islands.
   - Steps
      - Original function:
         - Check each elements in the 2-d array:
            - If the current element is `'1'`, it means it is a land, so:
               - Call the recursive function to check 4 directions (up, down, left right).
               - Increase the island counter by 1.
      - Recursive function:
         - If the current element is out of boundary or is not an land, stop.
         - If the current element is a land:
            - Update the current element as 0 so that we don't reconsider it again.
            - Call the recursive function for next 4 direction elements (up, down, left right).
  ```java
  class Solution {
      int numIslands(char[][] grid) {
          int res = 0;
          int m = grid.length, n = grid[0].length;
          for (int i = 0; i < m; i++) {
              for (int j = 0; j < n; j++) {
                  if (grid[i][j] == '1') {
                      res++;
                      dfs(grid, i, j);
                  }
              }
          }
          return res;
      }

      void dfs(char[][] grid, int i, int j) {
          int m = grid.length, n = grid[0].length;
          if (i < 0 || j < 0 || i >= m || j >= n) {
              return;
          }
          if (grid[i][j] == '0') {  // if it is already water
              return;
          }
          
          grid[i][j] = '0';   // change land to water

          dfs(grid, i + 1, j);
          dfs(grid, i, j + 1);
          dfs(grid, i - 1, j);
          dfs(grid, i, j - 1);
      }
  }
  ```
