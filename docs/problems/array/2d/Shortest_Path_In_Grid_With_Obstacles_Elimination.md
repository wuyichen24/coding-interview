# Shortest Path in a Grid with Obstacles Elimination

## Alias
- Leetcode (1293): [Shortest Path in a Grid with Obstacles Elimination](https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/)

## Problem
You are given an `m x n` integer matrix `grid` where each cell is either `0` (empty) or `1` (obstacle). You can move up, down, left, or right from and to an empty cell in one step.

Return the minimum number of **steps** to walk from the upper left corner `(0, 0)` to the lower right corner `(m - 1, n - 1)` given that you can eliminate **at most** `k` obstacles. If it is not possible to find such walk return -1.

## Examples
- Example 1
   - Input
     ```
     grid = [[0,0,0],[1,1,0],[0,0,0],[0,1,1],[0,0,0]]
     k = 1
     ```
   - Output
     ```
     6
     ```
   - Explanation
      - The shortest path with one obstacle elimination at position `(3,2)` is `6`. Such path is `(0,0) -> (0,1) -> (0,2) -> (1,2) -> (2,2) -> (3,2) -> (4,2)`.
    
     ![short1-grid](https://github.com/wuyichen24/coding-interview/assets/8989447/26dd80dd-bdbd-4f8c-aa7d-c984119395a2)
    
- Example 2
   - Input
     ```
     grid = [[0,1,1],[1,1,1],[1,0,0]]
     k = 1
     ```
   - Output
     ```
     -1
     ```
   - Explanation
      - We need to eliminate at least two obstacles to find such a walk.

     ![short2-grid](https://github.com/wuyichen24/coding-interview/assets/8989447/e9476b02-5482-4f1e-b144-e3da50374476)

## Solutions
- **Solution 1: BFS**
   - Idea:
      - Add K into the node information, so we know the current node, what is the x, the y and the k (how many k has been used).
    
  ```java
  class Solution {
      static int[] dx = {-1, 1, 0, 0};
      static int[] dy = {0, 0, -1, 1};

      public int shortestPath(int[][] grid, int k) {
          int rows = grid.length;
          int cols = grid[0].length;

          Queue<int[]> queue = new LinkedList<>();
          boolean[][][] visited = new boolean[rows][cols][k+1];

          visited[0][0][0] = true;
          queue.offer(new int[]{0, 0, 0});

          int steps = 0;

          while (!queue.isEmpty()) {
              int size = queue.size();
              for (int i = 0; i < size; i++) {
                  int[] current = queue.poll();
                  int curX = current[0];
                  int curY = current[1];
                  int curK = current[2];

                  if (curX == rows-1 && curY == cols - 1) {      // If the current position reach the most down right cell,
                      return steps;                              // return the steps
                  }

                  for (int d = 0; d < 4; d++) {                  // Try 4 directions
                      int newX = curX + dx[d];
                      int newY = curY + dy[d];
                      int newK = curK;

                      if (newX >= 0 && newX < rows && newY >= 0 && newY < cols) {   // If the next direction is still in the grid
                          if (grid[newX][newY] == 1) {                              // If the next cell is an obstacle,
                              newK++;                                               // remove it and increase the K
                          }
                          if (newK <= k && !visited[newX][newY][newK]) {            // If the next cell is not visited and K is not go above the threshold
                              visited[newX][newY][newK] = true;
                              queue.offer(new int[]{newX, newY, newK});
                          }
                      }
                  }
              }
              steps++;
          }

          return -1;
      }
  }
  ```
