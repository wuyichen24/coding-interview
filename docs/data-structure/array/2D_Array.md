# 2D Array

- [**Basic operations**](#basic-operations)
   - [Traverse](#traverse)
   - [Search](#search)
      - [BFS](../../solution-patterns/Breadth_First_Search.md#2d-array)
      - [DFS](../../solution-patterns/Depth_First_Search.md#2d-array)
- [**Strategies**](#strategies)
- [**Common Topics**](#common-topics)

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

## Common topics
[back to **Problem_Categories**](../../problem_patterns/Problem_Categories.md)

- **Path**
   - [Shortest Path in a Grid with Obstacles Elimination](../../problems/array/2d/Shortest_Path_In_Grid_With_Obstacles_Elimination.md)
- **Search**
   - [Word Search](../../problems/array/2d/Word_Search.md)
- **Traversal**
   - [Spiral Traversal](../../problems/array/2d/Spiral_Traversal.md)
- **Island**
   - [Number of Islands](../../problems/array/2d/Number_Of_Islands.md)
   - [Get Size of Largest Island](../../problems/array/2d/Get_Size_Of_Largest_Island.md)
   - 1254 Number of Closed Islands
   - 1905 Count Sub Islands
   - 694 Number of Distinct Islands
   - 695 Max Area of Island
- **Other**
   - [Number of Ways of Cutting a Pizza](../../problems/array/2d/Number_Of_Ways_Of_Cutting_Pizza.md)
   - [N-Queens](../../problems/array/2d/N_Queens.md)

[back to **Problem_Categories**](../../problem_patterns/Problem_Categories.md)
