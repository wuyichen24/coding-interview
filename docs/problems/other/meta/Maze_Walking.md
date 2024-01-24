# Maze Walking

## Problem
You are given a game board represented as a 2D array of zeroes and ones. Zero stands for passable positions and one stands for impassable positions. Design an algorithm to find a path from top left corner to bottom right corner.

For example, for the following board:
```
entrance -> 0 0 0 0 0 0 0
            0 0 1 0 0 1 0
            0 0 1 0 1 1 0
            0 0 1 0 1 0 1
            1 1 1 0 0 0 0 -> exit
```
a possible path is:
```
entrance -> + + + + 0 0 0
            0 0 1 + 0 1 0
            0 0 1 + 1 1 0
            0 0 1 + 1 0 1
            1 1 1 + + + + -> exit
```
Assuming a zero-indexed grid of rows and columns, with (0, 0) at left top corner (entrance), we'd return:
(0, 0) -> (0, 1) -> (0, 2) -> (0, 3) -> (1, 3) -> (2, 3) -> 
  (3, 3) -> (4, 3) -> (4, 4) -> (4, 5) -> (4, 6)

## Solutions
- **Solution 1: BFS**

  ```java
  public static boolean dfs(int[][] board, int x, int y, List<int[]> path) {
      path.add(new int[]{x, y});

      // if it goes to bottom right, stop
      if (x == board.length - 1 && y == board[0].length - 1) {
          return true;
      }

      // if it goes out of bounary, stop
      if (x < 0 || x >= board.length || y < 0 || y >= board[0].length || board[x][y] != 0) {
          path.remove(path.size() - 1);
          return false;
      }

      board[x][y] = 2;

      // try 4 directions
      if (dfs(board, x + 1, y, path)) {
          return true;
      }
      if (dfs(board, x, y + 1, path)) {
          return true;
      }
      if (dfs(board, x - 1, y, path)) {
          return true;
      }
      if (dfs(board, x, y - 1, path)) {
          return true;
      }

      path.remove(path.size() - 1);
      return false;
  }
  ```
