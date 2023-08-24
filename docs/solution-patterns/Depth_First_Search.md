# Depth-First Search

- [**Concept**](#concept)
- [**Applications**](#applications)
   - [Binary tree](#binary-tree)
   - [2D array](#2d-array)

## Concept
- Depth-first search (DFS) is an algorithm for traversing or searching tree or graph data structures.
- The idea of Depth-first search can be applied to other data structures or problems.

## Pseudocode
- Recursive implementation
  ```
  func DFS(node) {
      mark node as visited
      for adj from all the adjacents of node {
          if adj is not visited {
              DFS(adj)
          }
      }
  }
  ```
- Non recursive implementation
  ```
  func DFS(node) {
      create stack
      stack.push(node)
      while stack is not empty {
          v = stack.pop()
          if v is not visited {
              for adj from all the adjacents of v {
                  stack.push(adj) 
              }
          }
      }
  }
  ```

## Applications
### 2D array
- Introduction
   - 2D array can be traversed by depth-first search starting from any cell.
   - Use serial numbers to identify different cells.
  ```
  int[] rowChange = {-1, 0, 1, 0};                             // The row    change for going up, left, down, and right
  int[] colChange = {0, -1, 0, 1};                             // The column change for going up, left, down, and right

  // row and col is the row and column of the starting position
  // RN is the number of rows, CN is the number of columns
  public int traverseDepthFirstSearch(int[][] grid, int row, int col, int RN, int CN) {
      Stack stack;
      Set   visitedSet;                                        // The set for recording all the visited cells

      stack.push(row * CN + col);                              // Push the current cell to the stack (Use serial number to identify this cell)
      visitedSet.add(row * CN + col);                          // Add the current cell to the visitedSet (Use serial number to identify this cell)

      while (stack.isEmpty() == false) {
          int serialNumber = stack.pop();
        
          int currentRow = serialNumber / CN;                  // Recover the row from the serial number
          int currentCol = serialNumber % CN;                  // Recover the column from the serial number
        
          for (int k = 0; k < 4; ++k) {                        // For current cell, there are 4 directions can go: up, left, down, right
              int nextRow = currentRow + rowChange[k],         // Get the row of the next cell to go
              int nextCol = currentCol + colChange[k];         // Get the column of the next cell to go
            
              if (!visitedSet.contains(nextRow * CN + nextCol) // Check the next cell has been visited or not
                  && 0 <= nextRow && nextRow < RN              // Check the next cell is in the grid or not (0 <= currentRow < RN, 0 <= currentCol < CN)
                  && 0 <= nextCol && nextCol < CN) {
                  stack.push(nextRow * CN + nextCol);          // Push the next cell into stack
                  visitedSet.add(nextRow * CN + nextCol);      // Push the next cell into visitedSet
              }
          }
      }
  }
  ```
