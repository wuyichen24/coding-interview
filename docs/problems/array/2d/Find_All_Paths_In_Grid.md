# Find All Paths in Grid

## Problem
Given N, representing the size of an NxN square grid, Return all the paths from the top left corner to the bottom right corner, given that you can only move down or right in the grid. The return value should be an array of strings.

## Examples
- Example 1
   - Input
     ```
     N = 3
     ```
   - Output
     
   - Explanation
     ```
     +---+---+---+ +---+---+---+ +---+---+---+ +---+---+---+
     | X |   |   | | X | X | X | | X | X |   | | X |   |   |
     +---+---+---+ +---+---+---+ +---+---+---+ +---+---+---+
     | X |   |   | |   |   | X | |   | X |   | | X | X | X |
     +---+---+---+ +---+---+---+ +---+---+---+ +---+---+---+
     | X | X | X | |   |   | X | |   | X | X | |   |   | X |
     +---+---+---+ +---+---+---+ +---+---+---+ +---+---+---+
     DDRR          RRDD          RDDR          DRRD

## Solutions
- **Solution 1: DFS**
   - Idea
      - Use DFS to find all the paths.
  ```java
  public class Solution {
      public List<String> paths(int n) {
          List<String> paths = new ArrayList<>();
          dfs(0, 0, n, "", paths);
          return paths
      }

      private static void dfs(int x, int y, int n, String currentPath, List<String> paths) {
          if (x >= n - 1 && y >= n - 1) {
              paths.add(currentPath);
              return;
          }
          if (x < n - 1) {
              dfs(x + 1, y, n, currentPath + "R", paths);
          }
          if (y < n - 1) {
              dfs(x, y + 1, n, currentPath + "D", paths);
          }
      }
  }
  ```
- **Solution 2: BFS**
   - Idea
      - Use BFS to find all the paths.
  ```java
  class BFSState {
      public int x;
      public int y;
      public String path;
  }

  public class Solution {
      public List<String> findPaths(int n) {
          List<String> paths = new ArrayList<>();
          Queue<BFSState> queue = new LinkedList<>();
          queue.offer(new BFSState(0, 0, ""));
        
          while (!queue.isEmpty()) {
              BFSState currentState = queue.poll();
              int x = currentState.x;
              int y = currentState.y;
              String currentPath = currentState.path;

              if (x == n - 1 && y == n - 1) {
                  paths.add(currentPath);
                  continue;
              }

              if (x < n - 1) {
                  queue.offer(new BFSState(x + 1, y, currentPath + "R"));
              }
              if (y < n - 1) {
                  queue.offer(new BFSState(x, y + 1, currentPath + "D"));
              }
          }
        
          return paths;
      }
  }
  ```
