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

- **Depth-first search (DFS)**
   - 2D array can be traversed by depth-first search starting from any cell.
   - Use serial numbers to identify different cells.
  ```
  int[] rowChange = {-1, 0, 1, 0};                             // The row    change for going up, left, down, and right
  int[] colChange = {0, -1, 0, 1};                             // The column change for going up, left, down, and right

  // row and col is the row and column of the starting cell
  // RN is the number of rows, CN is the number of columns
  public int calculateIslandSize(int[][] grid, int row, int col, int RN, int CN) {
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

## Strategies
- For 2D array, you can use serial numbers to identified different cells.
   - Construction
      - The leftmost cell in the first row will be 0
      - The next cell on the right will increment 1.
      - The leftmost cell in each row is increased by 1 from the rightmost cell in the last row.

        ![sern1](https://user-images.githubusercontent.com/8989447/118384894-66a2d980-b5c7-11eb-9999-65113aea1db2.png)
        
   - The serial number of each cell can be calculated from or to the row and column of that cell.
      - From row+colum to serial number: `SerialNumber = row x CN + column` (`CN` is the number of columns)
      - From serial number to row+column: 
        ```
        row    = serialNumber / CN
        column = serialNumber % CN
        ```
        
        ![sern2](https://user-images.githubusercontent.com/8989447/118384987-27c15380-b5c8-11eb-86d8-51db936300df.png)

   - Benefit
      - Use one number to identify a cell rather than 2 numbers (row and column).
      - Can still store the row and column information.
      - Can be used to identify different cells (like primary key).
