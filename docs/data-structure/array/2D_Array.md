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

