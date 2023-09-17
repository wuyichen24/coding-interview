# Get Size of Largest Island

## Alias
- Leetcode (827): [Making A Large Island](https://leetcode.com/problems/making-a-large-island/)

## Problem
- For an N x N binary matrix, each cell can be 1 or 0.
- Get the size of the largest island by changing at most one cell from 0 to 1.
- An island is a 4-directionally connected group of cells have 1.

## Solutions
- Soluton 1: Depth-first search
   - For each 0 cell, temporarily change it to 1, calculate the size of the island from that cell.
   - Use depth-first search to calculate the size of an island.
   - For depth-first search
      - Each cell will be represented as a serial number for identification, from 0 to N*N.
      - The serial number of a cell can be calculated from or to the row and column of the cell.
      - Each cell will have 4 directions to go: up, left, down, right.

        ![Island](https://user-images.githubusercontent.com/8989447/118382150-be354b00-b5af-11eb-8fe7-0827d0a1b01e.png)
      
  ```java
  class Solution {
      int[] rowChange = new int[]{-1, 0, 1, 0};                    // The row    change for going up, left, down, and right
      int[] colChange = new int[]{0, -1, 0, 1};                    // The column change for going up, left, down, and right

      public int largestIsland(int[][] grid) {
          int N = grid.length;

          int ans = 0;
          boolean hasZero = false;
          for (int r = 0; r < N; ++r)
              for (int c = 0; c < N; ++c)
                  if (grid[r][c] == 0) {                           // For each cell = 0, change it to 1 and calculate the size of the current island
                      hasZero = true;
                      grid[r][c] = 1;
                      ans = Math.max(ans, calculateIslandSize(grid, r, c));
                      grid[r][c] = 0;
                  }

          return hasZero ? ans : N*N;
      }

      public int calculateIslandSize(int[][] grid, int r0, int c0) {
          int N = grid.length;
          Stack<Integer> stack      = new Stack();                 // The stack for depth-first search
          Set<Integer> visitedCells = new HashSet();               // The set for recording all the visited cells
          stack.push(r0 * N + c0);                                 // Push the current cell to the stack (each cell has a unique number)
          visitedCells.add(r0 * N + c0);                           // Add the current cell to the visited cells
                                                                   // (each cell can be represented as a serial number, from 0 to N*N)
          while (!stack.isEmpty()) {
              int serialNum = stack.pop();
              int r = serialNum / N;                               // Calculate the row from the serial number
              int c = serialNum % N;                               // Calculate the column from the serial number
              for (int k = 0; k < 4; ++k) {                        // For current cell, there are 4 directions: up, left, down, right
                  int nr = r + rowChange[k], nc = c + colChange[k];// Get the row and column of the next direction cell
                  if (!visitedCells.contains(nr * N + nc)          // If the next direction cell is not visited
                      && 0 <= nr && nr < N && 0 <= nc && nc < N    //     and it is still in the grid (0 <= nc/nr < N)
                      && grid[nr][nc] == 1) {                      //     and it is 1
                      stack.push(nr * N + nc);                     // Push the next direction cell into stack and visited cell set
                      visitedCells.add(nr * N + nc);
                  }
              }
          }

          return visitedCells.size();
      }
  }
  ```
