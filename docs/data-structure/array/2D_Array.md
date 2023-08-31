# 2D Array

- [**Basic operations**](#basic-operations)
   - [Traverse](#traverse)
- [**Strategies**](#strategies)

## Basic operations
### Traverse
- **By-row traversal**
  ```
  void traverseByRow(int[][] grid) {
     for (int i = 0; i < grid.length; i++) {
          for (int j = 0; j < grid[0].length; i++) {
              visit(grid[i][j]);
          }
      }
  }
  ```
### Search
- BFS: See [here](../../solution-patterns/Breadth_First_Search.md#2d-array)
- DFS: See [here](../../solution-patterns/Depth_First_Search.md#2d-array)

## Strategies
- Strategy 1
   - Idea
      - When you don't know where is the starting point to start a search algorithm, just traverse by rows. If the current cell satisfy the critiera, just start BFS or DFS algorithm.
   - Code example
     ```
     void traverseByRow(int[][] grid) {
         for (int i = 0; i < grid.length; i++) {
             for (int j = 0; j < grid[0].length; i++) {
                 if (satisfy the criteria) {
                     BFS() or DFS()
                 }
             }
         }
     }
     ```
   - Question examples
     - [Number of Islands](../../problems/array/2d/Number_Of_Islands.md)
     - [Word Search](../../problems/array/2d/Word_Search.md)
