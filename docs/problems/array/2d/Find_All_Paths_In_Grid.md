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
     ```
     [
         DDRR,
         RRDD,
         RDDR,
         DRRD,
         DRDR,
         RDRD
     ]
     ```
   - Explanation
     ```
     +---+---+---+ +---+---+---+ +---+---+---+ +---+---+---+ +---+---+---+ +---+---+---+
     | X |   |   | | X | X | X | | X | X |   | | X |   |   | | X |   |   | | X | X |   |
     +---+---+---+ +---+---+---+ +---+---+---+ +---+---+---+ +---+---+---+ +---+---+---+
     | X |   |   | |   |   | X | |   | X |   | | X | X | X | | X | X |   | |   | X | X |
     +---+---+---+ +---+---+---+ +---+---+---+ +---+---+---+ +---+---+---+ +---+---+---+
     | X | X | X | |   |   | X | |   | X | X | |   |   | X | |   | X | X | |   |   | X |
     +---+---+---+ +---+---+---+ +---+---+---+ +---+---+---+ +---+---+---+ +---+---+---+
     DDRR          RRDD          RDDR          DRRD          DRDR          RDRD

## Solutions
- **Solution 1: DFS**
   - Idea
      - Use DFS to find all the paths.
  ```java
  public class Solution {
      public List<String> findPaths(int n) {
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
- **Solution 3: Backtracking**
   - Idea
      - Generate the permutations which contains N-1 times of `R` and N-1 times of `D`.
  ```java
  public class GridPermutations {
      public List<String> findPaths(int n) {
          List<String> permutations = new ArrayList<>();
          backtracking("", n-1, n-1, permutations);
          return permutations;
      }

      private void backtracking(String current, int remainingD, int remainingR, List<String> permutations) {
          // Base case: if both remainingD and remainingR are 0, add current permutation to the list
          if (remainingD == 0 && remainingR == 0) {
              permutations.add(current);
              return;
          }

          // Recursive cases: try adding "D" or "R" if there are remaining moves
          if (remainingD > 0) {
              generate(current + "D", remainingD - 1, remainingR, permutations);
          }
          if (remainingR > 0 && remainingR > remainingD) {
              generate(current + "R", remainingD, remainingR - 1, permutations);
          }
      }
  }
  ```
